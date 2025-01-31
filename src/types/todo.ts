export type Todo = {
  id: string;
  input: string;
  complete: boolean;
};

export enum ButtonVariant {
  EDIT = "edit",
  TOGGLE = "toggle",
  DELETE = "delete",
}
