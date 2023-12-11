// WeatherComponent.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherComponent = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <Text>{weatherData?.name}</Text>
      <Text>Temperatura: {weatherData?.temperature}</Text>
      <Text>Descripción: {weatherData?.description}</Text>
      {/* Agrega más información según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    //poner en sus campos
    fontSize: 30,
  },
});

export default WeatherComponent;
