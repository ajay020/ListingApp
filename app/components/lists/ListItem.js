import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "../AppText";
import { colors } from "../../config/colors";

const ListItem = ({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.details}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={35}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: "white",
  },
  details: {
    marginLeft: 10,
    // backgroundColor: "teal",
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    color: "gray",
  },
});

export default ListItem;
