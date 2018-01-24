import React, { Component } from 'react';
import './App.css';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


export default class ChartDown extends Component{
  constructor(props){
    super(props);
    this.defaultState={
      chart:[],
      firstDice:props.firstDice,
      secondDice:props.secondDice,
      defaultBoard:props.defaultBoard,
    };
    this.state = this.defaultState;
  }

componentDidMount(){
  if(this.props.status === "chartThree"){
    let arrThree = [];
    arrThree.push(this.state.defaultBoard.slice(12,18));
    this.setState({
      chart: arrThree[0]
    });
  }else if(this.props.status === "chartOne"){
    let arrOne = [];
    arrOne.push(this.state.defaultBoard.slice(0,5));
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
          <Draggable>
            <button
              onClick={()=>console.log(`dice: ${this.state.firstDice} ${this.state.secondDice} `)}
              className="pieceWhite"
              key={i}/>
          </Draggable>
          );
      }
      return(
        <div style={{marginBottom:90,position: "relative"}}>
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
