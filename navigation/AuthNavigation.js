// 인증 내비게이션
// Auth Home / SignUp / Login / Confirm
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import AuthHome from "../screens/Auth/AuthHome";
import LogIn from "../screens/Auth/LogIn";
import SignUp from "../screens/Auth/SignUp";
import Confirm from "../screens/Auth/Confirm";

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    SignUp,
    LogIn,
    Confirm
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AuthNavigation);
