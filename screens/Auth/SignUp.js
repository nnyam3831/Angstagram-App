import React, { useState } from "react";
import styled from "styled-components";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";
import useInput from "../../hooks/useInput";
import constants from "../../constants";
import {
  StyleSheet,
  ShadowPropTypesIOS,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import RNPicker from "react-native-picker-select";
import { Picker } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { CREATE_ACCOUNT } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Text = styled.Text``;

export default ({ navigation }) => {
  const emailInput = useInput("");
  const userNameInput = useInput("");
  const firstNameInput = useInput("");
  const lastNameInput = useInput("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: userNameInput.value,
      email: emailInput.value,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      bio: bio
    }
  });
  const handleSignup = async () => {
    const { value: email } = emailInput;
    const { value: fName } = firstNameInput;
    const { value: lName } = lastNameInput;
    const { value: username } = userNameInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return Alert.alert("That email is invalid");
    }
    if (fName === "") {
      return Alert.alert("I need your name");
    }
    if (username === "") {
      return Alert.alert("Invalid username");
    }
    try {
      setLoading(true);
      const {
        data: { createAccount }
      } = await createAccountMutation();
      if (createAccount) {
        Alert.alert("Account created", "Log in now!");
        navigation.navigate("LogIn", { email });
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Username taken", "Log in instead");
      navigation.navigate("LogIn", { email });
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...userNameInput}
          placeholder="Username"
          autoCorrect={false}
        />
        <AuthInput
          {...firstNameInput}
          placeholder="First Name"
          autoCapitalize="words"
        />
        <AuthInput
          {...lastNameInput}
          placeholder="Last Name"
          autoCapitalize="words"
        />
        <AuthInput
          {...emailInput}
          placeholder="Email"
          keyboardType="email-address"
          autoCorrect={false}
        />
        <Picker
          selectedValue={bio}
          onValueChange={bio => setBio(bio)}
          style={{
            backgroundColor: "white",
            width: constants.width / 2,
            color: !bio ? "lightgrey" : "black"
          }}
          mode="dialog"
          placeholder="Bio"
        >
          <Picker.Item label="Bio" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        <AuthButton loading={loading} onPress={handleSignup} text="Submit" />
      </View>
    </TouchableWithoutFeedback>
  );
};
