import ITaskItem from './ITaskItem';
import ISpfxReactTemplateWebPartProps from '../ISpfxReactTemplateWebPartProps';

export default interface IAppState {
  webPartProps: ISpfxReactTemplateWebPartProps;
  tasks: ITaskItem[];
  sort: string;
  isLoading: boolean;
  isError: boolean;
  errors: string[];
}