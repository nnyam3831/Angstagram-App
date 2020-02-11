import Message from "../screens/Message/Message";
import Messages from "../screens/Message/Messages";
import { createStackNavigator } from "react-navigation-stack";

const MessageNavigation = createStackNavigator({
  Messages,
  Message
});

export default MessageNavigation;
