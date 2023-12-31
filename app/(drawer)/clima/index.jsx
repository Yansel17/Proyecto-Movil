// App.js
import React, { useState } from "react";
import { View } from "react-native";
import InputComponent from "../../../Components/InputComponent";
import WeatherComponent from "../../../Components/WeatherComponent";
import getWeather from "../../..//api/WeatherService";

const clima = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(18.50012);
  const [longitude, setLongitude] = useState(-69.98857);

  const handleSearch = async () => {
    try {
      const data = await getWeather(latitude, longitude);
      setWeatherData({
        temperature: data.main.temp,
        description: data.weather[0].description,
      });
    } catch (error) {
      setWeatherData(null);
    }
  };

  const handleRegionChange = (newRegion) => {
    // Aquí puedes realizar alguna lógica si es necesario
    console.log("Region cambiada:", newRegion);
  };

  return (
    <View style={{ flex: 1 }}>
      <InputComponent onSearch={handleSearch} />
      <WeatherComponent weatherData={weatherData} />
    </View>
  );
};

export default clima;
