///////////////////////////// 콜백함수 //////////////////////////////

// function pending(callback) {
//   // 이 위치에 들어오는 함수를 콜백함수라 부른다.
//   console.log("작업 대기 시작");
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// function task1(callback) {
//   console.log("task1 시작");
//   callback();
//   return "ddd";
// }

// function task2(callback) {
//   console.log("task2 시작");
//   callback();
// }

// function task3(callback) {
//   console.log("task3 시작");
//   callback();
// }

// function task4(callback) {
//   console.log("task4 시작");
//   callback();
// }

// function task5(callback) {
//   console.log("task5 시작");
//   callback();
// }

// // pending(task()); // 이렇게 하면 그냥 함수를 실행시켜버린다. 인자로 넘기려면 아래와 같이 해야 한다.

// pending(() => {
//   task1(() => {
//     task2(() => {
//       task3(() => {
//         task4(() => {
//           task5(() => {
//             console.log("작업 완료");
//           });
//         });
//       });
//     });
//   });
// });

///////////////////////////// Promise //////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   console.log("프로미스 시작");
//   setTimeout(() => {
//     resolve("성공");
//   }, 500);
// });

// promise //
//   .then((num) => {
//     console.log(num);
//     return num * 2;
//   })
//   .then((num) => new Promise((_, reject) => reject())) // 에러가 발생하면 이후의 then은 실행되지 않는다. 바로 catch로 넘어간다.
//   .then((num) => console.log(num))
//   .catch((error) => console.log(error));

///////////////////////////// Promise Then //////////////////////////////

// function pending() {
//   return new Promise((resolve) => {
//     console.log("작업 대기 시작");
//     setTimeout(() => {
//       console.log("작업 시작");
//       resolve();
//     }, 500);
//   });
// }

// function task1() {
//   new Promise((resolve) => {
//     console.log("task1 시작");
//     resolve();
//   });
// }

// function task2() {
//   new Promise((resolve) => {
//     console.log("task2 시작");
//     resolve();
//   });
// }

// function task3() {
//   new Promise((resolve) => {
//     console.log("task3 시작");
//     resolve();
//   });
// }

// function task4() {
//   new Promise((resolve) => {
//     console.log("task4 시작");
//     resolve();
//   });
// }

// function task5() {
//   new Promise((resolve) => {
//     console.log("task5 시작");
//     resolve();
//   });
// }

// pending() //
//   .then(() => task1())
//   .then(() => task2())
//   .then(() => task3())
//   .then(() => task4())
//   .then(() => task5())
//   .then(() => console.log("작업 완료"));

///////////////////////////// async await //////////////////////////////

// const task1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("task1 완료");
//     }, 500);
//   });
// };

// task1() //
//   .then((msg) => console.log(msg));

// // async는 함수를 Promise를 리턴할 수 있게 해준다.
// const task1 = async () => "task1 완료";

// task1() //
//   .then((msg) => console.log(msg));

// // async는 비동기 작업을 기다려주는 역할을 하지 않는다. 그저 Promise를 리턴할 수 있게 해줄 뿐이다. 그래서 await를 사용해야 한다. await를 해야 비동기 작업을 기다려준다.

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const task1 = async () => {
//   delay(1000);
//   return "task1 완료";
// };

// task1() //
//   .then((msg) => console.log(msg));

// /// await는 기다렸다가 작업을 실행하기 위해 있는 비동기 함수이다. async 함수 안에서만 사용할 수 있다.

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const task1 = async () => {
//   await delay(1000);
//   return "task1 완료";
// };

// task1() //
//   .then((msg) => console.log(msg));

//////////////////////////////////////////////////////////////////////////////

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function pending() {
//   console.log("작업 준비 시작");
//   await delay(1000);
//   return "작업 준비 완료";
// }
// const task1 = async () => "task1 시작";
// const task2 = async () => "task2 시작";
// const task3 = async () => "task3 시작";
// const task4 = async () => "task4 시작";
// const task5 = async () => "task5 시작";

// const startTasks = async () => {
//   const pendingMsg = await pending();
//   const msg1 = await task1();
//   const msg2 = await task2();
//   const msg3 = await task3();
//   const msg4 = await task4();
//   const msg5 = await task5();

//   console.log(pendingMsg, msg1, msg2, msg3, msg4, msg5); // 순서는 보장될테니 이렇게 작성해도 똑같은 코드가 된다.
//   console.log("작업 완료");
// };

// startTasks();

//////////////////////////////////////////////////////////////////////////////

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function pending() {
  console.log("작업 준비 시작");
  await delay(1000);
  return "작업 준비 완료";
}
const task1 = async () => {
  await delay(1000);
  return "task1 시작";
};

const task2 = async () => {
  await delay(1000);
  return "task2 시작";
};

const startTasks = async () => {
  console.time("작업 시간");

  // 먼저 병렬로 처리 후
  const pendingPromise = pending();
  const task1Promise = task1();
  const task2Promise = task2();

  // 순차적으로 처리한다.
  const pendingMsg = await pendingPromise;
  const msg1 = await task1Promise;
  const msg2 = await task2Promise;

  console.log(pendingMsg, msg1, msg2);
  console.log("작업 완료");
  console.timeEnd("작업 시간");
};

startTasks();
