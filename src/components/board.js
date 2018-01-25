import React, { Component } from 'react';
import '../style/App.css';
import ChartDown from './chartdown';
import ChartUP from './chartup';

export default class Board extends Component{
  constructor(props){
    super(props);
    this.defaultState={
      defaultBoard:[
          2,0,0,0,0,0,
          0,0,0,0,0,5,
          0,0,0,0,0,5,
          0,3,0,0,0,0,
        ],
      firstDice:props.firstDice,
      secondDice:props.secondDice,
    };
    this.state = this.defaultState;
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      firstDice:nextProps.firstDice,
      secondDice:nextProps.secondDice,
    });
  }

  render(){
    return(
      <div className = "board">
        <div className="left-bin">
          <div className="top-row">
            <ChartDown
              status={"chartOne"}
              defaultBoard={this.state.defaultBoard}
              firstDice={this.state.firstDice}
              secondDice={this.state.secondDice}
            />
          </div>

          <div className="bottom-row">
            <ChartUP
              status={"charTwo"}
              defaultBoard={this.state.defaultBoard}
              firstDice={this.state.firstDice}
              secondDice={this.state.secondDice}
              />
          </div>
        </div>
        <div className = "middle-bar">

        </div>

        <div className = "right-bin">
          <div className="top-row">
            <ChartDown
              status={"chartThree"}
              defaultBoard={this.state.defaultBoard}
              firstDice={this.state.firstDice}
              secondDice={this.state.secondDice}
              />
          </div>
          <div className="bottom-row">
            <ChartUP
              status={"charFour"}
              defaultBoard={this.state.defaultBoard}
              firstDice={this.state.firstDice}
              secondDice={this.state.secondDice}
              />
          </div>
        </div>
      </div>
    );
  }
}
