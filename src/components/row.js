import React, { Component } from 'react';
// import Peice from './piece';
import PropTypes from 'prop-types';

export default class Row extends Component {
  render() {
    return(
      <div className="container">
          {this.props.children}
      </div>
    );
  }
}
