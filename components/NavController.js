import React from "react";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import { Text, View, TouchableOpacity } from "react-native";
import AuthNavigation from "../navigation/AuthNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = useLogOut();

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <AuthNavigation />
      )}
    </View>
  );
};
