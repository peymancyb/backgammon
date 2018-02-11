import React, { Component } from 'react';

class Piece extends Component {
  render() {
    return (
        <div
          style={{
            width:25,
            height:25,
            borderRadius:"50%",
            backgroundColor:"black",
          }}
        />
    );
  }
}

export default Piece;
