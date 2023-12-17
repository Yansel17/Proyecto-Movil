import { Drawer } from "expo-router/drawer";
import { View } from "@bacons/react-views";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Inicio",
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name="tarifario"
        options={{
          drawerLabel: "Tarifario",
          title: "Multas DIGESETT",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 50,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
            marginLeft: 50,
          },
        }}
      />
      <Drawer.Screen
        name="licencia"
        options={{
          drawerLabel: "Licencia",
          title: "CONSULTAR LICENCIA",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 50,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
          },
        }}
      />
      <Drawer.Screen
        name="plaques"
        options={{
          drawerLabel: "Placas",
          title: "CONSULTAR PLACAS",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 50,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
          },
        }}
      />

      {/* //Screen que crea la multa */}
      <Drawer.Screen
        name="regMulta"
        options={{
          drawerLabel: "Crear multa",
          title: "CREAR MULTA",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 60,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
            marginLeft: 40,
          },
        }}
      />
      <Drawer.Screen
        name="multas"
        options={{
          drawerLabel: "Ver multas",
          title: "CONSULTAR MULTAS",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 60,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
          },
        }}
      />
      <Drawer.Screen
        name="map"
        options={{
          drawerLabel: "Mapa",
          title: "MAPA DE MULTAS",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 60,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
          },
        }}
      />
      <Drawer.Screen
        name="horoscope"
        options={{
          drawerLabel: "Horóscopo",
          title: "CONSULTAR HORÓSCOPO",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 60,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
          },
        }}
      />
      <Drawer.Screen
        name="clima"
        options={{
          drawerLabel: "Clima",
          title: "CONSULTAR CLIMA",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 60,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
          },
        }}
      />
      <Drawer.Screen
        name="news"
        options={{
          drawerLabel: "Noticias",
          title: "NOTICIAS RECIENTES",
          headerStyle: {
            backgroundColor: "#176585",
            borderBottomColor: "#f7bc05",
            borderBottomWidth: 3,
            borderBottomRightRadius: 60,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#f7bc05",
            alignSelf: "center",
          },
        }}
      />
    </Drawer>
  );
}
