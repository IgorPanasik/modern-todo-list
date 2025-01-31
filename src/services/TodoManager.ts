import { Todo } from "@/types/todo";
import { TabType } from "@/utils/tabs";
import { v4 } from "uuid";

export interface ITodoManager {
  addTodo: (input: string) => void;
  doneTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearTodosAll: () => void;
  getTodos: () => Todo[];
  getFilteredTodos: (filter: TabType) => Todo[];
  getCountByTab: (tab: TabType) => number;
  hasTodos: () => boolean;
  getOpenCount: () => number;
  updateTodo: (id: string, input: string, complete: boolean) => void;
}

export class TodoManager implements ITodoManager {
  private cache: Map<TabType, Todo[]>;

  constructor(
    private readonly todos: Todo[],
    private readonly setTodos: (todos: Todo[]) => void
  ) {
    this.cache = new Map();
  }

  updateCache(): void {
    this.cache.clear();
  }

  private validateTodo(input: string): boolean {
    return input.trim().length > 0;
  }

  addTodo(input: string): void {
    if (!this.validateTodo(input)) {
      throw new Error("Todo input cannot be empty");
    }
    const newTodo = { id: v4(), input, complete: false };
    const newTodos = [...this.todos, newTodo];
    this.updateCache();
    this.setTodos(newTodos);
  }

  doneTodo(id: string): void {
    if (!id) {
      throw new Error("Todo ID is required");
    }

    const newTodos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    this.updateCache();
    this.setTodos(newTodos);
  }

  deleteTodo(id: string): void {
    if (!id) {
      throw new Error("Todo ID is required");
    }

    try {
      this.updateCache();
      const newTodos = this.todos.filter((todo) => todo.id !== id);
      this.setTodos(newTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  clearTodosAll(): void {
    this.updateCache();
    this.setTodos([]);
  }

  getTodos(): Todo[] {
    return [...this.todos];
  }

  getFilteredTodos(filter: TabType): Todo[] {
    if (this.cache.has(filter)) {
      return this.cache.get(filter)!;
    }

    const filteredTodos = (() => {
      switch (filter) {
        case "Completed":
          return this.todos.filter((todo) => todo.complete);
        case "Open":
          return this.todos.filter((todo) => !todo.complete);
        default:
          return this.todos;
      }
    })();

    this.cache.set(filter, filteredTodos);
    return filteredTodos;
  }

  getCountByTab(tab: TabType): number {
    return this.getFilteredTodos(tab).length;
  }

  hasTodos() {
    return this.todos.length > 0;
  }

  getCompletedCount(): number {
    return this.getFilteredTodos("Completed").length;
  }

  getOpenCount(): number {
    return this.getFilteredTodos("Open").length;
  }

  updateTodo(id: string, input: string, complete: boolean) {
    if (!this.validateTodo(input)) {
      throw new Error("Todo input cannot be empty");
    }

    const newTodos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, input: input.trim(), complete: false } : todo
    );

    this.updateCache();
    this.setTodos(newTodos);
  }
}
