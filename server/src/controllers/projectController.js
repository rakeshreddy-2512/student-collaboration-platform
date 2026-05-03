import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  const project = await Project.create({ ...req.body, owner: req.user._id });
  res.status(201).json(project);
};

export const listProjects = async (_req, res) => {
  const projects = await Project.find().populate('owner', 'name email');
  res.json(projects);
};
