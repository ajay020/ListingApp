import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error={"Invalid password and/or email"}
          visible={loginFailed}
        />
        <AppFormField
          icon={"email"}
          name={"email"}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
        />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          icon={"lock"}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 22,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default LoginScreen;
