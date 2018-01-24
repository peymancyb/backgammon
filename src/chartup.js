import React, { Component } from 'react';
import './App.css';

export default class ChartUP extends Component{
  constructor(props){
    super(props);
    this.defaultState={
      chart:[],
      firstDice:props.firstDice,
      secondDice:props.secondDice,
      defaultBoard:props.defaultBoard,
      whichChart:"",
    };
    this.state = this.defaultState;
  }

  componentDidMount(){
    if(this.props.status === "charFour"){
      let charFour = [];
      charFour.push(this.state.defaultBoard.slice(18,24));
      this.setState({
        chart: charFour[0],
        whichChart: "charFour",
      });
    }else if(this.props.status === "charTwo"){
      let chartTwo = [];
      chartTwo.push(this.state.defaultBoard.slice(6,12));
      this.setState({
        chart: chartTwo[0],
        whichChart: "charTwo",
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
      let state = this.state.whichChart;
      var num = 0;

      if(state === "charTwo"){

      }else if(state === "charFour"){

      }

      for (let i = 0 ; i < numOfPieces ; i++){
        items.push(
            <button
              onClick={()=>alert(`dice: ${this.state.firstDice} ${this.state.secondDice}`)}
              className="pieceWhite"
              key={i}/>
          );
      }
      return(
        <div style={{marginTop:90,paddingRight:20,position: "relative"}}>
          {items}
        </div>
      );
    }

  render(){
    return(
      <div>
        <div className="arrow-up odd" >
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
