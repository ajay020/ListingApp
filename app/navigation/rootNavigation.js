import React from "react";

export const navigationRef = React.createRef();

const navigation = (name, params) =>
  navigationRef.current?.navigate(name, params);

export default {
  navigation,
};
