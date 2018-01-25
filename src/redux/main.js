import {combineReducers,createStore} from 'redux';

const backgammonReducer = (state,actions)=>{

};

const reducer = function(state,action){
  //reducer: It describes how an action transforms the state into the next state.
};





//createStore: Its API is { subscribe, dispatch, getState }.
const store = createStore(reducer,{
  defaultBoard:[
      [2,0,0,0,0,0,]
      [0,0,0,0,0,5,]
      [0,0,0,0,0,5,]
      [0,3,0,0,0,0,]
    ],
});


// use subscribe() to update the UI in response to state changes.
// it can also be handy to persist the current state in the localStorage.
//===================
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.subscribe(()=>{
  console.log("store changed: ",store.getState());
});




// store.dispatch({
//   type: "INC",
//   payload: 1,
// });
// store.dispatch({
//   type: "INC",
//   payload: 1,
// });
// store.dispatch({
//   type: "INC",
//   payload: 1,
// });
// store.dispatch({
//   type: "DEC",
//   payload: 1,
// });
// store.dispatch({
//   type: "DEC",
//   payload: 1,
// });
