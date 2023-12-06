import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Drawer >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="map"
        options={{
          drawerLabel: "Map",
          title: "Map",
        }}
      />
   
    </Drawer>
  );
}
