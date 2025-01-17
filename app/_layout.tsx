import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: "Dólar Americano" }} />
        <Drawer.Screen name="euro" options={{ title: "Euro" }} />
        <Drawer.Screen name="btc" options={{ title: "BTC" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
