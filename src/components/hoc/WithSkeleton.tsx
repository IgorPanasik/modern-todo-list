import { ISkeletonProps } from "@/components/ui/skeleton/types";
import { ComponentType, useEffect, useState } from "react";

interface IWithSkeletonOptions {
  loadingDelay?: number;
  SkeletonComponent: ComponentType<ISkeletonProps>;
  storageKey?: string;
}

export function withSkeleton<P extends object>(
  WrappedComponent: ComponentType<P>,
  {
    loadingDelay = 1000,
    SkeletonComponent,
    storageKey = "skeleton_loaded",
  }: IWithSkeletonOptions
) {
  return function WithSkeletonComponent(props: P) {
    const [isLoading, setIsLoading] = useState(() => {
      return !sessionStorage.getItem(storageKey);
    });

    useEffect(() => {
      if (isLoading) {
        const timer = setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem(storageKey, "true");
        }, loadingDelay);

        return () => clearTimeout(timer);
      }
    }, [isLoading]);

    if (isLoading) {
      return <SkeletonComponent />;
    }

    return <WrappedComponent {...props} />;
  };
}
