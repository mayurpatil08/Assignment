/* A shop will give discount of 10% if the cost of purchased quantity is more than Rs.1000 .Ask user for the quantity. Suppose  one unit will cost Rs.100 . Judge and print total cost for user.*/
let value, totalprice, cost = 100;
let quantity = prompt("Enter the quantity of purchesed items:");
quantity = Number.parseInt(quantity);
totalprice = quantity * cost;
if (totalprice >= 1000) {
  value = totalprice * 0.1;
  console.log("\n total price before discount =%d ", totalprice);
  console.log("\n discount allowed=%d", value);
  console.log("\n price after discount =%d", totalprice - value);
}
else {
  console.log("\n You are not eligible for discount");
}