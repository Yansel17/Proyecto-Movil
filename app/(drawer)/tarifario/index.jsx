import { View } from "@bacons/react-views";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import { Card, Title } from "react-native-paper";
import { useRouter } from "expo-router";
//api
import { getMultas } from "../../../api/TarifarioApi";

export default function App() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [multas, setMultas] = useState([]);

  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const data = await getMultas();
        setMultas(data);
        {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchMultas();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        {/* <View style={{ width: 50, height: 50 }}>
          <Button
            onPress={() => router.replace("/login")}
            style={styles.float}
            title="<"
          />
        </View> */}
        <Text style={styles.title}>Multas DIGESETT</Text>
        <Text style={styles.subTitle}>Procuraduría General</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {isLoading ? (
          <ActivityIndicator
            style={styles.activity}
            size="large"
            color="green"
          />
        ) : null}
        {multas.map((multa, index) => (
          <Card style={styles.card} key={index}>
            <Title style={styles.titleMulta}>{multa.nombre}</Title>
            <Text style={styles.monto} key={index}>
              Monto: {multa.monto}$
            </Text>
            <Text>{multa.descripcion}</Text>
          </Card>
          // Asume que cada multa tiene una propiedad "descripcion"
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ffff",
  },
  text: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f7bc05",
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
  },
  scroll: {
    width: "95%",
    alignSelf: "center",
    height: "auto",
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  card: {
    padding: 10,
    marginBottom: 10,
  },
  titleMulta: {
    fontWeight: "bold",
  },
  monto: {
    fontSize: 20,
  },
  float: {
    position: "absolute",
    top: 20,
    left: 20,

    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
