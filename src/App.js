import React, { Component } from 'react';
import './style/App.css';
// import Peice from './components/piece';
// import Row from './components/row';
// import PropTypes from 'prop-types';
import BoardComponent from './components/boardComponent';

// import Board from './components/board';

class App extends Component {
  // constructor(props){
  //   super(props);
    // this.state = {
    //     x:0,
    //     y:0,
    // };
    // this.arrayAxis = this.arrayAxis.bind(this);
  // }
  // arrayAxis(){
  //   let x = Math.floor(Math.random()*12);
  //   let y = Math.floor(Math.random()*2);
  //   this.setState({
  //       x:x,
  //       y:y,
  //   });
  // }

  // componentDidMount(){
  //   this.interval = setInterval(()=>this.arrayAxis(),500);
  // }
  //
  // componentWillUnmount(){
  //   clearInterval(this.interval);
  // }
  render() {
    // console.log(this.state.x);
    return (
      <div style={{marginLeft:"30%",marginTop:"3%"}}>
        <BoardComponent />
      </div>
    );
  }
}


export default App;

/* <BoardComponent PeicePosition={[this.state.x, this.state.y]}/> */

//
// this.state={
//   x:0,
//   y:0,
// };



// _generateRandom(){
//     let firstResault = Math.floor(Math.random() * 6) + 1 ;
//     let secondResault = Math.floor(Math.random() * 6) + 1 ;
//     this.setState({
//       x:firstResault,
//       y:secondResault,
//     });
//   }


//
// <div className="App">
//   <Board firstDice={this.state.x} secondDice={this.state.y}/>
//   <div style={{ position:"absolute", height: 200 , width:200 , backgroundColor:"lightblue",marginTop:50,marginLeft:100}}>
//     <button
//       onClick={()=>this._generateRandom()}
//       style={{marginTop:20}}>
//       <p>Dice</p>
//     </button>
//     <div
//       style={{marginTop:20}}>
//       <p>
//         resault: {this.state.x} {this.state.y}
//       </p>
//     </div>
//   </div>
// </div>
