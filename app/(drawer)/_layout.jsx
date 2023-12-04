import { Drawer } from "expo-router/drawer";
export default function Layout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
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
