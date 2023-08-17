import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logo}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require("../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell What You don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    padding: 8,
  },
  logo: {
    flex: 1,
    position: "absolute",
    top: 80,
    flexDirection: "column",
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tagline: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
  },
});
