import React, { Component } from "react";

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Profile"
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
export default profile;