import './nav.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/Context';

function Nav() {
  const { user, dispatch } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const [home, setHome] = useState(false);

  useEffect(() => {
    if (path === '') {
      setHome(false);
    } else {
      setHome(true);
    }
  }, [path]);

  const handleToggle = () => {
    document.body.classList.toggle('nav-open');
  };

  const handleClick = () => {
    document.body.classList.remove('nav-open');
  };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    document.body.classList.remove('nav-open') && window.location.replace('/');
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='/images/WASEEEK.png' alt='logo' />
      </div>
      <button
        className='nav-toggle'
        aria-label='toggle navigation'
        onClick={handleToggle}
      >
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        {home ? (
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='/' className='nav__link' onClick={handleClick}>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='/' className='nav__link' onClick={handleClick}>
                My Service
              </a>
            </li>
            <li className='nav__item'>
              <a href='/' className='nav__link' onClick={handleClick}>
                About Me
              </a>
            </li>
            <li className='nav__item'>
              <a href='/' className='nav__link' onClick={handleClick}>
                My Work
              </a>
            </li>
            <li className='nav__item'>
              <a href='/' className='nav__link' onClick={handleClick}>
                Achievement
              </a>
            </li>
            {user && (
              <li className='nav__item'>
                <a href='/addNew' className='nav__link' onClick={handleClick}>
                  Add New
                </a>
              </li>
            )}
            {user && (
              <li className='nav__item'>
                <a href='/logout' className='nav__link' onClick={handleLogout}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        ) : (
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#Home' className='nav__link' onClick={handleClick}>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link' onClick={handleClick}>
                My Service
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link' onClick={handleClick}>
                About Me
              </a>
            </li>
            <li className='nav__item'>
              <a href='#work' className='nav__link' onClick={handleClick}>
                My Work
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#achievement'
                className='nav__link'
                onClick={handleClick}
              >
                Achievement
              </a>
            </li>
            {user && (
              <li className='nav__item'>
                <a href='/addNew' className='nav__link' onClick={handleClick}>
                  Add New
                </a>
              </li>
            )}
            {user && (
              <li className='nav__item'>
                <a href='/logout' className='nav__link' onClick={handleLogout}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Nav;
