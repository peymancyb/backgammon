import { combineReducers,createStore } from 'redux';
import diceReducer from './reducers/diceReducer';
import backgammonReducer from './reducers/backgammonReducer';

const reducer = combineReducers({
  backgammon: backgammonReducer,
  dice: diceReducer,
});

const store = createStore(reducer);
export default store;
