import ITaskItem from '../models/ITaskItem';
import IAppState from '../models/IAppState';
import ISpfxReactTemplateWebPartProps from '../ISpfxReactTemplateWebPartProps';

export const initialWebPartProps: ISpfxReactTemplateWebPartProps = {
  listName: ""
};

export const initialTaskState: ITaskItem = {
  Id: null,
  Title: "",
  PercentComplete: 0
};

export const initialAppState: IAppState = {
  webPartProps: initialWebPartProps,
  tasks: [],
  sort: "SORTED_BY_TITLE",
  isLoading: false,
  isError: false,
  errors: []
};