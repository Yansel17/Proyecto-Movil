import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import placasAPI from "../../../api/placasAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Plaques() {
  
  const [plate, setPlate] = useState("");
  const [plateData, setPlateData] = useState(null);

  
    async function fetchPlateData() {
        const data = await placasAPI.getPlacas(plate);
        setPlateData(data);
    }

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Placas</Text>
      <TextInput
      style={styles.input}
      value={plate}
      onChangeText={(Text) => setPlate(Text)}
      placeholder="Introducir la placa"
      />
      <Button title="Buscar" onPress={fetchPlateData} />
      {plateData && (
        <View>
          <Text>Placa: {plateData.placa}</Text>
          <Text>Marca: {plateData.marca}</Text>
          <Text>Modelo: {plateData.modelo}</Text>
          <Text>Color: {plateData.color}</Text>
          <Text>Año: {plateData.anio}</Text>
          <Text>Estado: {plateData.estado}</Text>
        </View>
      )}
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
input: {
  height: 40,
  borderColor: "gray",
  borderWidth: 1,
  width: "80%",
  marginBottom: 20,
},
});

