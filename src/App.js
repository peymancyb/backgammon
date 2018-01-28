import React, { Component } from 'react';
import './style/App.css';
import Piece from './components/piece';
import Row from './components/row';

import {connect} from 'react-redux';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      rowOne:3,
      rowTwo:2,
      active: false,
      x:0,
      y:0,
      firstPlace:null,
      secondPlace:null,
    };
    this._changeState = this._changeState.bind(this);
    this._renderPiece = this._renderPiece.bind(this);
    this.dice = this.dice.bind(this);
    this._clickOnRow = this._clickOnRow.bind(this);
    this._makeActions = this._makeActions.bind(this);
  }


  _makeActions(){
    console.log("x: "+this.state.x);
    console.log("y: "+this.state.y);
    let arr = this.props.backgammon;
    let firstPlace = this.state.firstPlace;
    let secondPlace = this.state.secondPlace;
    arr[firstPlace] = arr[firstPlace] - 1;
    arr[secondPlace] = arr[secondPlace] + 1;
    return this.setState({
      firstPlace:null,
      secondPlace:null,
    });
  }


  _clickOnRow(i){
    console.log("row clicked: "+i);
    let current = i;
    if(this.state.firstPlace == null){
      this.setState({
        firstPlace: current
      });
    }else if(this.state.secondPlace == null){
      this.setState({
        secondPlace: current
      },()=>this._makeActions());
    }
  }

  dice(){
    let x = Math.floor(Math.random()*6+1);
    let y = Math.floor(Math.random()*6+1);
    this.setState({
      x:x,
      y:y,
    });
  }

  _changeState(status){
    console.log(status);
  }

  _renderPiece(items,status){
    let arr = [];
    for(let i=0 ; i<items ;i++){
      arr.push(
        <div key={i}>
          <Piece/>
        </div>
      );
    }
    return(
      <div>
        {arr}
      </div>
    );
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    console.log(this.props.backgammon);
    let backgammonArray = [];
    for(let i=0 ; i<this.props.backgammon.length ;i++){
      backgammonArray.push(
        <div key={i} onClick={()=>this._clickOnRow(i)} >
          <Row>
            {this._renderPiece(this.props.backgammon[i],i)}
          </Row>
        </div>
      )
    }
    return (
      <div>
        <div className="App">
            {backgammonArray}
        </div>
        <div className="dice">
          <button
            onClick={()=>this.dice()}>
            <p>Dice</p>
          </button>
          <div>
            {this.state.x +" "+this.state.y}
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store)=>{
  return{
    backgammon: store.backgammon
  };
})(App);
