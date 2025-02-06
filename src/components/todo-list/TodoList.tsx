import { EmptySkeleton } from "@/components/empty-state/EmptySkeleton";
import { EmptyState } from "@/components/empty-state/index";
import { TodoCard } from "@/components/todo-card/index";
import * as styles from "@/components/todo-list/_todo-list.module.scss";
import { ITodoManager } from "@/services/TodoManager";
import { TabType } from "@/utils/tabs";
import { memo, Suspense } from "react";

interface ITodoListProps {
  todoManager: ITodoManager;
  activeTab: TabType;
}

const TodoList = memo(({ todoManager, activeTab }: ITodoListProps) => {
  const filteredTodos = todoManager.getFilteredTodos(activeTab);

  if (filteredTodos.length === 0) {
    return (
      <Suspense fallback={<EmptySkeleton />}>
        <EmptyState activeTab={activeTab} />
      </Suspense>
    );
  }

  return (
    <section className={styles.todos}>
      <ul className={styles.todos__list}>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <TodoCard
              todo={todo}
              onDelete={todoManager.deleteTodo.bind(todoManager)}
              onToggle={todoManager.doneTodo.bind(todoManager)}
              onEdit={todoManager.updateTodo.bind(todoManager)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
});

TodoList.displayName = "TodoList";
export default TodoList;
