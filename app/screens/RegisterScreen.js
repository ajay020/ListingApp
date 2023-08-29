import React, { useState } from "react";
import * as Yup from "yup";

import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../hooks/useAuth";
import users from "../api/users";
import useApi from "../hooks/useApi";
import CustomActivityIndicator from "../components/CustomActivityIndicator";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const [error, setError] = useState();
  const auth = useAuth();
  const registerApi = useApi(users.register);
  const loginApi = useApi(authApi.login);

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  console.log(loginApi.loading);

  return (
    <>
      <CustomActivityIndicator
        visible={registerApi.loading || loginApi.loading}
      />
      <View style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            icon={"account"}
            name={"name"}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Name"
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
          <SubmitButton title="Register" />
        </AppForm>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 22,
  },
});

export default RegisterScreen;
