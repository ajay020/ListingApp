import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../config/colors";

const CustomActivityIndicator = ({ visible }) => {
  return (
    <View style={[styles.overlay, { display: visible ? "flex" : "none" }]}>
      <ActivityIndicator
        animation={visible}
        color={colors.primary}
        size={"larger"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    justifyContent: "center",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});

export default CustomActivityIndicator;
