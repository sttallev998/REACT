import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dashboard"
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
export default Dashboard;