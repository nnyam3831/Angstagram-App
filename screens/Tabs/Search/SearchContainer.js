import React from "react";
import SearchPresenter from "./SearchPresenter";
import SearchBar from "../../../components/SearchBar";
import NavIcon from "../../../components/NavIcon";
import { View, Platform } from "react-native";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <NavIcon name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
        <SearchBar
          value={navigation.getParam("term", "")}
          onChange={navigation.getParam("onChange", () => null)}
          onSubmit={navigation.getParam("onSubmit", () => null)}
        />
      </View>
    )
  });
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.state = {
      term: "",
      shouldFetch: false
    };
    navigation.setParams({
      term: this.state.term,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    });
  }
  onChange = text => {
    const { navigation } = this.props;
    this.setState({
      term: text,
      shouldFetch: false
    });
    navigation.setParams({
      term: text
    });
  };
  onSubmit = () => {
    this.setState({ shouldFetch: true });
  };
  render() {
    const { term, shouldFetch } = this.state;
    return <SearchPresenter term={term} shouldFetch={shouldFetch} />;
  }
}
