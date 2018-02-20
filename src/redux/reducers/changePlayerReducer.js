const initialPlayer ={
  player: true
};
export default function changePlayerReducer(state=initialPlayer,action){
  switch (action.type) {
    case "CHANGE_PLAYER":
      return{...state,player:action.payload}
      break;
    default:
      return state;
  }
}
