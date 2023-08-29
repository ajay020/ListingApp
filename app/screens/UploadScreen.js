import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

import { colors } from "../config/colors";
import AppText from "../components/AppText";

export default function UploadScreen({
  onDone,
  progress = 0,
  visible = false,
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          //   <LottieView
          //     autoPlay
          //     // onAnimationFinish={onDone}
          //     loop={false}
          //     source={"../assets/animations/done.json"}
          //     style={styles.animation}
          //   />
          <AppText>Completed</AppText>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: { width: 150 },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
