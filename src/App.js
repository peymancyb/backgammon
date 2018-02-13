import React, { Component } from 'react';
import './style/App.css';
import Row from './components/row';
import {connect} from 'react-redux';
import {changeBackgammonState} from './redux/actions/backgammonActions';
//================================================

//first o second e ghabli ro bayad save konam ta ba x va y jam konam
class App extends Component {
  constructor(props){
    super(props);
    this.defaultState={
      tempPlace:0,
      firstPlace:null,
      secondPlace:null,
      x:null,
      y:null,
      rowState:null,
    };
    this.state=this.defaultState;
    this.dice = this.dice.bind(this);
    this._clickOnRow = this._clickOnRow.bind(this);
    this._makeActions = this._makeActions.bind(this);
  }

  dice(){
    let x = Math.floor(Math.random()*6+1);
    let y = Math.floor(Math.random()*6+1);
    this.setState({
      x:x,
      y:y,
    });
  }






  // if(arr[this.state.rowState][this.state.firstPlace]!==0 && rowIndex===0 && this.state.rowState===0){
  //   if(this.state.secondPlace+this.state.x>11 || this.state.secondPlace+this.state.y>11){
  //       arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
  //       arr[rowIndex+1][this.state.secondPlace] = arr[rowIndex+1][this.state.secondPlace] + 1;
  //       this.props.dispatch(changeBackgammonState(arr));
  //   }
  //
  //   if(this.state.secondPlace === this.state.firstPlace+this.state.x || this.state.secondPlace === this.state.firstPlace+this.state.y){
  //     arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
  //     arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
  //     this.props.dispatch(changeBackgammonState(arr));
  //
  //   }else{
  //     console.log("wrong place");
  //   }
  //
  // }else if(arr[this.state.rowState][this.state.firstPlace]!==0 && rowIndex===1 && this.state.rowState===1){
  //   if(this.state.secondPlace === this.state.firstPlace-this.state.x || this.state.secondPlace === this.state.firstPlace-this.state.y){
  //     arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
  //     arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
  //     this.props.dispatch(changeBackgammonState(arr));
  //   }
  // }





  //check available indexes
  _makeActions(rowIndex){
    //rowState is the first place where user clicked
    //rowIndex is the row index of pieces
    if(this.state.x!==null || this.state.y!==null){
      let arr = this.props.backgammon.map((currentArray)=>currentArray.slice());
      if(arr[this.state.rowState][this.state.firstPlace]!==0 && this.state.rowState === 0 ){
          if(this.state.firstPlace+this.state.x>12 || this.state.firstPlace+this.state.y>12){
            if(this.state.secondPlace === this.state.firstPlace-this.state.x+1 ){
              arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
              arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
              this.props.dispatch(changeBackgammonState(arr));
              this.setState({
              firstPlace:null,
              secondPlace:null,
              x:null,
              rowState:null,
            });
            }
            if(this.state.secondPlace === this.state.firstPlace-this.state.y+1){
              arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
              arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
              this.props.dispatch(changeBackgammonState(arr));
              this.setState({
              firstPlace:null,
              secondPlace:null,
              y:null,
              rowState:null,
            });
            }
          }else if(this.state.secondPlace === this.state.firstPlace+this.state.x || this.state.secondPlace === this.state.firstPlace+this.state.y){

            arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
            arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
            this.props.dispatch(changeBackgammonState(arr));
          }else{
            console.log("wrong place");
          }

      }else if(arr[this.state.rowState][this.state.firstPlace]!==0 && this.state.rowState === 1){
        if(this.state.secondPlace === this.state.firstPlace-this.state.x || this.state.secondPlace === this.state.firstPlace-this.state.y){
          arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
          arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
          this.props.dispatch(changeBackgammonState(arr));
        }
      }
    }else{
      console.log("roll dice");
      this.setState(this.defaultState);
    }

    //==========================================================================
    //setting x and y to null regarding to their indexes
    if(rowIndex===0 || this.state.rowState===0){
          if(this.state.secondPlace === this.state.x+this.state.tempPlace){
             this.setState({
             firstPlace:null,
             secondPlace:null,
             x:null,
             rowState:null,
           });
         }
         if(this.state.secondPlace === this.state.y+this.state.tempPlace) {
            this.setState({
            firstPlace:null,
            secondPlace:null,
            y:null,
            rowState:null,
          });
         }
    }else if(rowIndex===1 || this.state.rowState===1){
        if(this.state.secondPlace === this.state.tempPlace-this.state.x){
           this.setState({
           firstPlace:null,
           secondPlace:null,
           x:null,
           rowState:null,
         });
       }
       if(this.state.secondPlace === this.state.tempPlace-this.state.y) {
          this.setState({
          firstPlace:null,
          secondPlace:null,
          y:null,
          rowState:null,
        });
       }
    }
    //==========================================================================
   return this.setState({
     firstPlace:null,
     secondPlace:null,
     rowState:null,
   });
  }





  _clickOnRow(i,index){
    let current = i;
    if(this.state.firstPlace == null){
      this.setState({
        firstPlace: current,
        rowState: index,
      },()=>this.setState({tempPlace:this.state.firstPlace}));
    }else if(this.state.secondPlace == null){
      this.setState({
        secondPlace: current
      },()=>this._makeActions(index));
    }
  }

  render() {
    console.log(this.props.backgammon);
    let backgammonArray = this.props.backgammon.map((row, i) => {
      return (
        <div key={`row${i}`} className="flex flex-center">
            {row.map((piece, n) => (
              <div
                key={`index ${n}`}
                onClick={()=>this._clickOnRow(n,i)}
                >
                  <Row
                    className={i === 1? 'topRow' : 'bottomRow'}
                    Color={n%2===0?'backgroundColorPLONE':'backgroundColorPLTWO'}
                    key={`${i}${n}`}
                    pieceNumber={piece}
                    arrayIndex={n}
                  />
              </div>
            ))}
        </div>
      )
    });

    return (
      <div>
        <div className="App">
            {backgammonArray}
        </div>
        <div className="dice">
          <button
            className="diceButton"
            onClick={()=>this.dice()}>
            <p>Dice</p>
          </button>
          <div className="marginTop">
            {(this.state.x !== null)? this.state.x : null} {(this.state.y !== null)? this.state.y : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store)=>{
  return{
    history: store.backgammon,
    backgammon: store.backgammon.backgammon,
  };
})(App);

//
//
//
// if(this.state.secondPlace === this.state.x){
//   arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
//   arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
//    this.setState({
//     firstPlace:null,
//     secondPlace:null,
//     x:null,
//     rowState:null,
//   });
//   this.props.dispatch(changeBackgammonState(arr));
// }
//
// if(this.state.secondPlace === this.state.y){
//   arr[this.state.rowState][this.state.firstPlace] = arr[this.state.rowState][this.state.firstPlace] - 1;
//   arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
//    this.setState({
//     firstPlace:null,
//     secondPlace:null,
//     y:null,
//     rowState:null,
//   });
//   this.props.dispatch(changeBackgammonState(arr));
// }
