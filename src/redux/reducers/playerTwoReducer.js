const backgammonInitial ={
  backgammon:[[0,0,0,0,0,5,0,3,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,0,5]]
};

const backgammonReducer = (state=backgammonInitial,action)=>{
  switch (action.type) {
    case "CHANGE_BACKGAMMON":
      return {...state,backgammon: action.payload}
    default:
    return state;
  }
};

export default backgammonReducer;
