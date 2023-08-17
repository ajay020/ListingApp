import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollViewRef = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        // scroll the list to end when add an image
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={(uri) => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
