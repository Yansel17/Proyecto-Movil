import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import multasAPI from "../../../api/multasAPI";

export default function App() {
  const [multas, setMultas] = useState([]);
  const [detail, setDetail] = useState({});
  async function getData() {
    const data = await multasAPI.getMultas();
    setMultas(data);
  }
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
  const marker = {
    title: "prueba",
    description: "prueba",
    cordinates: {
      latitude: 18.545484,
      longitude: -69.900491,
    },
  };
  getData();
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {detail.fecha}:{detail.hora}
      </Text>
      <View style={styles.textContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.titles}>Nombre</Text>
          <Text style={styles.description}>{detail.nombreConductor}</Text>
          <Text style={styles.titles}>Cedula:</Text>
          <Text style={styles.description}>{detail.cedula}</Text>
          <Text style={styles.titles}>Comentario:</Text>
          <Text style={styles.description}>{detail.comentario}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://media.istockphoto.com/id/1157655660/es/foto/suv-rojo-gen%C3%A9rico-sobre-un-fondo-blanco-vista-lateral.jpg?s=2048x2048&w=is&k=20&c=kBBB4-vZxjxHDvXAWAoe5DYMT8DRxAWoD_TytzhFL5Y=",
            }}
          />
        </View>
      </View>
      <MapView
        initialRegion={state.region}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        showsUserLocation={true}
        followsUserLocation={true}
        userInterfaceStyle="dark"
        style={styles.map}
      >
        {multas.map((item, index) => {
          return (
            <Marker
              onPress={() => setDetail(item)}
              key={index}
              coordinate={{ latitude: item.latitud, longitude: item.longitud }}
              title={item.nombreConductor + " " + item.motivo}
              description={item.direccion}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  map: {
    textAlign: "center",
    width: "100%",
    height: "70%",
    borderWidth: 5,
    borderColor: "red",
    borderStyle: "solid",
  },
  date: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 18,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    paddingLeft: 10,
    fontSize: 14,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 20,
    height: 130,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "dashed",
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});
