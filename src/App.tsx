import { Footer } from "@/components/footer/index";
import { Header } from "@/components/header/index";
import { ConfirmDeleteModal } from "@/components/modals/confirm-delete-modal/ConfirmDeleteModal";
import { ScrollToUp } from "@/components/scroll-to-up/ScrollToUp";
import { Tabs } from "@/components/tabs/index";
import { TasksHeader } from "@/components/tasks-header/index";
import { TodoInput } from "@/components/todo-input/index";
import { TodoList } from "@/components/todo-list/TodoList";
import "@/global.scss";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import { useTodoManager } from "@/hooks/useTodoManager";
import i18n from "@/i18n";
import { Todo } from "@/types/todo";
import { TabType } from "@/utils/tabs";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";

export const App = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [activeTab, setActiveTab] = useState<TabType>("All");
  const todoManager = useTodoManager(todos, setTodos);
  const modal = useModal();

  return (
    <I18nextProvider i18n={i18n}>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <TasksHeader todoManager={todoManager} onOpenModal={modal.open} />
          <Tabs
            todoManager={todoManager}
            onTabChange={setActiveTab}
            activeTab={activeTab}
          />
          <TodoInput onAddTodo={(input) => todoManager.addTodo(input)} />
          <TodoList todoManager={todoManager} activeTab={activeTab} />
          <ScrollToUp />
        </main>
        <Footer />
        <ConfirmDeleteModal
          todoManager={todoManager}
          isOpen={modal.isOpen}
          onClose={modal.close}
        />
      </div>
    </I18nextProvider>
  );
};
