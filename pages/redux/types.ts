import { IInitialState } from "./todos/types";
import { IInitialState as IInitialStateFilter } from "./filter/types";

export interface IRootState {
  todos: IInitialState;
  filter: IInitialStateFilter;
}
