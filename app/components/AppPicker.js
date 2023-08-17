import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  numColumns = 1,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={35} style={styles.icon} />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={25} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    flexDirection: "row",
    padding: 8,
    borderRadius: 50,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
