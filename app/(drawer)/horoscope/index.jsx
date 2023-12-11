import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import horoscopeAPI from "../../../api/horoscopeAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App() {
  const [horoscope, setHoroscope] = useState("");
  const [user, setUser] = useState({ signo: "", fecha: "" });

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
  async function getData() {
    const { data } = await horoscopeAPI.getHoros({
      sign: user.signo,
      day: user.fecha,
    });
    setHoroscope(data.horoscope_data);
  }

  getUserData();
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Tus datos: </Text>
      <Text style={styles.titles}>Signo: </Text>
      <Text style={styles.description}>{user.signo}</Text>
      <Text style={styles.titles}>Fecha de nacimiento: </Text>
      <Text style={styles.description}>{user.fecha}</Text>
      <View style={styles.button}>
        <Button title="Obtener horoscopo" onPress={getData} />
      </View>
      <Text style={styles.horoscope}>{horoscope}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  titles: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    paddingLeft: 10,
    fontSize: 14,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    marginVertical: 20,
  },
  horoscope: {
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: "justify",
  },
});
