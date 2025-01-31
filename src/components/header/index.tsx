import { BaseHeader } from "@/components/header/BaseHeader";
import { HeaderSkeleton } from "@/components/header/HeaderSkeleton";
import { withSkeleton } from "@/components/hoc/WithSkeleton";

export const Header = withSkeleton(BaseHeader, {
  SkeletonComponent: HeaderSkeleton,
  loadingDelay: 1000,
});
