import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import styles from "../../styles";
import constants from "../../constants";
const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Text = styled.Text``;
const Image = styled.Image`
  width: ${constants.width / 2.5};
`;
const SignUpBtn = styled.View`
  background-color: ${props => props.theme.blueColor};
  width: ${constants.width / 2};
  padding: 10px;
  border-radius: 4;
  margin: 10px 50px;
`;
const SignUpText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
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
    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
      <SignUpBtn>
        <SignUpText>Sign up</SignUpText>
      </SignUpBtn>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
      <LoginLink>
        <LoginLinkText>Log in</LoginLinkText>
      </LoginLink>
    </TouchableOpacity>
  </View>
);
