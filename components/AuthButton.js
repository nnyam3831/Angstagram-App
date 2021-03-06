// 따로 AuthButton Custom

import React from "react";
import styled from "styled-components";
import constants from "../constants";
import { ActivityIndicator } from "react-native";

const Touchable = styled.TouchableOpacity``;
const Container = styled.View`
  background-color: ${props =>
    props.bgColor ? props.bgColor : props.theme.blueColor};
  width: ${constants.width / 2};
  padding: 10px;
  border-radius: 4;
  margin: 10px 50px;
`;
const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const AuthButton = ({ text, onPress, loading = false, bgColor = null }) => {
  return (
    <Touchable disable={loading} onPress={onPress}>
      <Container>
        {loading ? <ActivityIndicator color={"white"} /> : <Text>{text}</Text>}
      </Container>
    </Touchable>
  );
};

export default AuthButton;
