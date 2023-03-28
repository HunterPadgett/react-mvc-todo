import React, { useState } from "react";
// import { Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import { Label, TextInput, Button } from "flowbite-react";
// import axios from "axios";

function Todos() {
 return (
  <div className="m-5">
   <h1 className="mb-5 text-center">Todos Page</h1>
   <TodoForm />
   <TodoList />
  </div>
 );
}

export default Todos;
