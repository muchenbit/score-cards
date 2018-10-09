import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

import NumberButton from "./NumberButton";

export class NumberButtons extends Component {
  render() {
    const { options, onSelect } = this.props;
    const buttons = options.map(o => (
      <NumberButton key={o} onSelect={onSelect} number={o} />
    ));

    return <div id="number-buttons">{buttons}</div>;
  }
}

NumberButtons.displayName = "NumberButtons";
NumberButtons.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
NumberButtons.defaultProps = {};
export default NumberButtons;
