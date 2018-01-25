import React, { Component } from 'react';
import './style/App.css';
import Board from './components/board';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      x:0,
      y:0,
    };
  }
_generateRandom(){
    let firstResault = Math.floor(Math.random() * 6) + 1 ;
    let secondResault = Math.floor(Math.random() * 6) + 1 ;
    this.setState({
      x:firstResault,
      y:secondResault,
    });
  }

  render() {
    return (
      <div className="App">
        <Board firstDice={this.state.x} secondDice={this.state.y}/>
        <div style={{ position:"absolute", height: 200 , width:200 , backgroundColor:"lightblue",marginTop:50,marginLeft:100}}>
          <button
            onClick={()=>this._generateRandom()}
            style={{marginTop:20}}>
            <p>Dice</p>
          </button>
          <div
            style={{marginTop:20}}>
            <p>
              resault: {this.state.x} {this.state.y}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
