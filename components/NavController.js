import React from "react";
import {
  useIsLoggedIn,
  useLogIn,
  useLogOut,
  useProfileName
} from "../AuthContext";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";
export default () => {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};
