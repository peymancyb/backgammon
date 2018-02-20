import React, {Component} from 'react';
import {rollDice} from '../redux/actions/diceActions';
import {connect} from 'react-redux';
import {changePlayerAction} from '../redux/actions/changePlayerAction';

class Dice extends Component{
  constructor(props){
    super(props);
    this.state = {
      x:0,
      y:0,
      count:0,
    };
    this.dice = this.dice.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      x: nextProps.diceX,
      y: nextProps.diceY
    });
  }

  dice(){
    let x = Math.floor(Math.random()*6+1)
    let y = Math.floor(Math.random()*6+1)
    this.setState({
      x:x,
      y:y,
      count: ++this.state.count
    },()=>{
      if(this.state.count%2===0){
        this.props.dispatch(changePlayerAction(false));
      }else{
        this.props.dispatch(changePlayerAction(true));
      }
    });
    this.props.dispatch(rollDice(x,y));
  }

  render(){
    return(
      <div className='dice'>
        <button
          className="diceButton"
          onClick={()=>this.dice()}>
          <p>Dice</p>
        </button>
        <div className="marginTop">
          {(this.state.x !== 0)? this.state.x : ''} {(this.state.y !== 0)? this.state.y : ''}
        </div>
        {(this.props.diceX !== null && this.props.diceY !== null)?
          <div style={{marginTop:10}}>
            {(this.state.count%2===0)?
              <p>Black turn</p>
              :
              <p>White turn</p>
            }
          </div>
          :
          ''
        }
      </div>
    )
  }
}

export default connect((store)=>{
  return{
    diceX: store.dice.first,
    diceY: store.dice.second,
  }
})(Dice);
