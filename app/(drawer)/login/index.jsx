//import liraries
import React, { Component } from "react";
import { Formik, useField } from "formik";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import { Button, TextInput } from "react-native-paper";

//Components

const initialValues = {
  Email: "",
  Password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <TextInput
      style={styles.input}
      error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        mode="outlined"
        label={name}
        {...props}
      />
      {meta.error && <Text style={styles.error}>{meta.error}</Text>}
    </>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.Email) {
    errors.Email = "El correo es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = "Correo invalido";
  }

  console.log(errors);
  return errors;
};

// create a component
const LogInPage = () => {
  return (
    <Formik
      validate={validate}
      initialValues={initialValues}
      onSubmit={(value) => console.log(value)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <Text>LogInPage</Text>
            <View style={styles.inputContainer}>
              <FormikInputValue name={"Email"} />
              <FormikInputValue
                name={"Password"}
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
              />
              <Button onPress={handleSubmit}>Ingresar</Button>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    width: "80%",
    display: "flex",
  },
  input: {
    marginTop: 20,
  },
  error: {
    color: "red",
    fontVariant: ["small-caps"],
  },
});

//make this component available to the app
export default LogInPage;
