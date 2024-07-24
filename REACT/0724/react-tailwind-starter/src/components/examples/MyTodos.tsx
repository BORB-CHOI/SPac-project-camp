import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../html/Button";
import Input from "../html/Input";
import CheckBox from "../html/CheckBox";

type TTodosType = {
  id: number;
  text: string;
  checked: boolean;
};

const Todo = () => {
  // 1. 할 일을 담을 수 있는 상태 값을 만들고, 그 값에 입력 요소의 값을 추가
  // 1.1 []
  // 2. 할 일을 담은 데이터를 가지고 반복문으로 li 태그를 반복문 출력.
  // 3. 삭제 버튼을 누르면, 해당 할 일을 삭제하는 기능을 추가.
  // 3.1 함 일을 담고 있는 데이터에서 지우라는 것.
  // 4. 할 일을 담고 있는 데이터가 개별적으로 체크 유무를 관리하고 있어야 함.

  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TTodosType[]>([]);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        text,
        checked: false,
      },
    ]);
  };

  const onDeleteHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onToggleHandler = (todo: TTodosType) => {
    setTodos((prev) => {
      return prev.map((cntTodo) =>
        cntTodo.id === todo.id
          ? { ...cntTodo, checked: !cntTodo.checked }
          : cntTodo
      );
    });
  };

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
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
          {/* 목록 */}
          <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
            {todos.map((todo) => (
              <li
                className="flex items-center justify-between border border-[#4F4F4F] h-[44px] px-[15px] rounded-lg bg-[rgba(53,56,62,0.05)] select-none shrink-0"
                key={todo.id}
              >
                <CheckBox
                  checked={todo.checked}
                  onToggle={() => onToggleHandler(todo)}
                >
                  <span
                    className={twMerge(
                      "text-[#35383E]",
                      todo.checked && "line-through"
                    )}
                  >
                    {todo.text}
                  </span>
                </CheckBox>
                <Button
                  className="border border-[#4f4f4f] rounded w-[23px] h-[23px] flex justify-center items-center"
                  onClick={() => onDeleteHandler(todo.id)}
                >
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                      fill="#4F4F4F"
                    />
                    <path
                      d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Todo;
