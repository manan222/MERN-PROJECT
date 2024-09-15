const TaskService = require("../services/task-service");

const addTask = async (req, res, next) => {
  console.log("add task function called---->");
  const { title, description, priority, status, deadline } = req.body;
  console.log('request body at backend', title, description, priority, status, deadline);
  const result = await TaskService.addTask(title, description, priority, status, deadline);
  if (result?.error) {
    return res.send({ message: error })
  }
  else {
    console.log('result at backend', result);
    return res.status(201).json(result);
  }
};

const getTasks = async (req, res, next) => {
  console.log("get tasks function called---->");
  const result = await TaskService.getTasks();
  if (result?.error) {
    return res.send({ message: error })
  }
  else {
    console.log('result at backend', result);
    return res.status(201).json(result);
  }
};
const getTask = async (req, res, next) => {
  console.log("get tasks function called---->");
  const { id } = req.params;
  const result = await TaskService.getTask(id);
  if (result?.error) {
    return res.send({ message: error })
  }
  else {
    console.log('result at backend', result);
    return res.status(201).json(result);
  }
};

const updateTask = async (req, res, next) => {
  console.log("update task function called---->");
  const { title, description, priority, status, deadline } = req.body;
  const { id } = req.params;
  console.log('request body at backend', title, description, priority, status, deadline, id);
  const result = await TaskService.updateTask(title, description, priority, status, deadline, id);
  if (result?.error) {
    return res.send({ message: error })
  }
  else {
    console.log('result at backend', result);
    return res.status(201).json(result);
  }
};

const deleteTask = async (req, res, next) => {
  console.log("get tasks function called---->");
  const { id } = req.params;
  const result = await TaskService.deleteTask(id);
  if (result?.error) {
    return res.send({ message: error })
  }
  else {
    console.log('result at backend', result);
    return res.status(201).json(result);
  }
};

module.exports = {
  addTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
