import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles";
import styled from "styled-components";
import { Image } from "react-native";

const Text = styled.Text``;
const View = styled.View`
  flex-direction: row;
  align-items: center;
`;
const NavIcon = ({
  focused = true,
  name,
  color = styles.blackColor,
  size = 30,
  image = false
}) => {
  return (
    <View>
      <Ionicons
        name={name}
        color={focused ? color : styles.darkGreyColor}
        size={size}
      />
      {image && (
        <Image
          style={{ marginLeft: 10, marginTop: 5, width: 100, height: 50 }}
          resizeMode={"contain"}
          source={require("../assets/logo.png")}
        />
      )}
    </View>
  );
};

export default NavIcon;
