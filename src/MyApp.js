import React, { Component } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import DummyPage from "./pages/DummyPage";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "home",
    };
  }
  handleMenuSelect=(value)=> {
    console.log(value);
    this.setState({
      currentSelected: value,
    });
  }
  getPage() {
    const { currentSelected } = this.state;
    switch (currentSelected) {
      case "home":
        return <Homepage />;
      case "usage":
       return <DummyPage key="usage" name="Usage" />;
      case "settings":
       return <DummyPage key="settings" name="Settings"/>;
      case "logout":
       return <DummyPage key="logout" name="Logout" />;

      default:
        break;
    }
  }
  render() {
    return (
      <div className="app">
        <Header onMenuSelect={this.handleMenuSelect} />
        <div className="app-body">{this.getPage()}</div>
      </div>
    );
  }
}
export default MyApp;
