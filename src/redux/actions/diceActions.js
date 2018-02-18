export function rollDice(x,y){
  return{
    type:"ROLLDICE",
    payload:{
      first:x,
      second:y,
    },
  }
};

export function resetX(){
  return{
    type:'RESETX',
    payload:null
  }
}
export function resetY(){
  return{
    type:'RESETY',
    payload:null
  }
}
export function resetDice(){
  return{
    type:'RESETDICE',
    payload:null
  }
}
