export function rollDice(x,y){
  return{
    type:"ROLLDICE",
    payload:{
      first:x,
      second:y,
    },
  }
};
