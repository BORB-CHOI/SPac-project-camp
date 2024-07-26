let todos = [{ id: 1, text: "아침먹기", isCompleted: false }];

const addTodo = (text) => {
  const newTodo = {
    id: todos.length + 1,
    text,
    isCompleted: false,
  };
  // todos.push(newTodo);
  todos = [...todos, newTodo];
};

// ES6에는 새로운 배열들 만들어주는 내장 메서드가 있다.
// map, filter
const toggleTodo = (id) => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
  );
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

addTodo("점심먹기");
console.log(todos);

toggleTodo(2);
console.log(todos);

deleteTodo(1);
console.log(todos);
