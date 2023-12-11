import { View } from "@bacons/react-views";
import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Tarifario</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
