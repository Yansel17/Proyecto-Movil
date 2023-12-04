import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
export default function MapPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mapa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    margin: 0,
    marginBottom: 20,
  },
});
