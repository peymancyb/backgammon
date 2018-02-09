import React, { Component } from 'react';
import './style/App.css';
import Row from './components/row';
import {connect} from 'react-redux';
//================================================
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      x:0,
      y:0,
    };
    this.dice = this.dice.bind(this);
    this._clickOnRow = this._clickOnRow.bind(this);
    this._makeActions = this._makeActions.bind(this);
  }

  dice(){
    let x = Math.floor(Math.random()*6+1);
    let y = Math.floor(Math.random()*6+1);
    this.setState({
      x:x,
      y:y,
    });
  }


  _makeActions(){
    // console.log("x: "+this.state.x);
    // console.log("y: "+this.state.y);
    console.log("first place: "+this.state.firstPlace);
    console.log("second place: "+this.state.secondPlace);
    // let arr = this.props.backgammon;
    // let firstPlace = this.state.firstPlace;
    // let secondPlace = this.state.secondPlace;
    // arr[firstPlace] = arr[firstPlace] - 1;
    // arr[secondPlace] = arr[secondPlace] + 1;
    return this.setState({
      firstPlace:null,
      secondPlace:null,
    });

  }

  _clickOnRow(i){
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


  render() {
    let backgammonArray = this.props.backgammon.map((row, i) => {
      return (
        <div key={`row${i}`} className="flex flex-center">
            {row.map((piece, n) => (
              <div
                key={`index ${n}`}
                onClick={()=>this._clickOnRow(n)}
                >
                  <Row
                    className={i === 1? 'flex-end' : 'flex-start'}
                    key={`${i}${n}`}
                    pieceNumber={piece}
                    arrayIndex={n}
                  />
              </div>
            ))}
        </div>
      )
    });

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
