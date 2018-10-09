import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export class NumberDisplay extends Component {
  render() {
    return <div id="number-display">{this.props.selectedNumber}</div>;
  }
}

NumberDisplay.displayName = "NumberDisplay";
NumberDisplay.propTypes = {
  selectedNumber: PropTypes.number
};
NumberDisplay.defaultProps = {
  selectedNumber: 1
};
export default NumberDisplay;
