import React from "react";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={{ padding: 10 }}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
    </Screen>
  );
};

export default RegisterScreen;
