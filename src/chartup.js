import React, { Component } from 'react';
import './App.css';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

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

  renderPieces(numOfPieces,index){
      let items = [];
      let text= '';
      if(this.state.whichChart === "charTwo"){
        // console.log(this.state.defaultBoard.length);
        // console.log(index);
         text = `available: ${this.state.defaultBoard.length - (index+5)}`;
      }else if(this.state.whichChart === "charFour"){
        // console.log(this.state.defaultBoard.length);
        // console.log(index);
        text = `available: ${this.state.defaultBoard.length - (index+17) }`;
      }

      for (let i = 0 ; i < numOfPieces ; i++){
        items.push(
          <Draggable>
            <button
              onClick={()=>console.log(`dice: ${this.state.firstDice} ${this.state.secondDice} ${text}  `)}
              className="pieceWhite"
              key={i}/>
          </Draggable>
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
          {this.renderPieces(this.state.chart[0],0)}
        </div>
        <div className="arrow-up even">
          {this.renderPieces(this.state.chart[1],1)}
        </div>
        <div className="arrow-up odd">
          {this.renderPieces(this.state.chart[2],2)}

        </div>
        <div className="arrow-up even">
          {this.renderPieces(this.state.chart[3],3)}

        </div>
        <div className="arrow-up odd">
          {this.renderPieces(this.state.chart[4],4)}

        </div>
        <div className="arrow-up even">
          {this.renderPieces(this.state.chart[5],5)}
        </div>
      </div>
    );
  }
}
