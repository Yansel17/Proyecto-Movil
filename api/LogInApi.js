import axios from "axios";

//Variables

const baseUrl = "https://multas-api.onrender.com";

// Función para realizar la solicitud de inicio de sesión
export const login = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/api/agentes/auth`, data);
    return { success: true, data: res.data, status: res.status };
  } catch (error) {
    return {
      success: false,
      error: error.response.data.message,
      status: error.response.status,
    };
  }
};
