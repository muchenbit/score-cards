import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export class HeaderBar extends Component {
  render() {
    return <div id="header-bar">Score Cards</div>;
  }
}

HeaderBar.displayName = "HeaderBar";
HeaderBar.propTypes = {};
HeaderBar.defaultProps = {};
export default HeaderBar;
