// 1.
const [a, b] = [true, false];

console.log(a && b);
console.log(a || b);
console.log(!a);

// 2.
const [x, y, z] = [1, 2, 3];
console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(x != 0);

// 3.
const [isLoggedIn, isAdmin] = [true, false];
console.log(isLoggedIn ? "Welcome" : "Please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

// 4.
const [value1, value2] = [null, undefined];
console.log(Boolean(value1 || value2));
console.log(!(value1 && value2));

// 5.
const num = 1999;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num < 100);
