const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
      minLength: 5,
    },
    description: {
      type: String,
      required: true,
      maxLength: 20000,
      trim: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model('Projects', ProjectSchema);

module.exports = Project;
