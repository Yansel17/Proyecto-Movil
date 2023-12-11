// MultaForm.js
import { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";
import { Picker } from "@react-native-picker/picker";
import multasAPI from "../../../api/multasAPI";
import { useRouter } from "expo-router";
export default function App() {
  const [tarifario, setTarifario] = useState([]);
  const [user, setUser] = useState("");
  const [cedula, setCedula] = useState("");
  const [placa, setPlaca] = useState("");
  const [motivo, setMotivo] = useState("");
  const [foto, setFoto] = useState(null);
  const [comentario, setComentario] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [fecha, setFecha] = useState("");
  const [nombreConductor, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [hora, setHora] = useState("");
  const router = useRouter();
  async function createMulta() {
    await multasAPI.createMultas({
      userId: user._id,
      cedula,
      placa,
      motivo,
      foto,
      comentario,
      nota: currentSound.getURI(),
      latitud: parseFloat(latitud),
      longitud: parseFloat(longitud),
      fecha,
      nombreConductor,
      telefono,
      direccion,
      hora,
    });
    setTarifario([]);
    setUser("");
    setCedula("");
    setPlaca("");
    setMotivo("");
    setFoto(null);
    setComentario("");
    setLatitud("");
    setLongitud("");
    setFecha("");
    setNombre("");
    setTelefono("");
    setDireccion("");
    setHora("");
    router.push("home");
  }
  // IMAGEN
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Se necesita permiso para acceder a la cámara.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      const photo = result.uri;
      setFoto(photo);
    }
  };
  // AUDIO
  const [recording, setRecording] = useState();
  const [currentSound, setCurrenSound] = useState(false);
  const [sound, setSound] = useState();
  async function startRecording() {
    setCurrenSound(false);
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }
  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    setCurrenSound(recording);
    console.log("Recording stopped and stored at", uri);
  }
  async function playSound() {
    const uri = currentSound.getURI();
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({
      uri: uri,
    });
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }
  useEffect(() => {
    async function fetchData() {
      const value = await AsyncStorage.getItem("userData");
      const tari = await multasAPI.getTarifario();
      setTarifario(tari);
      if (value) {
        const parsedUser = JSON.parse(value);
        setUser(parsedUser);
      }
    }
    fetchData();
  }, []);
  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Cédula"
          value={cedula}
          onChangeText={(text) => setCedula(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Placa"
          value={placa}
          onChangeText={(text) => setPlaca(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Comentario"
          value={comentario}
          onChangeText={(text) => setComentario(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Latitud"
          value={latitud}
          onChangeText={(text) => setLatitud(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Logintud"
          value={longitud}
          onChangeText={(text) => setLongitud(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Fecha"
          value={fecha}
          onChangeText={(text) => setFecha(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Nombre"
          value={nombreConductor}
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Telefono"
          value={telefono}
          onChangeText={(text) => setTelefono(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Direccion"
          value={direccion}
          onChangeText={(text) => setDireccion(text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder="Hora"
          value={hora}
          onChangeText={(text) => setHora(text)}
        />
        <Picker
          selectedValue={motivo}
          onValueChange={(itemValue, itemIndex) => setMotivo(itemValue)}
        >
          {tarifario.map((item, index) => (
            <Picker.Item key={index} label={item.nombre} value={item.nombre} />
          ))}
        </Picker>
      </View>
      <View style={styles.container}>
        <View style={styles.TouchableOpacityContainer}>
          <TouchableOpacity
            onPress={recording ? stopRecording : startRecording}
          >
            <Text>{recording ? "Parar" : "Grabar"} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.TouchableOpacityContainer2}>
          <TouchableOpacity disabled={!currentSound} onPress={playSound}>
            <Text>Escuchar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          <Text>Tomar imagen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={createMulta}>
          <Text>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  TouchableOpacityContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  TouchableOpacityContainer2: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    height: 40,
    fontSize: 16,
  },
});
