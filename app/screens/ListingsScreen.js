import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import listingApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      {error && (
        <>
          <AppText>Couldn't get listings</AppText>
          <AppButton title={"Retry"} onPress={loadListings} />
        </>
      )}
      <ActivityIndicator animating={loading} size={"large"} />
      <FlatList
        style={styles.container}
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

export default ListingsScreen;
