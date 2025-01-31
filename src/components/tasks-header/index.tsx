import { withSkeleton } from "@/components/hoc/WithSkeleton";
import { BaseTasksHeader } from "@/components/tasks-header/BaseTasksHeader";
import { TaskHeaderSkeleton } from "@/components/tasks-header/TaskHeaderSkeleton";

export const TasksHeader = withSkeleton(BaseTasksHeader, {
  SkeletonComponent: TaskHeaderSkeleton,
  loadingDelay: 1000,
});
