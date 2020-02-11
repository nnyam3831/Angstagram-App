import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MessageNavigation from "./MessageNavigation";
const MainNavigation = createStackNavigator(
  {
    TabNavigation,
    PhotoNavigation,
    MessageNavigation
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(MainNavigation);
