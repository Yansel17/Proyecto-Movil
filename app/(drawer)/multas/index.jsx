import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { DataTable } from "react-native-paper";
import multasAPI from "../../../api/multasAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App() {
  const [page, setPage] = useState(0);
  const [selectedMulta, setSelectedMulta] = useState({});
  const [multas, setMultas] = useState([]);

  const itemsPerPage = 5;
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;
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
    <View style={{ flex: 1 }}>
      <View style={styles.textContainer}>
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Detalles de la Multa
          </Text>
          <Text>
            Cédula: {selectedMulta.cedula ? selectedMulta.cedula : ""}
          </Text>
          <Text>
            Nombre del Conductor:
            {selectedMulta.nombreConductor ? selectedMulta.nombreConductor : ""}
          </Text>
          <Text>Placa: {selectedMulta.placa ? selectedMulta.placa : ""}</Text>
          <Text>
            Teléfono: {selectedMulta.telefono ? selectedMulta.telefono : ""}
          </Text>
          <Text>
            Fecha: {selectedMulta.fecha ? selectedMulta.fecha : ""} :{" "}
            {selectedMulta.hora ? selectedMulta.hora : ""}
          </Text>
          <Text>
            Motivo: {selectedMulta.motivo ? selectedMulta.motivo : ""}
          </Text>
          <Text>
            Comentario:
            {selectedMulta.comentario ? selectedMulta.comentario : ""}
          </Text>
          <Text>
            Dirección: {selectedMulta.direccion ? selectedMulta.direccion : ""}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          {selectedMulta.foto && (
            <Image style={styles.image} source={{ uri: selectedMulta.foto }} />
          )}
        </View>
      </View>
      <DataTable style={{ flex: 1 }}>
        <DataTable.Header style={{ backgroundColor: "#146698" }}>
          <DataTable.Title>Cedula</DataTable.Title>
          <DataTable.Title>Nombre</DataTable.Title>
          <DataTable.Title>Motivo</DataTable.Title>
          <DataTable.Title>Acciones</DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {multas &&
            multas.slice(from, to).map((item) => (
              <DataTable.Row key={item._id}>
                <DataTable.Cell>{item.cedula}</DataTable.Cell>
                <DataTable.Cell>{item.nombreConductor}</DataTable.Cell>
                <DataTable.Cell>{item.motivo}</DataTable.Cell>
                <DataTable.Cell>
                  <TouchableOpacity onPress={() => setSelectedMulta(item)}>
                    <Text>Detalles</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
        </ScrollView>
      </DataTable>

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(multas.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${multas.length}`}
        numberOfItemsPerPage={itemsPerPage}
        showFastPaginationControls
        selectPageDropdownLabel={"Rows per page"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  header: {
    backgroundColor: "#146698",
    marginHorizontal: 5,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsContainer: {
    margin: 20,
  },
  detailsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detailsInfo: {
    fontSize: 16,
  },
  imageContainer: {
    marginTop: 5,
    height: 130,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "dashed",
  },
  image: {
    margin: 10,
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  tableContainer: {
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
  },
  actionsCell: {
    alignItems: "center",
    justifyContent: "center",
  },
  actionsButton: {
    backgroundColor: "#146698",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  actionsButtonText: {
    color: "white",
  },
  paginationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
