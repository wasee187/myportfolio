import './login.css';
import { useState, useContext } from 'react';
import { Context } from '../../context/Context.js';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        email,
        password,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className='section login'>
      <div className='section-title section-title-login'>Login</div>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label className='loginLabel'>Email</label>
        <input
          type='text'
          className='loginInput'
          placeholder='Enter your email..'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='loginLabel'>Password</label>
        <input
          type='password'
          className='loginInput'
          placeholder='Enter your Password..'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='loginButton' type='submit' disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
