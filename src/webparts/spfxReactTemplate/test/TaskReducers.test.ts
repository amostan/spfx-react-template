/// <reference types="mocha" />

import { assert, expect } from 'chai';

import { ActionTypes, Action } from '../actions/Actions';
import ITaskItem from '../models/ITaskItem';
import { task } from '../reducers/TaskReducers';

describe('Task Reducers', () => {

  it('Add Task', () => {
    const state = {};
    const action: Action = {
      type: ActionTypes.ADD_TASK_SUCCESS,
      payload: {
        Id: 1,
        Title: "test",
        PercentComplete: 30
      }
    };

    const result = task(state, action);

    assert.deepEqual(result, {
      Id: 1,
      Title: "test",
      PercentComplete: 30
    });
    
    // alternative testing method
    // expect(result).to.deep.equal({
    //     Id: 1,
    //     Title: "test",
    //     PercentComplete: 30
    //   });
  });

  it('Edit Task', () => {
    const state = {
      Id: 1,
      Title: "test task 1",
      PercentComplete: 20
    };
    const action: Action = {
      type: ActionTypes.EDIT_TASK_SUCCESS,
      payload: {
        Id: 1,
        Title: "test task one",
        PercentComplete: 30
      }
    };

    const result = task(state, action);

    assert.deepEqual(result, {
      Id: 1,
      Title: "test task one",
      PercentComplete: 30
    });
  });

});