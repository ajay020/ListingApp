import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="card" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
