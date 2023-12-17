import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherComponent = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      {weatherData?.name && (
        <Text style={styles.cityName}>{weatherData.name}</Text>
      )}
      <Text style={styles.temperature}>
        Temperatura: {weatherData?.temperature}°K
      </Text>
      <Text style={styles.description}>
        Descripción: {weatherData?.description}
      </Text>
      {/* Agrega más información según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  cityName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  temperature: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default WeatherComponent;
