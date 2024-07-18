const strCompressor = (str = "") => {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      answer += str[i];
    }
  }

  return answer;
};

console.log(strCompressor("aaabbbaaabbbaaabbb")); // asasasa

///////////////////////////////////////////

const gugudan = function (j) {
  for (i = 0; i < 10; i++) {
    console.log(`${j} * ${i} = ${i * j}`);
  }
};
gugudan(4);
