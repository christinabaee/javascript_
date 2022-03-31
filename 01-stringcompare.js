function stringcompare(){
var firstArray= ["hello", "lights","school","drama"];
var secondArray= ["school", "blanket","hello","chair"];

randomindex1= Math.floor(Math.random()*firstArray.length);
randomindex2= Math.floor(Math.random()*firstArray.length);


if (firstArray[randomindex1]== secondArray[randomindex2]){
  alert(firstArray[randomindex1]+" is equal to "+ secondArray[randomindex2]);}
  else{
  alert(firstArray[randomindex1]+" is not equal to "+ secondArray[randomindex2]);
  }
}

stringcompare();
