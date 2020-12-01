import React, { Component } from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

class DefaultIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.propTypes.element.name.isRequired
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
export default DefaultIndex;