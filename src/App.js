import React, { Component } from 'react';
import './App.css';
import {ChartUP,ChartDown} from './charts';
// Piece
//this contains chart , board , game
//6 chart total 12 in a row, 24 all,

//15 piece each player
//up or down
//true is up , false down
// <Chart arrowStatus={"up"}/>
// <Chart arrowStatus={"down"}/>


// class Chart extends Component{
//   constructor(props){
//     super(props);
//
//   }
//   render(){
//     return(
//       <div>
//         {this.props.arrowStatus? <ChartUP arrayOfButtons={this.porps.arrayOfButtons}/>:<ChartDown arrayOfButtons={this.porps.arrayOfButtons}/>}
//       </div>
//     );
//   }
// }



class Board extends Component{
  constructor(props){
    super(props);
    this.defaultState={
      defaultBoard:[
          2,0,0,0,0,0,
          0,0,0,0,0,5,
          0,3,0,0,0,0,
          0,0,0,0,0,5,
        ],
      playerOne:{
        charOne:[2,0,0,0,0,0],
        charTwo:[0,0,0,0,0,5],
        charThree:[0,3,0,0,0,0],
        charFour:[0,0,0,0,0,5],
      },
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
              arrayOfButtons={this.state.playerOne.charOne}/>
          </div>

          <div className="bottom-row">
            <ChartUP
              status={"charTwo"}
              defaultBoard={this.state.defaultBoard}
              firstDice={this.state.firstDice}
              secondDice={this.state.secondDice}
              arrayOfButtons={this.state.playerOne.charTwo}/>
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
              arrayOfButtons={this.state.playerOne.charThree}/>
          </div>
          <div className="bottom-row">
            <ChartUP
              status={"charFour"}
              defaultBoard={this.state.defaultBoard}
              firstDice={this.state.firstDice}
              secondDice={this.state.secondDice}
              arrayOfButtons={this.state.playerOne.charFour}/>
          </div>
        </div>
      </div>
    );
  }
}






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


//
// <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1 className="App-title">Welcome to React</h1>
//     </header>
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
// </div>
