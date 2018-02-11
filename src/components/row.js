import React, { Component } from 'react';
import '../style/App.css';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import Piece from './piece';


class Row extends Component {
  constructor(props){
    super(props);
    this.state={
      active: false,
      x:0,
      y:0,
      firstPlace:null,
      secondPlace:null,
    };
    this._renderPiece = this._renderPiece.bind(this);

  }

  _renderPiece(items){
    let arr = [];
    for(let i=0 ; i < items ;i++){
      arr.push(
        <div key={`piece${i}`}>
          <Piece/>
        </div>
      );
    }
    return arr;
  }

  render() {
    return (
        <div className={`row ${this.props.className} ${this.props.Color}`}>
          {this._renderPiece(this.props.pieceNumber)}
        </div>
    );
  }
}

export default connect((store)=>{
  return{
    backgammon: store.backgammon
  };
})(Row);
