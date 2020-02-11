import React from "react";
import styled from "styled-components";
import AuthInput from "../../components/AuthInputs";
import AuthButton from "../../components/AuthButton";
import useInput from "../../hooks/useInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Keyboard } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;
export default () => {
  const emailInput = useInput("");
  const handleLogin = () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
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
      <AuthButton text="Log In" onPress={() => null} />
    </View>
  );
};
