import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const RegisterScreen = ({ toggleUser }) => {
  const [login, changeLogin] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [onFocusLogin, setLogin] = useState("null");
  const [onFocusEmail, setEmail] = useState("null");
  const [onFocusPassword, setPassword] = useState("null");
  const [isShowPassword, setShowPassword] = useState(true);

  const registerForm = () => {
    toggleUser(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      width={"100%"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -190 : -120}
    >
      <View style={styles.form}>
        <View style={styles.icon}>
          <AntDesign
            style={styles.addAvatar}
            name="pluscircleo"
            size={25}
            color="#FF6C00"
          />
        </View>
        <View>
          <Text style={styles.register}>Реєстрація</Text>
          <TextInput
            style={[styles.input, onFocusLogin === "login" && styles.isFocus]}
            onFocus={() => setLogin("login")}
            onBlur={() => setLogin(null)}
            placeholder="Логін"
            onChangeText={changeLogin}
            value={login}
            autoCapitalize={"none"}
          />
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
        </View>

        <View>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.registerBtn}>Зареєструватися</Text>
          </TouchableOpacity>
          <Button
            color="#1B4371"
            title="Вже є акаунт? Увійти"
            onPress={registerForm}
            style={styles.changeScreen}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    position: "relative",
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: Platform.OS === "ios" ? 78 : 35,
    paddingLeft: 16,
    paddingRight: 16,
  },
  addAvatar: {
    position: "absolute",
    bottom: 14,
    right: -13,
  },
  inputWrap: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 43,
  },
  icon: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 16,
  },
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
  inputPassword: {
    marginBottom: 0,
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
  isFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  register: {
    fontFamily: "roboto-regular",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    color: "#212121",
    marginBottom: 40,
    marginTop: 92,
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
  changeScreen: {
    fontFamily: "roboto-regular",
    fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",
  },
});

export default RegisterScreen;
