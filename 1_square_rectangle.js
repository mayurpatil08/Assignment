/* Take the values of length and breath of a rectangle from the user and check wheather it is square or not. */ 
let length = prompt("enter the length:");
length = Number.parseInt(length);
let breath = prompt("enter the breath:");
breath = Number.parseInt(breath);
if (length == breath) 
{
  console.log("The shape is square");
}
else {
  console.log("The shape is rectangle");
}