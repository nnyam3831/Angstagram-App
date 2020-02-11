import React from "react";
import styled from "styled-components";
import constants from "../constants";

const Container = styled.View``;

const TextInput = styled.TextInput`
  width: ${constants.width / 2};
  padding: 10px;
  background-color: ${props => props.theme.greyColor};
  border-radius: 4px;
  border: 0.5px solid ${props => props.theme.darkGreyColor};
  margin-bottom: 10px;
`;

const AuthInput = ({
  placeholder,
  value,
  keyboardType = "default",
  autoCapitalize = "none",
  onChange,
  autoCorrect = true
}) => {
  return (
    <Container>
      <TextInput
        onChangeText={onChange}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        value={value}
        autoCorrect={autoCorrect}
      />
    </Container>
  );
};

export default AuthInput;
