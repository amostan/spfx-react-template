import ITaskItem from '../models/ITaskItem';
import ISpfxReactTemplateWebPartProps from '../ISpfxReactTemplateWebPartProps';

export enum ActionTypes {
  UPDATE_WEBPARTPROPS,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  EDIT_TASK_REQUEST,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_ERROR,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_ERROR,
  SORT_TASKS,
  SET_LOADING,
  UNSET_LOADING,
  ADD_ERRORS,
  CLEAR_ERRORS
}

export type Action =
 { type: ActionTypes.UPDATE_WEBPARTPROPS, payload: ISpfxReactTemplateWebPartProps } |
 { type: ActionTypes.ADD_TASK_REQUEST } |
 { type: ActionTypes.ADD_TASK_SUCCESS, payload: ITaskItem } |
 { type: ActionTypes.ADD_TASK_ERROR, isError: boolean, errors: string[] } |
 { type: ActionTypes.GET_TASKS_REQUEST } |
 { type: ActionTypes.GET_TASKS_SUCCESS, payload: ITaskItem[] } |
 { type: ActionTypes.GET_TASKS_ERROR, isError: boolean, errors: string[] } |
 { type: ActionTypes.EDIT_TASK_REQUEST } |
 { type: ActionTypes.EDIT_TASK_SUCCESS, payload: ITaskItem } |
 { type: ActionTypes.EDIT_TASK_ERROR, isError: boolean, errors: string[] } |
 { type: ActionTypes.REMOVE_TASK_REQUEST } |
 { type: ActionTypes.REMOVE_TASK_SUCCESS, id: number } |
 { type: ActionTypes.REMOVE_TASK_ERROR, isError: boolean, errors: string[] } |
 { type: ActionTypes.SORT_TASKS, sortBy: string } |
 { type: ActionTypes.SET_LOADING, isLoading: boolean } |
 { type: ActionTypes.UNSET_LOADING, isLoading: boolean } |
 { type: ActionTypes.ADD_ERRORS, payload: string[] } |
 { type: ActionTypes.CLEAR_ERRORS, payload: string[] } ;