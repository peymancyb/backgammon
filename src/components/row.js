import React, { Component } from 'react';
// import Peice from './piece';
import PropTypes from 'prop-types';

export default class Row extends Component {
  render() {
    const {black} = this.props;
    const fill = black ? "white" : "black";
    const stroke = black ? 'black' : 'white';
    return(
      <div
        style={{
          backgroundColor:fill,
          color:stroke,
          width:40,
          height:40,
          alignItems:"center",
          justifyContent:"center",
        }}>
        {this.props.children}
      </div>
    );
  }
}

Row.propTypes = {
  black: PropTypes.bool
};
