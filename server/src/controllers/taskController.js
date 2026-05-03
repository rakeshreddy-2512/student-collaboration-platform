import Task from '../models/Task.js';

export const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

export const listTasks = async (req, res) => {
  const filter = req.query.project ? { project: req.query.project } : {};
  const tasks = await Task.find(filter).populate('assignee', 'name').populate('project', 'title');
  res.json(tasks);
};
