import './achievement.css';

function Achievement() {
  return (
    <div className='section achievement' id='achievement'>
      <h1 className='section-title section-title-achievement'>Achievement</h1>
      <p className='section-subtitle section-subtitle-achievement'>
        IEEE Publication
      </p>
      <div className='achievement-body'>
        <p className='achievement-p1'>
          My final year project named,{' '}
          <strong>
            A Low Cost Wireless Braille System Hand Glove for Real Time
            Communication
          </strong>{' '}
          is a prototype of braille system hand glove which helps a visually
          impaired person to communicate via hand gestures. I am responsible for
          coding, designing the hardware prototype based on coding functionality
          and also lead my team to our goal.
        </p>

        <p className='achievement-p2'>
          It was published in{' '}
          <strong>
            2019 4th International Conference on Electrical Information and
            Communication Technology (EICT)
          </strong>
        </p>
        <p className='achievement-p2'>
          Major equipment that we have used were Arduino Nano as
          micro-controller to integrate Braille System with C libraries, Slot
          sensor for hand gestures, vibration motors, bluetooth chip for
          wireless communication and matlab Graphical User Interface (GUI) for
          both of the reading and writing parts via desktop/laptop.
        </p>
      </div>

      <img
        src='/images/paper-pic.PNG'
        alt='paper'
        className='achievement-img'
      />

      <a
        href='https://ieeexplore.ieee.org/document/9068769'
        className='btn achievement-btn'
      >
        Read My Paper
      </a>
    </div>
  );
}

export default Achievement;
