import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

import { colors } from "../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      alert("You need to enable permissin to access camera.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete the image?", [
        { text: "Yes", onPress: () => onChangeImage(imageUri) },
        { text: "No" },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={35} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
