import { withSkeleton } from "@/components/hoc/WithSkeleton";
import BaseTodoCard from "@/components/todo-card/BaseTodoCard";
import { TodoCardSkeleton } from "@/components/todo-card/TodoCardSkeleton";

export const TodoCard = withSkeleton(BaseTodoCard, {
  SkeletonComponent: TodoCardSkeleton,
  loadingDelay: 1000,
});
