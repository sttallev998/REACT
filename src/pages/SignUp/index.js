import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "SignUp"
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
export default SignUp;