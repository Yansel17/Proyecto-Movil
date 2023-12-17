import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const InputComponent = ({ onSearch }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleSearch = () => {
    onSearch({ latitude, longitude });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Latitud"
        placeholder="18.5001200"
        value={latitude}
        onChangeText={(text) => setLatitude(text)}
      />
      <TextInput
        label="Longitud"
        placeholder="-69.9885700"
        value={longitude}
        onChangeText={(text) => setLongitude(text)}
      />
      <Button mode="contained" onPress={handleSearch} style={styles.button}>
        Buscar Clima
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: "green",
  },
});

export default InputComponent;
