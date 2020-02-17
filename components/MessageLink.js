import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import NavIcon from "./NavIcon";
import { Platform } from "react-native";

const Container = styled.TouchableOpacity`
  padding-right: 20px;
`;
const Text = styled.Text``;
// 얘는 Navigation이 아니므로 withNavigation 필요함
export default withNavigation(({ navigation }) => (
  <Container onPress={() => navigation.navigate("MessageNavigation")}>
    <NavIcon
      name={Platform.OS === "ios" ? "ios-paper-plane" : "md-paper-plane"}
    />
  </Container>
));
