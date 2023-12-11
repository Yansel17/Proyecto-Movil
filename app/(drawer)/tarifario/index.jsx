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
            <Text style={styles.descrip}>{multa.descripcion}</Text>
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
    padding: 10, // Añade un poco de espacio alrededor del contenido
  },

  scroll: {
    width: "95%",
    alignSelf: "center",
    height: "auto",
    backgroundColor: "#ffff",
    borderRadius: 10,
    paddingHorizontal: 5, // Espacio horizontal adicional
    paddingVertical: 10, // Espacio vertical adicional
    shadowColor: "#000", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Añade sombra
  },

  card: {
    padding: 10,
    marginBottom: 10,
    elevation: 3, // Añade sombra
    borderRadius: 10,
  },

  titleMulta: {
    fontWeight: "bold",
  },
  monto: {
    fontSize: 18,
    color: "red", // Color personalizado
  },

  descrip: {
    fontSize: 15,
    lineHeight: 20,
    wordWrap: 'break-word',
    paddingTop: 10,
  },
  activity: {
    marginTop: 20, // Espacio adicional sobre el indicador
  },
});
