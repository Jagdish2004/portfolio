import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 font-playfair tracking-wide'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Jagdish Raut</span>
        👋
        <br />
        <span className="font-jakarta">A Full Stack Developer & ML Engineer</span>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center dark:text-white font-jakarta tracking-wide'>
          Specialized in Full Stack Development <br /> and Machine Learning Engineering
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn dark:text-gray-800 font-grotesk'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl dark:text-white'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn dark:text-gray-800'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center dark:text-white'>
          Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn dark:text-gray-800'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
