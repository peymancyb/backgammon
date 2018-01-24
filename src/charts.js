import React, { Component } from 'react';
import './App.css';

//this contains chart , board , game
//6 chart total 12 in a row, 24 all,

export class ChartDown extends Component{
  constructor(props){
    super(props);
    this.defaultState={
      chart:this.props.arrayOfButtons,
      firstDice:props.firstDice,
      secondDice:props.secondDice,
      defaultBoard:props.defaultBoard,
    };
    this.state = this.defaultState;
  }

componentDidMount(){
  if(this.props.status === "chartThree"){
    let arrThree = [];
    console.log("charThree");
    arrThree.push(this.state.defaultBoard.slice(12,17));
    console.log(arrThree);
    this.setState({
      chart: arrThree[0]
    });
  }else if(this.props.status === "chartOne"){
    let arrOne = [];
    console.log("chartOne");
    arrOne.push(this.state.defaultBoard.slice(0,5));
    console.log(arrOne);
    this.setState({
      chart: arrOne[0]
    });
  }
}

componentWillReceiveProps(nextProps){
  this.setState({
    firstDice:nextProps.firstDice,
    secondDice:nextProps.secondDice,
  });
}

  renderPieces(numOfPieces){
      let items = [];

      for (let i = 0 ; i < numOfPieces ; i++){
        items.push(
            <button onClick={()=>alert(`dice: ${this.state.firstDice} ${this.state.secondDice} `)} className="pieceWhite" key={i}/>
          );
      }
      return(
        <div>
          {items}
        </div>
      );
    }


  render(){
    return(
      <div>
        <div className="arrow-down odd">
          {this.renderPieces(this.state.chart[0])}
        </div>
        <div className="arrow-down even">
          {this.renderPieces(this.state.chart[1])}
        </div>
        <div className="arrow-down odd">
          {this.renderPieces(this.state.chart[2])}
        </div>
        <div className="arrow-down even">
          {this.renderPieces(this.state.chart[3])}

        </div>
        <div className="arrow-down odd">
          {this.renderPieces(this.state.chart[4])}

        </div>
        <div className="arrow-down even">
          {this.renderPieces(this.state.chart[5])}
        </div>
      </div>
    );
  }
}

export class ChartUP extends Component{
  constructor(props){
    super(props);
    this.defaultState={
      chart:this.props.arrayOfButtons,
      firstDice:props.firstDice,
      secondDice:props.secondDice,
      defaultBoard:props.defaultBoard,
    };
    this.state = this.defaultState;
  }

  componentDidMount(){
    console.log(this.state.defaultBoard);
    if(this.props.status === "charFour"){
      let charFour = [];
      console.log("charThree");
      charFour.push(this.state.defaultBoard.slice(18,24));
      console.log("four:"+charFour);
      this.setState({
        chart: charFour[0]
      });
    }else if(this.props.status === "charTwo"){
      let chartTwo = [];
      chartTwo.push(this.state.defaultBoard.slice(6,12));
      console.log("two:"+chartTwo);
      this.setState({
        chart: chartTwo[0]
      });
    }
  }


  componentWillReceiveProps(nextProps){
    this.setState({
      firstDice:nextProps.firstDice,
      secondDice:nextProps.secondDice,
    });
  }

  renderPieces(numOfPieces){
      let items = [];
      for (let i = 0 ; i < numOfPieces ; i++){
        items.push(
            <button onClick={()=>alert(`dice: ${this.state.firstDice} ${this.state.secondDice}`)} className="pieceWhite" key={i}/>
          );
      }
      return(
        <div>
          {items}
        </div>
      );
    }



  render(){
    return(
      <div>
        <div className="arrow-up odd">
          {this.renderPieces(this.state.chart[0])}
        </div>
        <div className="arrow-up even">
          {this.renderPieces(this.state.chart[1])}

        </div>
        <div className="arrow-up odd">
          {this.renderPieces(this.state.chart[2])}

        </div>
        <div className="arrow-up even">
          {this.renderPieces(this.state.chart[3])}

        </div>
        <div className="arrow-up odd">
          {this.renderPieces(this.state.chart[4])}

        </div>
        <div className="arrow-up even">
          {this.renderPieces(this.state.chart[5])}
        </div>
      </div>
    );
  }
}

//
// export class Piece extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return(
//         <button
//            onClick={()=>alert("check available positions")}
//            className="piece_1"/>
//     );
//   }
// }
