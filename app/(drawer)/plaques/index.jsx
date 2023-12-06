import react from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Plaques() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Plaques</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: 20,
        margin: 0,
        marginBottom: 20,
        marginTop: 70
    },
})