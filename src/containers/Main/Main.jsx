import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

import HeaderBar from "../../components/HeaderBar";
import NumberDisplay from "../../components/NumberDisplay";
import NumberButtons from "../../components/NumberButtons";
export class Main extends Component {
  state = {
    numberOptions: [1, 2, 3, 5, 8, 13, 21],
    selectedNumber: 1
  };

  onSelect = number => {
    this.setState({ selectedNumber: number });
  };

  render() {
    const { numberOptions, selectedNumber } = this.state;

    return (
      <div id="main">
        <HeaderBar />
        <NumberDisplay selectedNumber={selectedNumber} />
        <NumberButtons options={numberOptions} onSelect={this.onSelect} />
      </div>
    );
  }
}

Main.displayName = "Main";
Main.propTypes = {};
Main.defaultProps = {};
export default Main;
