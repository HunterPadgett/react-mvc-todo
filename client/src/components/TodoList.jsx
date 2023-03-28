import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import axios from "axios";

function TodoList() {
 const [todos, setTodos] = useState([]);

 useEffect(() => {
  fetch("http://localhost:2121/myTodos")
   .then((response) => {
    if (!response.ok) {
     throw new Error("Network response was not ok");
    }
    return response.json();
   })
   .then((data) => {
    console.log(data);
    setTodos(data);
   })
   .catch((error) => console.error(error));
 }, []);

 console.log(todos);

 return (
  <ul>
   {todos.map((todo) => (
    <li key={todo._id}>{todo.todo}</li>
   ))}
  </ul>
 );
}

export default TodoList;
