import React from "react";
import { Image, View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" size={35} color={"white"} />
      </View>
      <View style={styles.deleteBtn}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={"white"}
        />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeBtn: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteBtn: {
    position: "absolute",
    top: 40,
    right: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
