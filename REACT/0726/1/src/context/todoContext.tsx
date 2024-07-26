import { createContext, useState } from "react";

type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TTodoContext = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
};

export const TodoContext = createContext<TTodoContext>({
  todos: [],
  setTodos: () => {},
});

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
