const diceInitial = {
    first:null,
    second:null,
};
const diceReducer = (state=diceInitial,action)=>{
  switch (action.type) {
    case "ROLLDICE":{
      return {
        ...state,
        first:action.payload.first,
        second:action.payload.second
      }
    }
    case 'RESETX':{
      return{
        ...state,
        first:action.payload,
      }
    }
    case 'RESETY':{
      return{
        ...state,
        second:action.payload,
      }
    }
    case 'RESETDICE':{
      return{
        ...state,
        first:action.payload,
        second:action.payload,
      }
    }
    default:
    return state;
  }
}
export default diceReducer;
