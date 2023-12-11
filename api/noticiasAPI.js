//Api Multas
import axios from "axios";

export const getNoticias = async () => {
  try {
    const res = await axios.get("https://remolacha.net/wp-json/wp/v2/posts?search=digeset");
    return res.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
};
