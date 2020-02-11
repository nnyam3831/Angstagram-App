import React from "react";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Notification from "../screens/Notification";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import MessageLink from "../components/MessageLink";

// 기본 화면 바탕에 stackFactory를 구현해놓으면 component로 따로 구현하지않아도 됨
const stackFactory = (initialRoute, customConfig) => {
  return createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: { ...customConfig }
    }
  });
};
export default createBottomTabNavigator({
  Home: {
    screen: stackFactory(Home, {
      title: "Home",
      headerRight: <MessageLink />
    })
  },
  Search,
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate("PhotoNavigation");
      }
    }
  },
  Notification,
  Profile
});
