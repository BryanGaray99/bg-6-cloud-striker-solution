import json
import math
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def lambda_handler(event, context):
    data = event

    business_id = data.get("business_id", "")
    if not business_id:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": "business_id is missing"})
        }

    google_data = data.get("google", {})
    facebook_data = data.get("facebook", {})
    instagram_data = data.get("instagram", {})
    linkedin_data = data.get("linkedin", {})

    analyzer = SentimentIntensityAnalyzer()

   
    google_reviews = google_data.get("reviews", [])
    ratings = []
    sentiments = []
    for review in google_reviews:
        rat = review.get("rating", 0)
        text = review.get("text", "")
        ratings.append(rat)
        if text:
            polarity = analyzer.polarity_scores(text)
            sentiments.append(polarity["compound"])
    avg_rating = sum(ratings) / len(ratings) if ratings else 0.0
    avg_sentiment = sum(sentiments) / len(sentiments) if sentiments else 0.0

    rating_score = (avg_rating / 5.0) * 100
    sent_score = (avg_sentiment + 1) * 50  
    indice_satisfaccion = (rating_score * 0.6) + (sent_score * 0.4)

    
    fb_followers = facebook_data.get("followers", 0)
    fb_likes = facebook_data.get("avg_likes_per_post", 0)
    fb_comments = facebook_data.get("avg_comments_per_post", 0)

    ig_followers = instagram_data.get("followers", 0)
    ig_likes = instagram_data.get("avg_likes_per_post", 0)
    ig_comments = instagram_data.get("avg_comments_per_post", 0)

    li_followers = linkedin_data.get("followers", 0)
    li_likes = linkedin_data.get("avg_likes_per_post", 0)
    li_comments = linkedin_data.get("avg_comments_per_post", 0)

    total_followers = fb_followers + ig_followers + li_followers
    total_interactions = (fb_likes + fb_comments) + (ig_likes + ig_comments) + (li_likes + li_comments)

    engagement_rate = (total_interactions / total_followers) * 100 if total_followers > 0 else 0.0

    
    fb_response = facebook_data.get("avg_response_time_minutes", 0)
    ig_response = instagram_data.get("avg_response_time_minutes", 0)
    li_response = linkedin_data.get("avg_response_time_minutes", 0)

    response_times = [fb_response, ig_response, li_response]
    response_times = [t for t in response_times if t > 0]

    avg_response_time = sum(response_times) / len(response_times) if response_times else 0.0

    if avg_response_time <= 60:
        velocidad_respuesta = 100
    elif avg_response_time <= 180:
        velocidad_respuesta = 70
    else:
        velocidad_respuesta = 40

    
    fb_leads = facebook_data.get("leads_generated", 0)
    fb_converted = facebook_data.get("leads_converted", 0)
    ig_leads = instagram_data.get("leads_generated", 0)
    ig_converted = instagram_data.get("leads_converted", 0)
    li_leads = linkedin_data.get("leads_generated", 0)
    li_converted = linkedin_data.get("leads_converted", 0)

    total_leads = fb_leads + ig_leads + li_leads
    total_converted = fb_converted + ig_converted + li_converted
    conversion = (total_converted / total_leads) * 100 if total_leads > 0 else 0.0

   
    m1 = min(max(indice_satisfaccion, 0), 100)  
    m2 = min(max(engagement_rate, 0), 100)     
    m3 = min(max(velocidad_respuesta, 0), 100)
    m4 = min(max(sent_score, 0), 100)
    m5 = min(max(conversion, 0), 100)

    score_global = (m1*0.2) + (m2*0.2) + (m3*0.2) + (m4*0.2) + (m5*0.2)

    body = {
        "business_id": business_id,
        "score_global": round(score_global, 2)
    }

    return {
        "statusCode": 200,
        "body": json.dumps(body, ensure_ascii=False)
    }
