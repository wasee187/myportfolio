import './project.css';
import React from 'react';

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

function Project() {
  const PF = 'http://localhost:5000/images/';
  const user = true;
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [project, setProject] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getProject = async () => {
      const res = await axios.get('/projects/' + path);
      setProject(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    getProject();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/projects/${project._id}`);
      window.location.replace('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/projects/${project._id}`, {
        title,
        description,
      });
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <React.Fragment>
      <div className='section intro'>
        {editMode ? (
          <input
            type='text'
            value={title}
            className='titleInput'
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className='section-title section-title-intro'>
            <strong>{project.title}</strong>{' '}
          </h1>
        )}

        <p className='section-subtitle section-subtitle-intro'>
          {project.categories}
        </p>
        <img src={PF + project.photo} alt='my pic' className='intro-img' />
      </div>

      <div className='portfolio-item-individual'>
        {editMode ? (
          <textarea
            className='descriptionInput'
            value={description}
            cols='100'
            rows='10'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        ) : (
          <p>{project.description}</p>
        )}

        {editMode && (
          <button className='projectButton' onClick={handleUpdate}>
            Update
          </button>
        )}
        <img src={PF + project.photo} alt='projectPic' className='projectPic' />

        {user && (
          <div>
            <i
              className='fas fa-pencil-alt btn-deleteBTN'
              onClick={(e) => setEditMode(true)}
            ></i>
            <i
              className='fas fa-trash btn-deleteBTN'
              onClick={handleDelete}
            ></i>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Project;
