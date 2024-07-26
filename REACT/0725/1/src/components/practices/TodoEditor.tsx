import Button from "../html/Button";
import Input from "../html/Input";
import { ITodo } from "../../types";

type TTodoEditerProps = {
  todos: ITodo[];
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
};

const TodoEditor = ({ todos, text, setText, setTodos }: TTodoEditerProps) => {
  const addTodo = (text: string) => {
    const newTodos = [...todos, { id: Date.now(), text, isCompleted: false }];
    setTodos(newTodos);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
  };
  return (
    <form action="" className="grid gap-4" onSubmit={onSubmitHandler}>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter Todo List"
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
        >
          Add
        </Button>
      </div>
    </form>
  );
};
export default TodoEditor;
