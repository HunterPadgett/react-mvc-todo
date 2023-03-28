import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import axios from "axios";

function Todos() {
 const [todoInput, setTodoInput] = useState("");

 const handleChange = (e) => {
  setTodoInput(e.target.value);
 };

 const handleClick = async (e) => {
  e.preventDefault();

  const newNote = {
   todo: todoInput,
  };

  setTodoInput("");

  try {
   const response = await axios.post(
    "http://localhost:2121/createTodo",
    newNote
   );
   console.log(response.data);
  } catch (error) {
   console.error(error);
  }
 };

 return (
  <div className="m-5">
   <h1>Todos Page</h1>
   <form className="flex flex-col gap-4">
    <div>
     <div className="mb-2 block">
      <Label htmlFor="todo" value="What would you like to add?" />
     </div>
     <TextInput
      onChange={handleChange}
      value={todoInput}
      id="todo"
      type="text"
      placeholder="hmmm..."
      required={true}
     />
    </div>
    <Button onClick={handleClick} type="submit">
     Add
    </Button>
   </form>
  </div>
 );
}

export default Todos;
