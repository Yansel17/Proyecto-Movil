// InputComponent.js
import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const InputComponent = ({ onSearch }) => {
  const [latitude, setLatitude] = useState(18.50012);
  const [longitude, setLongitude] = useState(-69.98857);

  const handleSearch = () => {
    onSearch({ latitude, longitude });
  };

  placeholder = "-69.988570016";
  return (
    <View>
      <TextInput
        label={"Latitud"}
        placeholder="18.5001200"
        value={latitude}
        onChangeText={(text) => setLatitude(text)}
      />
      <TextInput
        label={"Longitud"}
        placeholder="-69.9885700"
        value={longitude}
        onChangeText={(text) => setLongitude(text)}
      />
      <Button onPress={handleSearch}>Buscar Clima</Button>
    </View>
  );
};

export default InputComponent;
