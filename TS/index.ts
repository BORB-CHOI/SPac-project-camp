// type TUser = {
//   name: string;
//   age: number;
// };

// const user1: TUser = {
//   name: "kim",
//   age: 20,
// };

// function printUserName({ name, age }: TUser) {
//   console.log(name, age);
// }

// printUserName(user1);

// const firstElements = <T>(elements: T[]): T => {
//   return elements[0];
// };

// console.log(firstElements<number>([1, 2, 3]));
// console.log(firstElements<string>(["a", "b", "c"]));
// console.log(firstElements<boolean>([true, false]));

// type TCar<T> = {
//   name: string;
//   options: T;
// };

// const car1: TCar<string> = {
//   name: "car1",
//   options: "auto",
// };

// const car2: TCar<string[]> = {
//   name: "car2",
//   options: ["auto", "sunroof"],
// };

const getlength = <T extends { length: number }>(item: T): void =>
  console.log(item);

console.log(getlength<number[]>([1, 2, 3]));
console.log(getlength<string[]>(["a", "b", "c"]));
console.log(getlength<string>("a"));
// console.log(getlength<number>(1));
