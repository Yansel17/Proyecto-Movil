//Api Multas
import axios from "axios";
import { log } from "console";

export const getMultas = async () => {
  try {
    const res = await axios.get("https://remolacha.net/wp-json/wp/v2/posts?search=digeset");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
};
