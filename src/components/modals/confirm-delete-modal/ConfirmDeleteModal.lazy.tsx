import { lazy } from "react";

export const LazyConfirmDeleteModal = lazy(
  () => import("./ConfirmDeleteModal")
);
