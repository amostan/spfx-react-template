import { ActionTypes, Action } from '../actions/Actions';
import ITaskItem from '../models/ITaskItem';
import IState from '../models/IState';

export const task = (state: any, action: Action ) => {
  switch(action.type) {
    case ActionTypes.ADD_TASK_SUCCESS:
      return {
        Id: action.payload.Id,
        Title: action.payload.Title,
        PercentComplete: action.payload.PercentComplete
      };
    case ActionTypes.EDIT_TASK_SUCCESS:
      return (state.Id !== action.payload.Id) ?
        state :
        {
          Id: action.payload.Id,
          Title: action.payload.Title,
          PercentComplete: action.payload.PercentComplete
        }     
    default:
      return state;
  }
};

export const tasks = (state: ITaskItem[], action: Action): ITaskItem[] => {
  switch(action.type) {
    case ActionTypes.GET_TASKS_SUCCESS:
      return [
        ...action.payload
      ];
    case ActionTypes.REMOVE_TASK_SUCCESS:
      return state;
    default:
      return state;
  }
};