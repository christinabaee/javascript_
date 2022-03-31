function numberCompare(num1,num2){
if (num1==num2){
  alert("the two numbers are equal");}
  else if(num1>num2){
  alert(num1 + " is greater than " +num2);}
  else if (num1<num2){
  alert(num1 + " is less than " +num2);}
  }


function numberCompare2(num3,num4){
  if (num3==num4){
  alert("the two numbers are equal");}
  else if (num3>=num4){
  alert(num3 + " is greater than or equal to " + num4);}
  else if (num3<=num4){
  alert(num3 + " is less than or equal to " + num4);}
}

numberCompare(50,50);
numberCompare(40,50);
numberCompare(60,50);

numberCompare2(50,50);
numberCompare2(40,50);
numberCompare2(60,50);
