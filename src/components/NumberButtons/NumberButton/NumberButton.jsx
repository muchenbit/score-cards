import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export class NumberButton extends Component {
  render() {
    const { number, onSelect } = this.props;
    return (
      <span className="number-button" onClick={() => onSelect(number)}>
        {number}
      </span>
    );
  }
}

NumberButton.displayName = "NumberButton";
NumberButton.propTypes = {
  number: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};
NumberButton.defaultProps = {};
export default NumberButton;
