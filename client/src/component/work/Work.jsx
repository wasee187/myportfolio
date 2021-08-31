import './work.css';

function Work({ projects }) {
  const PF = 'http://localhost:5000/images/';
  return (
    <div className='section my-work' id='work'>
      <h2 className='section-title section-title-work'>My Work</h2>
      <p className='section-subtitle section-subtitle-work'>
        Selection of my range of work
      </p>
      <div className='portfolio'>
        {projects.map((project) => (
          <a
            href={`/project/${project._id}`}
            className='portfolio_item'
            key={project._id}
          >
            <img
              src={PF + project.photo}
              alt='reactApp'
              className='portfolio-img'
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Work;
