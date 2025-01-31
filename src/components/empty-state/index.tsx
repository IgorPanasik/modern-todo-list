import { BaseEmptyState } from "@/components/empty-state/BaseEmptyState";
import { EmptySkeleton } from "@/components/empty-state/EmptySkeleton";
import { withSkeleton } from "@/components/hoc/WithSkeleton";

export const EmptyState = withSkeleton(BaseEmptyState, {
  SkeletonComponent: EmptySkeleton,
  loadingDelay: 1000,
});
