import { ITodo } from "../../types";
import TodoListItem from "./TodoListItem";

type TTodoListProps = {
  todos?: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
};

const TodoList = ({ todos, setTodos }: TTodoListProps) => {
  return (
    <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
      {todos?.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
};
export default TodoList;
