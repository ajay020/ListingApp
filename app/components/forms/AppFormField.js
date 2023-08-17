import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  const {
    handleChange,
    setFieldValue,
    values,
    setFieldTouched,
    touched,
    errors,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        name={name}
        width={width}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
