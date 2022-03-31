function functionConditions(num){
  if (num==1){
    return "School";}
  else if (num==2){
    return "Home";}
  else if (num==3){
    return "Bed";}
  else{return "There are only three options!";}
}

console.log(functionConditions(1));
console.log(functionConditions(2));
console.log(functionConditions(3));
console.log(functionConditions(4));
