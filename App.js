import Bugsnag from "@bugsnag/expo";
Bugsnag.start();

import { View } from "react-native";
import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import logger from "./app/utility/logger";

// logger.start();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  logger.log(new Error("Test error"));
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  async function prepare() {
    try {
      // make any API calls you need to do here
      restoreUser();
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setIsReady(true);
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `IsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer ref={navigationRef} theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </GestureHandlerRootView>
      </AuthContext.Provider>
    </View>
  );
}

registerRootComponent(App);
