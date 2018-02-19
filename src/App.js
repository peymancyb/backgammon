import React, { Component } from 'react';
import './style/App.css';
import Row from './components/row';
import {connect} from 'react-redux';
import {changeBackgammonState} from './redux/actions/backgammonActions';
import Dice from './components/dice';
import {resetX,resetY,resetDice} from './redux/actions/diceActions';
import BoardRow from './components/boardRow';
import {changeComponent} from './redux/actions/changeComponentActions';


class App extends Component {
  constructor(props){
    super(props);
    this.defaultState={
      x:0,
      y:0,
      initialDimention:{
        x:0,
        y:0
      },
      dimentions:{
        x:0,
        xSecond:0,
        y:0,
      },
    };
    this.state = this.defaultState;
    this._clickOnRow = this._clickOnRow.bind(this);
    this.validateSteps = this.validateSteps.bind(this);
  }

  componentDidMount(){
    this.setState({
      x: this.props.diceX,
      y: this.props.diceY,
    })
  }


  _clickOnRow(indexOfRow,indexOfPiece){
    let arr = this.props.backgammon.map((forEachArray)=>forEachArray.slice());
    if(this.state.x !== null || this.state.y !== null){
      if(arr[indexOfRow][indexOfPiece] !== 0 ){
        this.validateSteps(indexOfRow,indexOfPiece);
      }else{
        console.log("choose a piece!");
      }
    }else{
      alert('🙂 Roll Dice 🙂')
    }
  }


  validateSteps(indexOfRow,indexOfPiece){
    let arr = this.props.backgammon.map((forEachArray)=>forEachArray.slice());
    let initialY = indexOfRow;
    let initialX = indexOfPiece;
    const initialDimention = {
      x:initialX,
      y:initialY
    };
    //==================
      if(indexOfRow === 0){
        if(indexOfPiece+this.state.x>11 || indexOfPiece+this.state.y>11){
          let x = ((this.state.x!==null)?indexOfPiece-this.state.x+1:null);
          let xSecond = ((this.state.y!==null)?indexOfPiece-this.state.y+1:null);
          let y = indexOfRow+1;
          let dimentions = {
            x:x,
            xSecond:xSecond,
            y:y,
          };
          this.setState({
            dimentions:dimentions,
            initialDimention:initialDimention,
          });
        }else{
          let x = ((this.state.x!==null)?indexOfPiece+this.state.x:null);
          let xSecond = ((this.state.y!==null)?indexOfPiece+this.state.y:null);
          let y = indexOfRow;
          let dimentions = {
            x:x,
            xSecond:xSecond,
            y:y,
          };
          this.setState({
            dimentions:dimentions,
            initialDimention:initialDimention,
          });
        }
      }
      if(indexOfRow === 1){
        let x = ((this.state.x!==null)?indexOfPiece-this.state.x:null);
        let xSecond = ((this.state.y!==null)?indexOfPiece-this.state.y:null);
        let y = indexOfRow;
        let dimentions = {
          x:x,
          xSecond:xSecond,
          y:y,
        };
        this.setState({
          dimentions:dimentions,
          initialDimention:initialDimention,
        });
      }
      this.props.dispatch(changeComponent(false));
    }


  componentWillReceiveProps(nextProps){
    this.setState({
      x: nextProps.diceX,
      y: nextProps.diceY,
    })
  }


  render() {
    let backgammonArray = this.props.backgammon.map((row, i) => {
      return (
        <div key={`row${i}`} className="flex flex-center">
            {row.map((piece, n) => (
              <div
                key={`index ${n}`}
                onClick={()=>this._clickOnRow(i,n)}
                >
                  <Row
                    className={i === 1? 'topRow' : 'bottomRow'}
                    Color={n%2===0?'darkRow':'brightRow'}
                    key={`${i}${n}`}
                    pieceNumber={piece}
                    arrayIndex={n}
                    pieceColor={((i===0 && n%11===0)||(i===1 && (n/5===1 || n/7===1))?"white":"black")}
                  />
              </div>
            ))}
        </div>
      )
    });
    return (
      <div>
        <div className="App">
            {
              this.props.componentState ?
              backgammonArray:
              <BoardRow
                dimentions={this.state.dimentions}
                initialPlace={this.state.initialDimention}
              />
            }
        </div>
        <Dice/>
      </div>
    );
  }
}

export default connect((store)=>{
  return{
    backgammon: store.backgammon.backgammon,
    diceX: store.dice.first,
    diceY: store.dice.second,
    componentState: store.changeComponent.componentState
  };
})(App);
