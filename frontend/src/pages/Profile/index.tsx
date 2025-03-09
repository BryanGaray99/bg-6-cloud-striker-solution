import "./styles.css";

const profileOptions = [
  "Correo",
  "Contraseña",
  "Teléfono",
  "Red Social #1",
  "Red Social #2",
  "Operativos",
];

function Profile() {
  const handleLogout = () => {
    alert("Sesión cerrada");
  };

  return (
    <div className="profile-container pages-container">
      {profileOptions.map((option, index) => (
        <div key={index} className="profile-option">
          {option}
        </div>
      ))}
      <div className="profile-option logout" onClick={handleLogout}>
        Cerrar Sesión
      </div>
    </div>
  );
}

export default Profile;
