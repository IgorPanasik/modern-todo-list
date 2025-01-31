import { ITodoManager, TodoManager } from "@/services/TodoManager";
import { Todo } from "@/types/todo";
import { useEffect, useRef } from "react";

export const useTodoManager = (
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
): ITodoManager => {
  const managerRef = useRef<TodoManager | null>(null);

  if (!managerRef.current || todos !== managerRef.current.getTodos()) {
    managerRef.current = new TodoManager(todos, setTodos);
  }

  useEffect(() => {
    return () => {
      if (managerRef.current) {
        managerRef.current.updateCache();
      }
    };
  }, []);

  return managerRef.current;
};
