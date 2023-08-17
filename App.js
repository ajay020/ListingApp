import Screen from "./app/components/Screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import { registerRootComponent } from "expo";

import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <Screen>
      <OfflineNotice />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Screen>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  addTab: {
    backgroundColor: "pink",
    height: 60,
    width: 60,
    padding: 10,
    borderRadius: 50,
  },
});
