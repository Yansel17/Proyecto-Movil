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
        name="multas"
        options={{
          drawerLabel: "Ver Multas",
          title: "Ver Multas",
        }}
      />
      <Drawer.Screen
        name="plaques"
        options={{
          drawerLabel: "Plaques",
          title: "Plaques",
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
        name="clima"
        options={{
          drawerLabel: "Clima",
          title: "Clima",
        }}
      />
    </Drawer>
  );
}
