import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={require("../../assets/logo.jpg")} />
      </View>
      <Text style={styles.text}>DigeAgent</Text>
      <Button title="Tools" onPress={() => navigation.openDrawer()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    marginTop: 40,
    height: 250,
    width: 250,
  },
  image: {
    borderWidth: 2,
    borderColor: "#282828",
    borderRadius: "50%",
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    margin: 0,
    marginBottom: 20,
  },
});
