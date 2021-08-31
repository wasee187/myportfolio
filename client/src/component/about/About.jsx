import './about.css';

function About() {
  return (
    <div className='section about-me' id='about'>
      <h2 className='section-title section-title-about'>About Me</h2>
      <p className='section-subtitle section-subtitle-about'>
        Web Developer based on Dhaka
      </p>
      <div className='about-me-body'>
        <p className='about-me-p1'>
          Hello, I am Mohammad Wasee Sarwar and I'm a passionate Web Developer
          using web technologies to build amazing products and focusing on
          solving problems for different niches and different industries using
          the power of technology.
        </p>
        <p className='about-me-p2'>
          I will love to hear from you. Whether is a project, job opportunity,
          or just chat. Please feel free to contact me.
        </p>
      </div>
      <img src='/images/mtself2.jpg' alt='my pic' className='about-me-img' />
    </div>
  );
}

export default About;
