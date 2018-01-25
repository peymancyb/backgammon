import React, { Component } from 'react';
import '../style/App.css';
import Peice from './piece';
import Row from './row';
// import PropTypes from 'prop-types';


export default class BoardComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      x:0,
      y:0,
    };
    this.clickedPositions = this.clickedPositions.bind(this);
  }

clickedPositions(x,y){
  this.setState({
    x:x,
    y:y
  });
}

  renderPieces(i){
    const x = i % 12;
    const y = Math.floor(i / 12);
    const black = (x+y) % 2 === 1;
    let arr = [this.state.x,this.state.y];
    const [PeiceX,PeiceY] = arr;
    const peice = (x === PeiceX && y === PeiceY) ? <Peice/> : null;
      if(i<12){
        return(
          <div
            key={i}
            onClick={() => this.clickedPositions(x, y)}
            style={{
              width: 45,
              height: 200 ,
              backgroundColor:"green",
              marginLeft:10,
            }}>
            <Row black={black}>
              {peice}
            </Row>
          </div>
        );
      }else if(i>=12){
        return(
          <div
            key={i}
            onClick={() => this.clickedPositions(x, y)}
            style={{ width: 45, height: 200 ,backgroundColor:"orange",marginLeft:10}}>
            <Row black={black}>
              {peice}
            </Row>
          </div>
        );
      }

  }
  render() {
    const rows = [];
    for (let i = 0; i < 24; i++) {
      rows.push(this.renderPieces(i));
    }
    return (
        <div style={{width:700}}>
          {rows.length<12 ?
            <div
              style={{
                display: 'flex',
                flexDirection:"row",
                flexWrap:"wrap",
              }}>
              {rows}
            </div>
            :
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection:"row",
                  flexWrap:"wrap",
                }}>
                {rows}
              </div>
            </div>
          }
        </div>

    );
  }
}




// BoardComponent.propTypes = {
//   PeicePosition: PropTypes.arrayOf(
//     PropTypes.number.isRequired
//   ).isRequired
// };

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
