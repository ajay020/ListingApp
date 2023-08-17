import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import { colors } from "../config/colors";
import Icon from "../components/Icon";
import { ListItem, ListItemSeprator } from "../components/lists";

const menuItems = [
  {
    title: "Email",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={"Mosh Hamedani"}
          subtitle={"mosh@gmail.com"}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeprator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title={"Log out"}
        IconComponent={<Icon name="logout" backgroundColor="yellow" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
