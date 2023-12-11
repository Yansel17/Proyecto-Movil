// WeatherService.js
import axios from "axios";

const API_KEY = "76fdfd3f15a4b66f0f6258a0b9d29d8f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    throw {
      message: "Error al obtener el clima",
      originalError: error,
    };
  }
};

export default getWeather;
