import { Drawer } from "expo-router/drawer";
export default function Layout() {
  return (
    <Drawer initialRouteName="login">
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
      <Drawer.Screen
        name="login"
        options={{
          drawerLabel: "Log In",
          title: "log in",
          headerShown: false,
        }}
      />
    </Drawer>
  );
}
