import json
import requests
import boto3

print("Lambda function started...")

def handler(event, context):
    print("Received event:", json.dumps(event))  

    try:
        print("Parsing event body...")  
        body = json.loads(event["body"])

        cedula = body.get("cedula", None)
        if not cedula:
            raise ValueError("La cédula es requerida en el body de la petición.")
        print(f"Cedula recibida: {cedula}")

        secret_name = "MI_SECRET_NAME"  
        region_name = "us-east-1"       
        secrets_client = boto3.client("secretsmanager", region_name=region_name)

        print(f"Obteniendo secreto '{secret_name}' desde AWS Secrets Manager...")
        get_secret_value_response = secrets_client.get_secret_value(SecretId=secret_name)
        secret_string = get_secret_value_response["SecretString"]  # El secreto se guarda como string JSON

        secret_dict = json.loads(secret_string)
        api_key = secret_dict.get("apiKey", None)
        if not api_key:
            raise ValueError("El secreto obtenido no contiene 'apiKey'. Verifica la estructura en AWS Secrets Manager.")

        print("API key obtenida correctamente de Secrets Manager.")

        url = "https://api-hackathon-h0fxfrgwh3ekgge7.brazilsouth-01.azurewebsites.net/Hackathon/scoreburo"
        headers = {
            "accept": "*/*",
            "HCK-API-Key": api_key  
        }
        params = {
            "cedula": cedula,
            "pageNumber": "1",
            "pageSize": "1"
        }

        print(f"Llamando a la API con la cédula: {cedula}")
        api_response = requests.get(url, headers=headers, params=params)
        api_response.raise_for_status()  # Lanza excepción si la respuesta es un error

        print("Parsing API response JSON...")  # ✅ Debug parse
        data = api_response.json()

        if not data or not isinstance(data, list):
            raise ValueError("La respuesta de la API no contiene una lista válida o está vacía.")

        score = data[0].get("score", None)
        print(f"Score obtenido: {score}")

        response = {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Score obtenido correctamente",
                "score": score
            })
        }
        print("Response:", json.dumps(response))  
        return response

    except Exception as e:
        print("Error:", str(e))  
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }

    finally:
        print("Execution reached finally block.") 
