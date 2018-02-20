import { combineReducers,createStore } from 'redux';
import diceReducer from './reducers/diceReducer';
import backgammonReducer from './reducers/backgammonReducer';
import changeComponentReducer from './reducers/changeComponentReducer';
import changePlayerReducer from './reducers/changePlayerReducer';

const reducer = combineReducers({
  backgammon: backgammonReducer,
  dice: diceReducer,
  changeComponent: changeComponentReducer,
  changePlayer: changePlayerReducer
});

const store = createStore(reducer);
export default store;
