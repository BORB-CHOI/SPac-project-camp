import { create } from "zustand";

type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TTodoStore = {
  todos: TTodo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const useTodoStore = create<TTodoStore>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, isCompleted: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: [
        ...state.todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      ],
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    })),
}));
