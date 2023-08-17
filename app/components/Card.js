import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import { colors } from "../config/colors";

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          style={styles.image}
        />
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 18,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 8,
  },
  subTitle: {
    color: colors.secondary,
  },
});

export default Card;
