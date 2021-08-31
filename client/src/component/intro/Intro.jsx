import './intro.css';

function Intro() {
  return (
    <div className='section intro' id='Home'>
      <h1 className='section-title section-title-intro'>
        Hi, I am <strong>Wasee Sarwar</strong>
      </h1>
      <p className='section-subtitle section-subtitle-intro'>Wev Developer</p>
      <img src='/images/myself.jpg' alt='my pic' className='intro-img' />
    </div>
  );
}

export default Intro;
