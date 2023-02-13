/* A school has following grading system:- below 25:F, 25-45:E, 45-50:D, 50-60:C, 60-80:B, above 80:A. Ask user to enter marks and print the corresponding grade. */ 
let marks = prompt("Enter the marks you obtained in the examination :");
marks = Number.parseInt(marks);
if (marks < 25 && marks >= 0) {
  console.log("\n You got the grade F.");
}
else if (marks >= 25 && marks < 45) {
  console.log("\n You got the grade E.");
}
else if (marks >= 45 && marks < 50) {
  console.log("\n You got the grade D.");
}
else if (marks >= 50 && marks < 60) {
  console.log("\n You got the grade C.");
}
else if (marks >= 60 && marks < 80) {
  console.log("\n You got the grade B.");
}
else if (marks >= 80 && marks <= 100) {
  console.log("\n You got the grade A.");
}
else {
  console.log("\n you have entered the invalid marks.");
}