//import liraries
import React, { Component } from "react";
import { Formik, useField } from "formik";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { logInValidationSchena } from "../../../src/components/ValidationSchemas/LogIn";

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
        {...props}
      />
      {meta.error && <Text style={styles.error}>{meta.error}</Text>}
    </>
  );
};

 const [hideText, setHideText] = React.useState(false);

 const handleHideText = () => {
  setHideText(!hideText);
 }

// create a component
const LogInPage = () => {
  return (
    <Formik
      validationSchema={logInValidationSchena}
      initialValues={initialValues}
      onSubmit={(value) => console.log(value)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../../../assets/logo.png")}
            />
            <Text style={styles.title}>Inicio de sección</Text>
            <View style={styles.inputContainer}>
              <FormikInputValue name={"Email"} label="Correo" />
              <FormikInputValue
                name={"Password"}
                secureTextEntry={hideText}
                label="Contraseña"
                right={<TextInput.Icon icon="eye"/>}
              />
              <Button style={styles.button} onPress={handleSubmit}>
                Ingresar
              </Button>
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
    height: "100%",
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
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    fontSize: 30,
  },
});

//make this component available to the app
export default LogInPage;
