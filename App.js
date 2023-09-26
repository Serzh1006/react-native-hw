import { StyleSheet, View, ImageBackground } from "react-native";
import { useState } from "react";
import RegisterScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import { useFonts } from "expo-font";
import img from "./src/img/back.jpg";

export default function App() {
  const [isUser, setUser] = useState(false);

  const [fontsLoaded] = useFonts({
    "roboto-regular": require("./src/assets/fonts/roboto-regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const toggleUser = (value) => {
    setUser(value);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBack} source={img} />
      {!isUser ? (
        <RegisterScreen toggleUser={toggleUser} />
      ) : (
        <LoginScreen toggleUser={toggleUser} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageBack: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
