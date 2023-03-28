import { useState } from "react";
import {} from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todos from "./components/Todos";

function App() {
 return (
  <Router>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/todos" element={<Todos />}></Route>
   </Routes>
  </Router>
 );
}

export default App;
