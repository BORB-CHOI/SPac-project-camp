// 1.

const num = -0 + 0 / 0 - 0 * 0 - 0 - -0 + 1;

console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");

// 2.
const [a, b, c] = [3, 2, 1];
// let maxNum = 0;
// a > b && a > c ? (maxNum = a) : b > a && b > c ? (maxNum = b) : (maxNum = c);
// console.log(maxNum);
const result =
  a > b ? (a > c ? "A:" + a : "C:" + c) : b > c ? "B:" + b : "C:" + c;
console.log(result);

// a와 b 비교

//   // a>b 경우
//   a와 c 비교

//     // a>c인 경우
//       -- a가 짱큼

//     // a<c인 경우
//       -- c가 짱큼

//   // a<b 경우
//   b와 c 비교

//     // b>c 경우
//       -- b가 짱큼
//     // b<c 경우
//       -- c가 짱큼

// 3.
const number = 3;
console.log(number % 2 == 0 ? "even" : "odd");

// 4.
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please log in");

// 5.
const age = 99;
console.log(age >= 18 ? "Adult" : "Minor");
