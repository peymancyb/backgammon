import React, {Component} from 'react';
import {rollDice} from '../redux/actions/diceActions';
import {connect} from 'react-redux';

class Dice extends Component{
  constructor(props){
    super(props);
    this.state = {
      x:0,
      y:0
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
      y:y
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
      </div>
    )
  }
}

export default connect((store)=>{
  return{
    diceX: store.dice.first,
    diceY: store.dice.second
  }
})(Dice);
