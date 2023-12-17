import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  ScrollView,
} from "react-native";
import multasAPI from "../../../api/multasAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [multas, setMultas] = useState([]);
  const [detail, setDetail] = useState({});

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE = 18.545484;
  const LONGITUDE = -69.900491;
  const LATITUDE_DELTA = 0.09;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const value = await AsyncStorage.getItem("userData");
      if (value) {
        const parsedUser = JSON.parse(value);
        const data = await multasAPI.getMultas(parsedUser._id);
        setMultas(data);
      }
    }
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.date}>
        {detail.fecha}:{detail.hora}
      </Text>
      <View style={styles.infoContainer}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.titles}>Cédula:</Text>
            <Text style={styles.description}>{detail.cedula}</Text>

            <Text style={styles.titles}>Nombre</Text>
            <Text style={styles.description}>{detail.nombreConductor}</Text>
          </View>
          <View>
            <Text style={styles.titles}>Placa:</Text>
            <Text style={styles.description}>{detail.placa}</Text>

            <Text style={styles.titles}>Teléfono:</Text>
            <Text style={styles.description}>{detail.telefono}</Text>
          </View>
        </View>
        <Text style={styles.titles}>Comentario:</Text>
        <Text style={styles.description}>{detail.comentario}</Text>
      </View>

      <View style={styles.imageContainer}>
        {detail.foto && (
          <Image style={styles.image} source={{ uri: detail.foto }} />
        )}
      </View>

      <MapView
        initialRegion={state.region}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        showsUserLocation={true}
        showsPointsOfInterest={false}
        showsBuildings={false}
        followsUserLocation={true}
        userInterfaceStyle="dark"
        style={styles.map}
      >
        {multas.map((item, index) => (
          <Marker
            onPress={() => setDetail(item)}
            key={index}
            coordinate={{ latitude: item.latitud, longitude: item.longitud }}
            title={`${item.nombreConductor} ${item.motivo}`}
            description={item.direccion}
          />
        ))}
      </MapView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  map: {
    width: "100%",
    height: 300,
    borderWidth: 2,
    borderColor: "black",
  },
  date: {
    textAlign: "center",
    fontWeight: "bold",
    color: "green",
    fontSize: 18,
    marginTop: 10,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    paddingLeft: 10,
  },
  infoContainer: {
    padding: 5,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "dashed",
  },
  image: {
    width: "80%",
    resizeMode: "contain",
  },
});
