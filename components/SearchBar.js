import React from "react";
import { TextInput } from "react-native";
import constants from "../constants";

const SearchBar = ({ onChange, value, onSubmit }) => {
  return (
    <TextInput
      value={value}
      placeholder={"검색"}
      style={{ fontSize: 20, width: constants.width, marginLeft: 10 }}
      returnKeyType="search"
      onChangeText={onChange}
      onEndEditing={onSubmit}
    />
  );
};

export default SearchBar;
