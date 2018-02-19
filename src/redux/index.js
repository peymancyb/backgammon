import { combineReducers,createStore } from 'redux';
import diceReducer from './reducers/diceReducer';
import backgammonReducer from './reducers/backgammonReducer';
import changeComponentReducer from './reducers/changeComponentReducer';
import playerTwoReducer from './reducers/playerTwoReducer';

const reducer = combineReducers({
  backgammon: backgammonReducer,
  playerTwo: playerTwoReducer,
  dice: diceReducer,
  changeComponent: changeComponentReducer,
});

const store = createStore(reducer);
export default store;
