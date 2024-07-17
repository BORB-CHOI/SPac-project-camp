// 1.
const score = 199;

if (score >= 90) result = "A";
else if (score >= 80) result = "B";
else if (score >= 80) result = "C";
else if (score >= 80) result = "D";
else result = "F";

// 2.
const num = 9;
if (num % 2 == 0) console.log("Even");
else console.log("Odd");

// 3.
const [isLoggedIn, isAdmin] = [true, false];

if (isLoggedIn)
  if (isAdmin) console.log("Welcome, admin!");
  else console.log("Access denied");
else console.log("Please log in");

// 4.
const [a, b] = [0, -0];

if (a > b) console.log("a is greater");
else if (a < b) console.log("b is greater");
else console.log("a and b are equal");

// 5.
const currentMonth = 7;

switch (currentMonth) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;
}
