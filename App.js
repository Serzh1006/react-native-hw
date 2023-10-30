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
      <ImageBackground
        resizeMethod="resize"
        style={styles.imageBack}
        source={img}
      >
        {!isUser ? (
          <RegisterScreen toggleUser={toggleUser} />
        ) : (
          <LoginScreen toggleUser={toggleUser} />
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageBack: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
