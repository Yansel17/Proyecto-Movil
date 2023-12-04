import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <Text style={styles.text}>DigeAgent</Text>
      {/* <Button title="Tools" onPress={() => navigation.openDrawer()} /> */}
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
    borderRadius: 100,
    resizeMode: "contain",
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 20,
    margin: 0,
    marginBottom: 20,
  },
});
