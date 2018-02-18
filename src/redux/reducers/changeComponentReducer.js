const changeComponentState = {
  componentState: true
};
const changeComponentReducer = (state=changeComponentState,action)=>{
  switch (action.type) {
    case "CHANGE_STATE":
      return {...state,componentState:action.payload}
      break;
    default:
    return state;
  }
}


export default changeComponentReducer;
