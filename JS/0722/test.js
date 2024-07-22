// 얕은 복사
const user1 = { name: "kim", age: 20 };
const user2 = user1;

console.log(user1 === user2); // true
// 깊은 복사

const user22 = { ...user1 };

console.log(user1 === user22); // false

const combined = { ...user1, ...user2 }; // 속성이 같은 두 객체를 병합하는 경우 뒤에 있는 객체의 속성으로 덮어씌워짐
