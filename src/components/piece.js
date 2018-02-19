import React, { Component } from 'react';

class Piece extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div
          style={{
            width:25,
            height:25,
            borderRadius:"50%",
            backgroundColor:`${this.props.pieceColor}`,
          }}
        />
    );
  }
}

export default Piece;
