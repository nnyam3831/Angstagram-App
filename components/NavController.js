import React from "react";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import { Text, View, TouchableOpacity } from "react-native";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = useLogOut();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logIn}>
          <Text>Log In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
