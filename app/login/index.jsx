//import liraries
import React, { useState } from "react";
import { Formik, useField } from "formik";
import { View, StyleSheet, Image } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { Redirect } from "expo-router";

//api
import { login } from "../../src/api/LogIn";

const initialValues = {
  username: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <TextInput
        style={styles.input}
        error={meta.error && meta.touched}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        mode="outlined"
        {...props}
      />
      {meta.error && meta.touched && (
        <Text style={styles.error}>{meta.error}</Text>
      )}
    </>
  );
};

// create a component
const LogInPage = () => {
  const [hideText, setHideText] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [redirectToHome, setRedirectToHome] = React.useState(false);

  const handleHideText = () => {
    setHideText(!hideText);
  };

  const handleLogin = async (value) => {
    try {
      const result = await login(value);
      if (result.status === 200) {
        console.log(result.data, "OK");
        //Nos lleva a la pagina de home
        setRedirectToHome(true);
        setError(null);
      } else if (result.status === 401) {
        console.log(result.error,);
        setError(result.error);
      }
    } catch (error) {
      console.log(error, "Algo salio mal");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (value) => {
        const result = await login(value);
        console.log("summit");
        handleLogin(value);
      }}
    >
      {({ handleSubmit }) => {
        if (redirectToHome) {
          <Redirect to="(drawer)/home" />;
        }

        return (
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.title}>Inicio de sección</Text>
            <View style={styles.inputContainer}>
              <FormikInputValue name={"username"} label="Usuario" />
              <FormikInputValue
                name={"password"}
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
            {error && <Text style={styles.error}> {error} </Text>}
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
