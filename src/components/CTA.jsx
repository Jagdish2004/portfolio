import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text dark:text-white font-playfair'>
        Looking for a Full Stack Developer to Integrate AI<br className='sm:block hidden' />
      </p>
      <Link 
        to='/contact' 
        className='btn hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 font-grotesk'
      >
        Let's Connect
      </Link>
    </section>
  );
};

export default CTA;
