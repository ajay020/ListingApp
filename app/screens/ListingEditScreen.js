import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";

import Screen from "../components/Screen";
import CategoryListItem from "../components/CategoryListItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { label: "Furniture", backgroundColor: "red", icon: "apps", value: 1 },
  { label: "Clothing", backgroundColor: "blue", icon: "phone", value: 2 },
  { label: "Camera", backgroundColor: "yellow", icon: "email", value: 3 },
  { label: "Camera", backgroundColor: "brown", icon: "lock", value: 4 },
  { label: "Camera", backgroundColor: "teal", icon: "email", value: 5 },
  {
    label: "phone & laptop",
    backgroundColor: "green",
    icon: "account",
    value: 6,
  },
];

function ListingEditScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    setUploadVisible(false);

    if (!result.ok) {
      return alert("Couldn't save listing");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name={"images"} />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numColumns={3}
          PickerItemComponent={CategoryListItem}
          placeholder="Category"
          width={120}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={2}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
