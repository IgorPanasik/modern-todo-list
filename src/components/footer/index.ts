import { BaseFooter } from "@/components/footer/BaseFooter";
import { FooterSkeleton } from "@/components/footer/FooterSkeleton";
import { withSkeleton } from "@/components/hoc/WithSkeleton";

export const Footer = withSkeleton(BaseFooter, {
  SkeletonComponent: FooterSkeleton,
  loadingDelay: 1000,
});
