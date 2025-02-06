export type Todo = {
  id: string;
  input: string;
  complete: boolean;
  createdAt: string;
};

export enum ButtonVariant {
  EDIT = "edit",
  TOGGLE = "toggle",
  DELETE = "delete",
}
