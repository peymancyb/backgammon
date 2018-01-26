import React, { Component } from 'react';
import './style/App.css';
import Peice from './components/piece';
import Row from './components/row';
import BoardSquare from './components/boardSquare';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import {canMovePiece, movePiece } from './components/game';
import HTML5Backend from 'react-dnd-html5-backend';

class BoardComponent extends Component {
  constructor(props){
    super(props);
    this.clickedPositions = this.clickedPositions.bind(this);
  }


clickedPositions(toX, toY){
  if(canMovePiece(toX, toY))
  movePiece(toX, toY);
}

renderPiece(x, y) {
  const [PeiceX,PeiceY] = this.props.piecePosition;
  if (x === PeiceX && y === PeiceY) {
    return <Peice/>;
  }
}


renderPieces(i){
  const x = i % 12;
  const y = Math.floor(i / 12);
    if(i<12){
      return(
        <div
          key={i}
          onClick={() => this.clickedPositions(x, y)}
          className='upBoard'
          >
          <BoardSquare x={x} y={y}>
            {this.renderPiece(x, y)}
          </BoardSquare>
        </div>
      );
    }else if(i>=12){
      return(
        <div
          className='downBoard'
          key={i}
          onClick={() => this.clickedPositions(x, y)}
          >
          <BoardSquare x={x} y={y}>
            {this.renderPiece(x, y)}
          </BoardSquare>
        </div>
      );
    }
  }
  render() {
    const rows = [];
    for (let i = 0; i < 24; i++) {
      rows.push(this.renderPieces(i));
    }
    return(
        <div className='boardContainer'>
          {rows}
        </div>
    );
  }
}

BoardComponent.propTypes = {
  piecePosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};



export default DragDropContext(HTML5Backend)(BoardComponent);



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






//
// renderPieces(i){
//   const x = i % 12;
//   const y = Math.floor(i / 12);
//   const black = (x+y) % 2 === 1;
//   let arr = [this.state.x,this.state.y];
//   const [PeiceX,PeiceY] = arr;
//   const peice = (x === PeiceX && y === PeiceY) ? <Peice/> : null;
//     if(i<12){
//       return(
//         <div
//           key={i}
//           onClick={() => this.clickedPositions(x, y)}
//           className='upBoard'
//           >
//           <Row>
//             {peice}
//           </Row>
//         </div>
//       );
//     }else if(i>=12){
//       return(
//         <div
//           className='downBoard'
//           key={i}
//           onClick={() => this.clickedPositions(x, y)}
//           >
//           <Row>
//             {peice}
//           </Row>
//         </div>
//       );
//     }
//   }
