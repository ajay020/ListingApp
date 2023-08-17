import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export default ListItemSeprator = () => {
  return <View style={styles.seprator} />;
};

const styles = StyleSheet.create({
  seprator: {
    width: "100%",
    height: 2,
    backgroundColor: colors.light,
  },
});
