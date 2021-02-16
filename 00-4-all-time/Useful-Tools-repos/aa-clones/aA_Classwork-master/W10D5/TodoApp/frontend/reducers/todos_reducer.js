import React from 'react';
import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "buy gf anniversary gift",
    body: "ASAP --- NOT DONE",
    done: false
  },
  2: {
    id: 2,
    title: "ask gf to buy coconut rolls from costco",
    body: "--- DONE",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      const newStore = {};
      action.todos.forEach(todo => {
        newStore[todo.id] = todo;
      });
      return newStore;
    case RECEIVE_TODO:
      const newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;

