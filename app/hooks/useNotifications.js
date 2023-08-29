import React, { useEffect } from "react";

import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

const PROJECT_ID = "b876ff49-c13c-4f90-a75c-4e492e13ceae";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    let subscription;
    if (notificationListener) {
      subscription =
        Notifications.addNotificationReceivedListener(notificationListener);
    }
    return () => subscription?.remove();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: PROJECT_ID,
        })
      ).data;

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }

      await expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting push token", error);
    }
  };
};
