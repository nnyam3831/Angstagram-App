import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import constants from "../constants";

const SquarePhoto = ({ navigation, files = [], id }) => {
  return (
    <TouchableOpacity onPress={() => navigation.push("Detail", { id })}>
      <Image
        source={{ uri: files[0].url }}
        style={{ width: constants.width / 3, height: constants.height / 6 }}
      />
    </TouchableOpacity>
  );
};

export default withNavigation(SquarePhoto);
