import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={35} style={styles.icon} />
      )}
      <TextInput style={defaultStyle.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    flexDirection: "row",
    padding: 8,
    borderRadius: 50,
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
    color: defaultStyle.colors.dark,
  },
});

export default AppTextInput;
