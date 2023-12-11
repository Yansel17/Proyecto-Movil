//Api Multas
import axios from "axios";

const baseUrl = "https://multas-api.onrender.com";

export const getMultas = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/tarifario`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
};
