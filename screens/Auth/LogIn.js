import React, { useState } from "react";
import styled from "styled-components";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";
import useInput from "../../hooks/useInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Keyboard, Alert, AsyncStorage } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN_CONFIRM } from "./AuthQueries";
import { useLogIn, useProfileName } from "../../AuthContext";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;
export default ({ navigation }) => {
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const logIn = useLogIn();
  const [profileName, setProfileName] = useProfileName();
  const [loading, setLoading] = useState(false);
  const [confirmLoginMutation] = useMutation(LOG_IN_CONFIRM, {
    variables: {
      email: emailInput.value,
      password: passwordInput.value
    }
  });
  const handleLogin = async () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }
    try {
      setLoading(true);
      const {
        data: {
          confirmLogin: [token, name]
        }
      } = await confirmLoginMutation();
      if (token !== "" || token !== false) {
        // 이제 나중에 이 토큰을 가져와서 인증함
        logIn(token);
        setProfileName(name);
        console.log(name);
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Can`t Login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <View>
      <AuthInput
        {...emailInput}
        placeholder="Email"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <AuthInput
        {...passwordInput}
        placeholder="Password"
        secureTextEntry={true}
        autoCorrect={false}
      />
      <AuthButton loading={loading} text="Log In" onPress={handleLogin} />
    </View>
  );
};
