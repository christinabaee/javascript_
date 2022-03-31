function randomWords(){
  var firstArray= ["Central Park", "Eiffel Tower","Machu Picchu","Taj Mahal"];
  randomindex= Math.floor(Math.random()*firstArray.length);

  console.log("I want to go to "+firstArray[randomindex]);

}

randomWords();
