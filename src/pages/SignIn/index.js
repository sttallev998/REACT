import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "SignIn"
    }
  }
  render() {
    return (
      <div>
        <h1>Hello this is {this.state.name} page</h1>
      </div>
    );
  }
}
export default SignIn;
