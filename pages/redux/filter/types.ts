export interface IInitialState {
  status?: string;
  colors: Array<string>;
  changeType?: boolean;
}

export interface IPayload {
  color?: string;
  status?: string;
  changeType?: string;
}
export interface IAction {
  type: string;
  payload: IPayload;
}
