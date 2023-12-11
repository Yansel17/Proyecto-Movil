import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import placasAPI from "../../../api/placasAPI";
export default function App() {
  const [licencia, setLicencia] = useState("");
  const [datosConductor, setDatosConductor] = useState(null);

  const getLicencia = async () => {
    try {
      const data = await placasAPI.getLicencia(licencia);
      setDatosConductor(data);
    } catch (error) {
      console.error("Error al consultar la licencia:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número de Licencia"
        value={licencia}
        onChangeText={(text) => setLicencia(text)}
      />

      <TouchableOpacity style={styles.button} onPress={getLicencia}>
        <Text style={styles.buttonText}>Consultar Licencia</Text>
      </TouchableOpacity>

      {datosConductor && (
        <View style={styles.resultadosContainer}>
          <Image
            source={{ uri: datosConductor.foto }}
            style={styles.fotoConductor}
          />
          <Text>Nombre: {datosConductor.Nombres}</Text>
          <Text>
            Apellidos: {datosConductor.Apellido1} {datosConductor.Apellido2}
          </Text>
          <Text>Fecha de Nacimiento: {datosConductor.FechaNacimiento}</Text>
          <Text>Dirección: {datosConductor.LugarNacimiento}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultadosContainer: {
    marginTop: 20,
  },
  fotoConductor: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
