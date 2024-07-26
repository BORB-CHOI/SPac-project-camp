// import Todo from "./components/todo-series/todo_context/Todo";
// import { TodoContextProvider } from "./context/todoContext";
// import Todo from "./components/todo-series/todo_props/Todo"; // todo_props
// import Todo from "./components/todo-series/todo_props_memo/Todo"; // todo_props + memoization
// import Todo from "./components/todo-series/todo_reducer/Todo"; // todo + reducer + memoization

import Todo from "./components/todo-series/todo_zustand/Todo";

const App = () => {
  return (
    <>
      <Todo />
    </>
  );
};
export default App;
