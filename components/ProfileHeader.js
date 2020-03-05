import React from "react";
import { useProfileName } from "../AuthContext";
import styled from "styled-components";

const Text = styled.Text`
  font-size: 20px;
`;
const View = styled.View`
  align-items: center;
`;
export default () => {
  const [profileName] = useProfileName();
  console.log(profileName);
  return <Text>???</Text>;
};
