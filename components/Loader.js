import React from "react";
import styled from "styled-components";
import styles from "../styles";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Container>
    <ActivityIndicator color={styles.blackColor} />
  </Container>
);
