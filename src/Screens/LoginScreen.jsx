import {
  Alert,
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";

const LoginScreen = ({ toggleUser }) => {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [onFocusEmail, setEmail] = useState("null");
  const [onFocusPassword, setPassword] = useState("null");
  const [isShowPassword, setShowPassword] = useState(true);

  const loginForm = () => {
    toggleUser(false);
  };

  const onSubmit = () => {
    Alert.alert(`${email}-${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        width={"100%"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -250 : -80}
      >
        <View style={styles.form}>
          <Text style={styles.login}>Увійти</Text>
          <TextInput
            style={[styles.input, onFocusEmail === "email" && styles.isFocus]}
            onFocus={() => setEmail("email")}
            onBlur={() => setEmail(null)}
            placeholder="Адреса електронної пошти"
            onChangeText={changeEmail}
            value={email}
          />
          <View style={styles.inputWrap}>
            <TextInput
              style={[
                styles.input,
                onFocusPassword === "password" && styles.isFocus,
                styles.inputPassword,
              ]}
              onFocus={() => setPassword("password")}
              onBlur={() => setPassword(null)}
              placeholder="Пароль"
              onChangeText={changePassword}
              value={password}
              secureTextEntry={isShowPassword}
              autoCapitalize={"none"}
            ></TextInput>
            <Text
              style={styles.showPasswordBtn}
              color="#1B4371"
              onPress={() => setShowPassword(!isShowPassword)}
            >
              {isShowPassword ? "Показати" : "Сховати"}
            </Text>
          </View>
          <TouchableOpacity onPress={onSubmit} style={styles.TouchableOpacity}>
            <Text style={styles.registerBtn}>Увійти</Text>
          </TouchableOpacity>
          <Button
            color="#1B4371"
            title="Немає акаунту? Зареєструватися"
            onPress={loginForm}
            style={styles.changeScreen}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "roboto-regular",
    backgroundColor: "#E6E6E6",
    minWidth: "100%",
    height: 50,
    paddingLeft: 16,
    borderRadius: 5,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputWrap: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 43,
  },
  inputPassword: {
    marginBottom: 0,
  },
  login: {
    fontFamily: "roboto-regular",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
    marginTop: 32,
  },
  showPasswordBtn: {
    position: "absolute",
    fontFamily: "roboto-regular",
    fontWeight: "400",
    top: 15,
    right: 16,
    fontSize: 16,
    color: "#1B4371",
  },
  TouchableOpacity: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    color: "#fff",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 343,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
  },
  registerBtn: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
  form: {
    width: "100%",
    minHeight: "auto",
    paddingBottom: Platform.OS === "ios" ? 144 : 70,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  isFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  changeScreen: {
    fontFamily: "roboto-regular",
    fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",
  },
});

export default LoginScreen;
