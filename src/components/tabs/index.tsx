import { withSkeleton } from "@/components/hoc/WithSkeleton";
import { BaseTabs } from "@/components/tabs/BaseTabs";
import { TabsSkeleton } from "@/components/tabs/TabsSkeleton";

export const Tabs = withSkeleton(BaseTabs, {
  SkeletonComponent: TabsSkeleton,
  loadingDelay: 1000,
});
