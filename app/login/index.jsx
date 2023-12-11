//import liraries
import React from "react";
import { Formik, useField } from "formik";
import { View, StyleSheet, Image } from "react-native";
import { Text, TextInput, Button, ActivityIndicator } from "react-native-paper";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

//api
import { login } from "../../api/LogInApi";

//Valores iniciales para los inputs
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
        contentStyle={{ color: "black" }}
        theme={{ colors: { primary: "green" } }}
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
  //Estados
  const [hideText, setHideText] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [redirectToHome, setRedirectToHome] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  //Ocultar la contraseña
  const handleHideText = () => {
    setHideText(!hideText);
  };

  //Validar el login
  const handleLogin = async (value) => {
    try {
      const result = await login(value);
      if (result.status === 200) {
        setError(null);
        //Guardamos la informacion en el local storage
        await AsyncStorage.setItem("userData", JSON.stringify(result.data));
        console.log("Guardado");

        //Nos lleva a la pagina de home
        setRedirectToHome(true);
      } else if (result.status === 401) {
        console.log(result.error);
        setError(result.error);
      }
    } catch (error) {
      console.log(error, "Algo salio mal");
      setError("Algo salió mal. Inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  //Efecto para comprobar si hay informacion del usuario en el local storage
  // useEffect(() => {
  //   // Comprobar si hay información del usuario en AsyncStorage
  //   const checkUserData = async () => {
  //     const userDataString = await AsyncStorage.getItem("userData");
  //     const userData = JSON.parse(userDataString);

  //     // Redirigir a la página de inicio si hay información del usuario
  //     if (userData) {
  //       setRedirectToHome(true);
  //     }
  //   };

  //   checkUserData();
  // }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (value) => {
        setIsLoading(true);
        const result = await login(value);
        handleLogin(value);
      }}
    >
      {({ handleSubmit }) => {
        // if (redirectToHome) {
          return <Redirect href={"../(drawer)/home"} />;
        // }

        // return (
        //   <View style={styles.container}>
        //     <Image
        //       style={styles.logo}
        //       source={require("../../assets/logo.png")}
        //     />
        //     <Text style={styles.title}>Iniciar de sesión</Text>
        //     <View style={styles.inputContainer}>
        //       <FormikInputValue
        //         name={"username"}
        //         label="Usuario"
        //         // poner el label mas grande
        //         left={<TextInput.Icon icon="account" />}
        //       />
        //       <FormikInputValue
        //         name={"password"}
        //         secureTextEntry={hideText}
        //         label="Contraseña"
        //         left={<TextInput.Icon icon="lock" />}
        //         right={
        //           <TextInput.Icon
        //             icon={hideText ? "eye" : "eye-off"}
        //             onPress={handleHideText}
        //           />
        //         }
        //       />
        //     </View>
        //     {error ? <Text style={styles.error}> {error} </Text> : null}
        //     {isLoading ? (
        //       <ActivityIndicator
        //         style={styles.activity}
        //         size="large"
        //         color="green"
        //       />
        //     ) : (
        //       <Button
        //         style={[styles.boton, { backgroundColor: "green" }]}
        //         labelStyle={{ fontSize: 20, color: "white" }}
        //         onPress={handleSubmit}
        //         disabled={isLoading}
        //       >
        //         Ingresar
        //       </Button>
        //     )}
        //   </View>
        // );
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
    width: "80%",
  },
  activity: {
    marginTop: 20,
  },
});

//make this component available to the app
export default LogInPage;
