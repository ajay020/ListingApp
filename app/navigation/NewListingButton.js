import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 24,
    justifyContent: "center",
    height: 80,
    marginBottom: 40,
    width: 80,
  },
});

export default NewListingButton;
