import axios from "axios";
import "./estilo.css";
const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:9095/api/logout");
      // Borra la cookie del token en el frontend
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // Redirige a la página de inicio de sesión
      window.location.href = "/login"; // Cambia '/login' por la ruta de tu página de inicio de sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
 
  return (
    <div className="center-container">
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Logout;
