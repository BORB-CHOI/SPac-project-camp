// 1.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2.
let numArr = [10, -10, 20, -30, 40];
let sumNum = 0;
for (value of numArr) {
  value > 0 ? (sumNum += value) : sumNum;
}
console.log(sumNum);

// 3.
for (let i = 0; i < 16; i++) {
  i % 2 === 0 ? console.log(i, "짝수") : console.log(i, "홀수");
}

// 4.
for (let i = 100; i < 1000; i++) {
  const numStrArray = String(i).split("");
  let sum = 0;
  for (numChar of numStrArray) {
    sum += Math.pow(numChar, 3);
  }
  if (sum === i) console.log(i);
}
