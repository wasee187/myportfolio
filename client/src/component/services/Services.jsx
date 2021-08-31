import './services.css';

function Services() {
  return (
    <div className='section my-services' id='services'>
      <h2 className='section-title section-title-services'>What I do</h2>

      <div className='services'>
        <div className='service'>
          <h3>Front End</h3>
          <p>ReactJS, CSS, HTML, Bootstrap</p>
        </div>

        <div className='service'>
          <h3>Back End</h3>
          <p>NodeJS, ExpressJS, MongoDB</p>
        </div>
      </div>
      <a href='#work' className='btn'>
        My Work
      </a>
    </div>
  );
}

export default Services;
