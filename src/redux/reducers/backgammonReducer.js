const backgammonInitial ={
  backgammon:[
    [
      [{color: 'white'}, {color: 'white'}],
      [],
      [],
      [],
      [],
      [{color: 'black'}, {color: 'black'}, {color: 'black'}, {color: 'black'}, {color: 'black'}],
      [],
      [{color: 'white'}, {color: 'white'}, {color: 'white'}],
      [],
      [],
      [],
      [{color: 'black'}, {color: 'black'}, {color: 'black'}, {color: 'black'}, {color: 'black'}]
    ],
    [
      [{color: 'black'}, {color: 'black'}],
      [],
      [],
      [],
      [],
      [{color: 'white'}, {color: 'white'}, {color: 'white'}, {color: 'white'}, {color: 'white'}],
      [],
      [{color: 'white'}, {color: 'white'}, {color: 'white'}],
      [],
      [],
      [],
      [{color: 'black'}, {color: 'black'}, {color: 'black'}, {color: 'black'}, {color: 'black'}]
    ]
  ]
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
