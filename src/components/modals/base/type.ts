import { ReactNode } from "react";

export interface IBaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export interface IModalButtonProps {
  variant: "save" | "cancel" | "confirm";
  onClick: () => void;
  tooltipContent: string;
  children: ReactNode;
}

export enum MODAL_KEYS {
  ESCAPE = "Escape",
  ENTER = "Enter",
}
