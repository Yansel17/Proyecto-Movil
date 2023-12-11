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
          title: "Tarifario",
          headerShown: false,
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
          drawerLabel: "Placa",
          title: "Placa",
        }}
      />
      <Drawer.Screen
        name="regMulta"
        options={{
          drawerLabel: "Crear Multas",
          title: "Crear Multas",
          headerShown: false,
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
