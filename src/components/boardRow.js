import React , {Component} from 'react';
import Row from './row';
import {connect} from 'react-redux';
import {changeBackgammonState} from '../redux/actions/backgammonActions';
import {changeComponent} from '../redux/actions/changeComponentActions';
import {resetX , resetY} from '../redux/actions/diceActions';
class BoardRow extends Component {
  constructor(props){
    super(props);
    this._clickOnRow = this._clickOnRow.bind(this);
    this._changeColor = this._changeColor.bind(this);
  }

  _changeColor(n,i){
    console.log(this.props.dimentions.xSecond);
    console.log(this.props.dimentions.x);
    if((n===this.props.dimentions.x && i === this.props.dimentions.y) || (n === this.props.dimentions.xSecond && i === this.props.dimentions.y)){
      return 'availablePlaces';
    }else{
      if(n%2===0){
        return 'darkRow';
      }else{
        return 'brightRow';
      }
    }
  }


  _clickOnRow(indexOfRow,indexOfPiece){
    let arr = this.props.backgammon.map((currentArray)=>currentArray.slice());
    if(indexOfRow=== this.props.dimentions.y && indexOfPiece === this.props.dimentions.x){
      //reset x dice
      arr[this.props.initialPlace.y][this.props.initialPlace.x] = arr[this.props.initialPlace.y][this.props.initialPlace.x] - 1;
      arr[indexOfRow][indexOfPiece] = arr[indexOfRow][indexOfPiece] + 1;
      this.props.dispatch(resetX());
      this.props.dispatch(changeBackgammonState(arr));
      this.props.dispatch(changeComponent(true));
    }
    if(indexOfRow=== this.props.dimentions.y && indexOfPiece === this.props.dimentions.xSecond){
      //reset y dice
      arr[this.props.initialPlace.y][this.props.initialPlace.x] = arr[this.props.initialPlace.y][this.props.initialPlace.x] - 1;
      arr[indexOfRow][indexOfPiece] = arr[indexOfRow][indexOfPiece] + 1;
      this.props.dispatch(resetY());
      this.props.dispatch(changeBackgammonState(arr));
      this.props.dispatch(changeComponent(true));
    }
  }


  render(){
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
                    Color={this._changeColor(n,i)}
                    key={`${i}${n}`}
                    pieceNumber={piece}
                    arrayIndex={n}
                  />
              </div>
            ))}
        </div>
      )
    });

    return(
      <div>
        {backgammonArray}
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
})(BoardRow);



// ((n===this.props.dimentions.x && i === this.props.dimentions.y) || (n === this.props.dimentions.xSecond && i === this.props.dimentions.y))?'availablePlaces':'brightRow'
