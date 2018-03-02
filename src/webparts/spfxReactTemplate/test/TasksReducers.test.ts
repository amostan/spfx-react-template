/// <reference types="mocha" />

import { assert, expect } from 'chai';

import { ActionTypes, Action } from '../actions/Actions';
import ITaskItem from '../models/ITaskItem';
import { tasks } from '../reducers/TaskReducers';

describe('Tasks Reducers', () => {

  it('Get Tasks', () => {
    const state: ITaskItem[] = [
      {
        Id: 1,
        Title: "test task 1",
        PercentComplete: 20
      }
    ];
    const action: Action = {
      type: ActionTypes.GET_TASKS_SUCCESS,
      payload: [
        {
          Id: 1,
          Title: "test task 1",
          PercentComplete: 20
        },
        {
          Id: 2,
          Title: "test task 2",
          PercentComplete: 35
        }
      ]
    };

    const result = tasks(state, action);

    expect(result).to.have.length(2);
  });

});