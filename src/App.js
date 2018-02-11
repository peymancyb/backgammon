import React, { Component } from 'react';
import './style/App.css';
import Row from './components/row';
import {connect} from 'react-redux';
import {changeBackgammonState} from './redux/actions/backgammonActions';
//================================================
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstPlace:null,
      secondPlace:null,
      x:null,
      y:null,
      oldRow:null,
    };
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


  _makeActions(rowIndex){
    console.log("row index:"+rowIndex);
    console.log("first place: "+this.state.firstPlace);
    console.log("second place: "+this.state.secondPlace);

    if(this.state.x!==null || this.state.y!==null){
      let arr = this.props.backgammon.map((currentArray)=>currentArray.slice());
      if(arr[this.state.oldRow][this.state.firstPlace]!==0){
        arr[this.state.oldRow][this.state.firstPlace] = arr[this.state.oldRow][this.state.firstPlace] - 1;
        arr[rowIndex][this.state.secondPlace] = arr[rowIndex][this.state.secondPlace] + 1;
        console.log(arr);
        this.props.dispatch(changeBackgammonState(arr));
      }
    }else{
      console.log("roll dice");
    }


    return this.setState({
      firstPlace:null,
      secondPlace:null,
      x:null,
      y:null,
      oldRow:null,
    });

  }

  _clickOnRow(i,index){
    let current = i;
    if(this.state.firstPlace == null){
      this.setState({
        firstPlace: current,
        oldRow: index,
      });
    }else if(this.state.secondPlace == null){
      this.setState({
        secondPlace: current
      },()=>this._makeActions(index));
    }
  }


  render() {
    console.log(`state: ${this.state.x}  ${this.state.y}  ${this.state.oldRow}`);
    let backgammonArray = this.props.backgammon.map((row, i) => {
      return (
        <div key={`row${i}`} className="flex flex-center">
            {row.map((piece, n) => (
              <div
                key={`index ${n}`}
                onClick={()=>this._clickOnRow(n,i)}
                >
                  <Row
                    className={i === 1? 'flex-end' : 'flex-start'}
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
            onClick={()=>this.dice()}>
            <p>Dice</p>
          </button>
          <div>
            {(this.state.x && this.state.y !== null)? this.state.x +" "+this.state.y : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store)=>{
  return{
    backgammon: store.backgammon.backgammon
  };
})(App);
