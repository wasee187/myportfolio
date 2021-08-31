import './write.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Write() {
  const [allCats, setAllCats] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setAllCats(res.data);
    };
    getCats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      title,
      description,
      categories,
      link,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);

      newProject.photo = filename;

      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post('/projects', newProject);
      window.location.replace('/projects/' + res.data._id);
    } catch (err) {}
  };
  return (
    <div className='section addNewProject'>
      <h2 className='section-addNewProject-title'>New Project</h2>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt='newimage'
          className='writeImg'
        />
      )}

      <form className='addForm' onSubmit={handleSubmit}>
        <div className='addFormGroup'>
          <label htmlFor='fileInput'>
            <i className='fas fa-plus writeIcon'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            name='file'
            style={{ display: 'none' }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <select
          name='categories'
          id='categories'
          className='selectInput'
          multiple
          onChange={(e) => setCategories(e.target.value)}
        >
          {allCats.map((cat, index) => (
            <option value={cat.catName} key={index}>
              {cat.catName}
            </option>
          ))}
        </select>
        <div className='addFormGroup'>
          <textarea
            placeholder='Description...'
            type='text'
            className='writeInput writeText'
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className='addFormGroup'>
          <input
            type='text'
            placeholder='Live Link'
            className='writeInput'
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
