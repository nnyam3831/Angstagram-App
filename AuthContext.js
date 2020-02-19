// Context 공유 login, logout 여기다가 구현함
import React, { createContext, useState, useContext } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = createContext();
export const AuthProvider = ({ isLoggedIn: isLoggedInProp, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);
  const [profileName, setProfileName] = useState("");
  const logUserIn = async token => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      await AsyncStorage.setItem("jwt", token);
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };
  const logUserOut = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logUserIn, logUserOut, profileName, setProfileName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// hooks
export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};
export const useLogIn = () => {
  const { logUserIn } = useContext(AuthContext);
  return logUserIn;
};
export const useLogOut = () => {
  const { logUserOut } = useContext(AuthContext);
  return logUserOut;
};
export const useProfileName = () => {
  const { profileName, setProfileName } = useContext(AuthContext);
  return [profileName, setProfileName];
};
