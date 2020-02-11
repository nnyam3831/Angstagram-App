import React from "react";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";

// Photo Navigation : Tab + stack

const PhotoTabs = createMaterialTopTabNavigator(
  {
    SelectPhoto,
    TakePhoto
  },
  {
    tabBarPosition: "bottom"
  }
);

export default createStackNavigator(
  { PhotoTabs, UploadPhoto },
  {
    headerMode: "none"
  }
);
