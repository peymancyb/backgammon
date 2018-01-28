import React, { Component } from 'react';
import '../style/App.css';
// import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    return (
        <div className={`row ${this.props.className}`}>
          {this.props.children}
        </div>
    );
  }
}
//
// Row.propTypes = {
//   active: PropTypes.bool
// };

export default Row;
