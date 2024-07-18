// const promise = new Promise((resolve, reject) => {
//   console.log("doing something...");

//   const isSuccess = true;

//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("success!");
//     } else {
//       reject(new Error("fail!"));
//     }
//   }, 2000);
// });

// promise
//   .then(
//     (value) => console.log(value),
//     (error) => console.error(error)
//   )
//   .finally(() => console.log("finally")); // 성공하든 실패하든 무조건 실행됨

// console.log("hello");

// /////////////////////////////////////////////

// const fetchNumber = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// fetchNumber() //
//   .then((num) => console.log(num));

// fetchNumber() //
//   .then((num) => new Promise((resolve, reject) => resolve(num * 2)))
//   .then((num) => num * 3) // 6 promise resolve(6);
//   .then((num) => num * 6); // 36 promise resolve(36);

// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("task1");
//       resolve();
//     }, 1000);
//   });
// }
// function task2() {
//   return new Promise((resolve) => {
//     console.log("task2");
//     resolve();
//   });
// }

// function task3() {
//   return new Promise((resolve) => {
//     console.log("task3");
//     resolve();
//   });
// }
// function task4() {
//   return new Promise((resolve) => {
//     console.log("task4");
//     resolve();
//   });
// }

// task1(() => task2())
//   .then(() => task3())
//   .then(() => task4())
//   .then(() => console.log("done!"));

// task1().then(task2).then(task3).then(task4);

////////////////////////////////////////////////////////////////////////////////////

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSunIcon = async () => {
  await delay(1000);
  return "🫥";
};

const getSunIcon2 = async () => {
  await delay(1000);
  return "🫥";
};

const getSunIcon3 = async () => {
  await delay(1000);
  return "🫥";
};

const getAllIcon = async () => {
  console.time();
  Promise.all([getSunIcon(), getSunIcon2(), getSunIcon3()]).then((icons) => {
    console.log(icons);
  });
  console.timeEnd();
};

const getAllIcon2 = async () => {
  console.time();

  const icons = Promise.all([getSunIcon(), getSunIcon2(), getSunIcon3()]);

  console.log(icons);

  console.timeEnd();
};

const getAllIcon3 = async () => {
  console.time();

  const icons = await Promise.allSettled([
    getSunIcon(),
    getSunIcon2(),
    getSunIcon3(),
  ]);

  console.log(
    icons
      .filter((icon) => icon.status === "fulfilled")
      .map((icon) => icon.value)
      .join(",")
  );

  console.timeEnd();
};

getAllIcon();
getAllIcon2();
getAllIcon3();
