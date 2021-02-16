import React from 'react';

const TodoListItem = (props) => {
  return (
    <li>
      {props.todo.title}: {props.todo.body}
    </li>
  )
}

export default TodoListItem;