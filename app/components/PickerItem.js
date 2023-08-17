import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 16,
  },
});

export default PickerItem;
