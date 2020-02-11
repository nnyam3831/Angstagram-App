import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";

const Container = styled.TouchableOpacity``;
const Text = styled.Text``;
// 얘는 Navigation이 아니므로 withNavigation 필요함
export default withNavigation(({ navigation }) => (
  <Container onPress={() => navigation.navigate("MessageNavigation")}>
    <Text>Messages</Text>
  </Container>
));
