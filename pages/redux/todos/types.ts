export interface IPayload {
  todoText?: string;
  todoId?: number;
  color?: string;
}
export interface IAction {
  type: string;
  payload: IPayload;
}

export interface IInitialState {
  id: number;
  text?: string;
  completed?: boolean;
  color?: string;
  isComplete?: boolean;
}
