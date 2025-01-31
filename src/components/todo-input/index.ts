import { withSkeleton } from "../hoc/WithSkeleton";
import { BaseTodoInput } from "./BaseTodoInput";
import { TodoInputSkeleton } from "./TodoInputSkeleton";

export const TodoInput = withSkeleton(BaseTodoInput, {
  SkeletonComponent: TodoInputSkeleton,
  loadingDelay: 1000,
});
