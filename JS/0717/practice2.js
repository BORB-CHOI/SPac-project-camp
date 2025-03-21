// Q1
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
// 매개변수는 양수라고 가정합니다.

const add = (...args) => {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
};
console.log(add(1, 2, 3, 25, 5, 235, 12, 253, 375, 75, 435)); // 1421

// Q2.
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.
//구현 방법은 자율입니다.
// 풀이

function anyLogic(...args) {
  let whatSum = 1;
  for (arg of args) {
    whatSum += arg;
    whatSum -= arg;
    whatSum *= arg;
    whatSum /= arg;
    whatSum += arg;
  }
  return "Perhaps : " + whatSum;
}
console.log(anyLogic(1, 2, 3, 4, 5));

function calculate(x, y, operater) {
  switch (operater) {
    case "+":
      return x + y;
    case "+":
      return x + y;
    case "+":
      return x + y;
    case "+":
      return x + y;
  }
}
console.log(calculate(1, 2, "+")); // 3

// Q3.
// 짝수와 홀수 판별하기
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.

const isEven = (num) => num % 2 == 0;
console.log(isEven(7));

// Q4. 팩토리얼 계산하기
//양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
//함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.

console.time();
const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
  // 5 * factorial(4)
  // 5 * 4 * factorial(3)
  // 5 * 4 * 3 * factorial(2)
  // 5 * 4 * 3 * 2 * factorial(1)
  // 5 * 4 * 3 * 2 * 1
};
// function factorial(num) {
//   let sum = 1;

//   for (let i = num; i > 0; i--) {
//     sum *= i;
//   }

//   return sum;
// }
console.log(factorial(4000));

console.timeEnd();
// Q5. 삼각형 넓이 계산하기
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.

const triangleArea = (base, height) => (base * height) / 2;
console.log(triangleArea(10, 5));
