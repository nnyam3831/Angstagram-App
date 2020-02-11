import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import styles from "../../styles";
import constants from "../../constants";
import AuthButton from "../../components/AuthButton";
const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Text = styled.Text``;
const Image = styled.Image`
  width: ${constants.width / 2.5};
`;
const LoginLink = styled.View`
  margin-top: 10px;
`;
const LoginLinkText = styled.Text`
  color: ${props => props.theme.blueColor};
  font-weight: 600;
`;
export default ({ navigation }) => (
  <View>
    <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
    <AuthButton
      text={"Sign Up"}
      onPress={() => navigation.navigate("SignUp")}
    />
    <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
      <LoginLink>
        <LoginLinkText>Log in</LoginLinkText>
      </LoginLink>
    </TouchableOpacity>
  </View>
);
