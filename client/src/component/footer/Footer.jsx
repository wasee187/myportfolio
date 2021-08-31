import './footer.css';

function Footer() {
  return (
    <div className='section footer'>
      <i className='fas fa-envelope socialIcon-list-item'></i>
      <a href='mailto:waseesarwar187@gmail.com' className='footer-link'>
        waseesarwar187@gmail.com
      </a>
      <ul className='footer-socialIcon-list'>
        <li className='socialIcon-list-item'>
          <a
            href='https://www.facebook.com/wasee.sarwar'
            className='socialIcon-link'
          >
            <i className='fab fa-facebook'></i>
          </a>
        </li>
        <li className='socialIcon-list-item'>
          <a
            href='https://www.instagram.com/_w_a_s_e_e_/'
            className='socialIcon-link'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </li>
        <li className='socialIcon-list-item'>
          <a href='https://github.com/wasee187' className='socialIcon-link'>
            <i className='fab fa-github-alt'></i>
          </a>
        </li>
        <li className='socialIcon-list-item'>
          <a
            href='https://www.linkedin.com/in/wasee-sarwar-384bb999/'
            className='socialIcon-link'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
