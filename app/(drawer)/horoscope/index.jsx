import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import horoscopeAPI from "../../../api/horoscopeAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [horoscope, setHoroscope] = useState("");
  const [user, setUser] = useState({ signo: "", fecha: "" });

  useEffect(() => {
    async function getUserData() {
      try {
        const value = await AsyncStorage.getItem("userData");
        if (value !== null) {
          setUser(JSON.parse(value));
        }
      } catch (error) {
        console.log(error);
      }
    }

    getUserData();
  }, []);

  async function getData() {
    const { data } = await horoscopeAPI.getHoros({
      sign: user.signo,
      day: user.fecha,
    });
    setHoroscope(data.horoscope_data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus datos:</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Signo:</Text>
        <Text style={styles.info}>{user.signo}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Fecha de nacimiento:</Text>
        <Text style={styles.info}>{user.fecha}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={[{ backgroundColor: "green" }]}
          labelStyle={{ fontSize: 20, color: "white" }}
          onPress={getData}
        >
          Obtener horóscopo
        </Button>
      </View>
      <Text style={styles.horoscope}>{horoscope}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
    color: "#333",
  },
  info: {
    fontSize: 16,
    color: "#555",
  },
  buttonContainer: {
    marginVertical: 20,
  },
  horoscope: {
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: "justify",
    color: "#333",
  },
});
