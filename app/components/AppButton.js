import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 16,
    marginVertical: 8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
