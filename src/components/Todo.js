import React, { useState } from 'react';
import "./todo.css";

function TodoApp() {
  /* todos is an array that stores all the tasks */
  const [todos, setTodos] = useState([]);
  /* task is the input from the input field */
  const [task, setTask] = useState('');

  const addTodo = () => {
    /* trim function to find out whether the input from the user isnt empty */
    if (task.trim() !== '') {
      /* spread operator is used so i dont directly manipulate with the array, the new task is added to the original array */
      setTodos([...todos, { text: task, completed: false }]);
      /* clearing the input field */
      setTask('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };


  const removeTodo = (index) => {
    const newTodos = [...todos];
    /* 1 is for number f objects removed from the (copy of the) array */
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='todoApp'>
      <div className='todo-container'>
      <h1>Todo List</h1>
      <div>
        <input className='input-container'
          type="text"
          placeholder="Add a new task"
          value={task}
          /* `onChange` (event hadler attribute) is called when the input value changes - so while i am writing into the input field 
          `e` is an object of the arrow function that defines what should happen when the onChange event happens
          `e.target` refers to the input element that triggered the event
          `e.target.value` retrieves the current value of the input element*/
          onChange={(e) => setTask(e.target.value)}
        />
        <button className='add-button' onClick={addTodo}>Add</button>
      </div>
      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            {todo.completed ? <del>{todo.text}</del> : todo.text}
            <button className='remove-button' onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoApp;