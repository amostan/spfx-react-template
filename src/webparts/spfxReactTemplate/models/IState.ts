import ITaskItem from './ITaskItem';

export default interface IState {
  tasks: ITaskItem[];
  sort: string;
  isLoading: boolean;
  isError: boolean;
  errors: string[];
}