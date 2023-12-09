import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import horoscopeAPI from "../../../api/horoscopeAPI";
export default function App() {
  const [horoscope, setHoroscope] = useState("");
  const [user, setUser] = useState({});

  async function getUserData() {
    try {
      const value = await AsyncStorage.getItem("userData");
      if (value !== null) {
        setUser(value);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getData() {
    const data = await horoscopeAPI.getHoros({
      sign: "pisces",
      day: "2003-03-11",
    });
    setHoroscope(data.horoscope_data);
  }
  getUserData();
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Tus datos: </Text>
      <Text style={styles.titles}>Signo: </Text>
      <Text style={styles.description}>Piscis </Text>
      <Text style={styles.titles}>Fecha de nacimiento: </Text>
      <Text style={styles.description}>2003-03-11 </Text>
      <View style={styles.button}>
        <Button title="Obtener horoscopo" onPress={getData} />
      </View>
      <Text style={styles.horoscope}>
        Things will be moving more in your favor as the day wears on. An
        easygoing, sensitive energy dominates the atmosphere. It will be easier
        for you to be yourself. Your loving, nurturing qualities are
        accentuated. You may have the urge to buy groceries and cook a wonderful
        meal for yourself and others. You're happy to open up your home and
        offer your hospitality.
      </Text>
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
