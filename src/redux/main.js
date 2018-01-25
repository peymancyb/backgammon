//first principle of redux is that everything changes in the app is stored in
//a single object. this is called state or state tree
//state tree is read only: it means we can't modify it
//everytime we need to change the state we need to dispatch an action

//an action is a plain JS object describing the changes

//dispatch:requires type to be defined

//createStore: have the state of the application and it let to use dispatch and
//we need to specify  reducer to know how state changes.
//API's => getState():retrives the current state of redux state tree
//API's => dispatch():lets to dispatch actions
//API's => subscribe():it lets to register a callback

//***pure functions do not change their arguments
//***impure functions change their arguments or getting network requests

//redux previous state => dispatch action => return next state this is called reducer

//reducer: It describes how an action transforms the state into the next state.

//createStore: Its API is { subscribe, dispatch, getState }.

// use subscribe() to update the UI in response to state changes.
// it can also be handy to persist the current state in the localStorage.
//===================
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.

import {combineReducers,createStore} from 'redux';
import backgammonReducer from './reducers/backgammonReducer';
import {firstDiceReducer,secondDiceReducer} from './reducers/diceReducer';

const reducers = combineReducers({
  defaultBoard: backgammonReducer,
  firstDice: firstDiceReducer,
  secondDice: secondDiceReducer,
});

const store = createStore(reducers);
