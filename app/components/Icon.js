import { View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "white",
}) => {
  return (
    <View
      style={{
        borderRadius: size / 2,
        backgroundColor,
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;
