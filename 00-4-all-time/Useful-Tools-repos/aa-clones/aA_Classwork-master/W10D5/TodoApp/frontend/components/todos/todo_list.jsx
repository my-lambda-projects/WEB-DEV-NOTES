import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {

  const todoList = props.todos.map(todo => {
    return (
      <TodoListItem key={todo.id} todo={todo}/>
      // <li>{todo.id}: {todo.title}</li>
    )
  });

  return (
    <div>
      <ul>
        {todoList}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );
}

export default TodoList;