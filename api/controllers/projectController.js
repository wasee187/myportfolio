const { findByIdAndUpdate } = require('../models/project');
const Project = require('../models/project');

//post project controller
const newProjectController = async (req, res) => {
  const project = new Project(req.body);
  try {
    const savedProject = await project.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//get single project controller
const getSingleProjectController = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(200).json(err.message);
  }
};

//edit project controller
const updateProjectController = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//delete project
const deleteProjectController = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json('Project has been deleted');
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//get all project
const getAllProjectController = async (req, res) => {
  let projects;
  try {
    projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
module.exports = {
  newProjectController,
  getSingleProjectController,
  updateProjectController,
  deleteProjectController,
  getAllProjectController,
};
