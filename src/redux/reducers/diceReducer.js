const diceInitial = {
    first:0,
    second:0,
};
const diceReducer = (state=diceInitial,action)=>{
  switch (action.type) {
    case "ROLLDICE":{
      return {...state,first:action.payload.first, second:action.payload.second}
    }
    default:
    return state;
  }
}

export default diceReducer;
