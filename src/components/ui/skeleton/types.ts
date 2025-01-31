import { CSSProperties } from "react";

export interface ISkeletonProps {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  className?: string;
  style?: CSSProperties;
}
