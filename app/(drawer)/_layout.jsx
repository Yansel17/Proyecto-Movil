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
        name="tarifario"
        options={{
          drawerLabel: "Tarifario",
          title: "Tarifario",
        }}
      />
    </Drawer>
  );
}

