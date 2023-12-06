//import liraries
import React, { Component } from "react";
import { Formik, useField } from "formik";
import { View, StyleSheet, Image } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

//api
import { handleLogin } from "../../src/api/LogIn"

const initialValues = {
  User: "agente1",
  Password: "agente123",
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

// create a component
const LogInPage = () => {
  const [hideText, setHideText] = React.useState(true);
  const handleHideText = () => {
    setHideText(!hideText);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => console.log(value)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.title}>Inicio de sección</Text>
            <View style={styles.inputContainer}>
              <FormikInputValue name={"User"} label="Usuario" />
              <FormikInputValue
                name={"Password"}
                secureTextEntry={hideText}
                label="Contraseña"
                right={
                  <TextInput.Icon
                    icon={hideText ? "eye" : "eye-off"}
                    onPress={handleHideText}
                  />
                }
              />
            </View>
            <Button
              style={[styles.boton, { backgroundColor: "green" }]}
              labelStyle={{ fontSize: 20, color: "white" }}
              onPress={handleSubmit}
            >
              Ingresar
            </Button>
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
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    opacity: 0.8,
    margin: 10,
    fontFamily: "sans-serif-condensed",
    textDecorationLine: "underline",
  },
  boton: {
    marginTop: 20,
    textDecorationColor: "red",
    width: "80%",
  },
});

//make this component available to the app
export default LogInPage;
