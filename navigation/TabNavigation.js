import React from "react";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Profile from "../screens/Tabs/Profile";
import Notification from "../screens/Tabs/Notification";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { View, Text, Platform, AsyncStorage } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import MessageLink from "../components/MessageLink";
import NavIcon from "../components/NavIcon";
import { useProfileName } from "../AuthContext";
import { getProfileName } from "./MainNavigation";
import ProfileHeader from "../components/ProfileHeader";
import Detail from "../screens/Detail";
import styles from "../styles";
import UserDetail from "../screens/UserDetail";
// 기본 화면 바탕에 stackFactory를 구현해놓으면 component로 따로 구현하지않아도 됨

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator(
    {
      InitialRoute: {
        screen: initialRoute,
        navigationOptions: {
          ...customConfig
        }
      },
      Detail: {
        screen: Detail,
        navigationOptions: {
          headerTintColor: styles.blackColor,
          title: "Photo"
        }
      },
      UserDetail: {
        screen: UserDetail,
        navigationOptions: ({ navigation }) => ({
          title: navigation.getParam("username")
        })
      }
    },
    {
      defaultNavigationOptions: {
        headerBacktitle: null
      }
    }
  );

export default createBottomTabNavigator(
  {
    Home: {
      screen: stackFactory(Home, {
        headerRight: () => <MessageLink />,
        headerTitle: <NavIcon name="logo-instagram" size={36} image />
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => <NavIcon focused={focused} name={Platform.OS === "ios" ? "ios-home" : "md-home"} />
      }
    },
    Search: {
      screen: stackFactory(Search, {
        headerBackTitle: null
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon focused={focused} name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
        )
      }
    },

    Add: {
      screen: View,
      navigationOptions: {
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate("PhotoNavigation");
        },
        tabBarIcon: ({ focused }) => <NavIcon focused={focused} name={Platform.OS === "ios" ? "ios-add" : "md-add"} />
      }
    },
    Notification: {
      screen: stackFactory(Notification, {
        title: "Notification"
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-heart"
                  : "ios-heart-empty"
                : focused
                ? "md-heart"
                : "md-heart-empty"
            }
          />
        )
      }
    },
    Profile: {
      screen: stackFactory(Profile, {
        headerTitle: <ProfileHeader />
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon focused={focused} name={Platform.OS === "ios" ? "ios-person" : "md-person"} />
        )
      }
    }
  },

  {
    initialRouteName: "Home",
    tabBarOptions: {
      showLabel: false
    }
  }
);
