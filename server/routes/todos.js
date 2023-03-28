const express = require("express");
const router = express.Router();
// const todosController = require("../controllers/todos");
// const { ensureAuth } = require("../middleware/auth");
const Todo = require("../models/Todo");

// router.get("/", todosController.getTodos);

router.post("/createTodo", async (req, res) => {
 try {
  await Todo.create({ todo: req.body.todo });
  console.log("todo added");
 } catch (error) {
  console.error(error);
 }
});

// router.put("/markComplete", todosController.markComplete);

// router.put("/markIncomplete", todosController.markIncomplete);

// router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
