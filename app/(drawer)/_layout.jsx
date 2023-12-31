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
          title: "Licencia",
          headerShown: false,
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
            marginLeft: 50,
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
            marginLeft: 50,
          },
        }}
      />
      <Drawer.Screen
        name="multas"
        options={{
          drawerLabel: "Ver Multas",
          title: "Ver Multas",
        }}
      />
      <Drawer.Screen
        name="map"
        options={{
          drawerLabel: "Mapa",
          title: "Mapa",
        }}
      />
      <Drawer.Screen
        name="horoscope"
        options={{
          drawerLabel: "Horoscopo",
          title: "Horoscopo",
        }}
      />
      <Drawer.Screen
        name="clima"
        options={{
          drawerLabel: "Clima",
          title: "Clima",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="news"
        options={{
          drawerLabel: "Noticias",
          title: "Noticias",
          headerShown: false,
        }}
      />
    </Drawer>
  );
}
