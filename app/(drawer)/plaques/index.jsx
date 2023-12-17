import React, { useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Button, TextInput } from "react-native-paper";
import placasAPI from "../../../api/placasAPI";

export default function Plaques() {
  const [plate, setPlate] = useState("BXB386");
  const [plateData, setPlateData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPlateData = async () => {
    try {
      setLoading(true);
      const data = await placasAPI.getPlacas(plate);
      setPlateData(data);
    } catch (error) {
      console.error("Error fetching plate data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        value={plate}
        onChangeText={(text) => setPlate(text)}
        mode="flat"
        backgroundColor="#e9ffe1"
        placeholder="Introducir la placa"
        maxLength={6}
        theme={{ colors: { primary: "green" } }}
      />
      {loading && (
        <ActivityIndicator style={styles.activity} size="large" color="green" />
      )}
      <Button
        style={styles.button}
        icon="magnify"
        onPress={fetchPlateData}
        theme={{ colors: { primary: "green" } }}
        disabled={loading}
      >
        Buscar
      </Button>
      {plateData && (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Placa: </Text>
          <Text style={styles.text}>{plateData.placa}</Text>
          <Text style={styles.titleText}>Marca: </Text>
          <Text style={styles.text}>{plateData.marca}</Text>
          <Text style={styles.titleText}>Modelo: </Text>
          <Text style={styles.text}>{plateData.modelo}</Text>
          <Text style={styles.titleText}>Color: </Text>
          <Text style={styles.text}>{plateData.color}</Text>
          <Text style={styles.titleText}>Año: </Text>
          <Text style={styles.text}>{plateData.anio}</Text>
          <Text style={styles.titleText}>Estado: </Text>
          <Text style={styles.text}>{plateData.estado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#e9ffe1",
    width: "80%",
    borderRadius: 10,
    padding: 10,
    height: 430,
    marginTop: 18,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: "80%",
    marginBottom: 10,
  },
  button: {
    width: "80%",
    marginTop: 10,
  },
  activity: {
    marginTop: 10,
  },
});
