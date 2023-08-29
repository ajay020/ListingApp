import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import { colors } from "../config/colors";

const ListingDetailScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        preview={listing.images[0].thumbnailUrl}
        tint="light"
        uri={listing?.images[0]?.url}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <View style={styles.listItemContainer}>
        <ListItem
          title="Mosh Hamedani"
          subtitle="5 listings"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    padding: 10,
    marginVertical: 12,
  },
  image: {
    width: "100%",
    height: 200,
  },
  listItemContainer: {
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  price: {
    margin: 4,
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 8,
    color: colors.secondary,
  },
});

export default ListingDetailScreen;
