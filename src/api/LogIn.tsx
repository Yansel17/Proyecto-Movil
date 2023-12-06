import axios from "axios";

//Variables
const data = {
  username: "agente1",
  password: "agente123",
};
const baseUrl = "https://multas-api.onrender.com";

// Función para realizar la solicitud de inicio de sesión
async function handleLogin() {
  try {
    const res = await axios.post(`${baseUrl}/api/agentes/auth`, data);
    console.log(res.data, "login success", res.status);
  } catch (error) {
    console.error(error, error.respose.data, "login error");
  }
}
