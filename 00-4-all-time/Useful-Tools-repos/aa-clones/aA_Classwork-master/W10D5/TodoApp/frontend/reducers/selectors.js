import React from 'react';

export const allTodos = (state) => {
  return Object.values(state.todos)
};