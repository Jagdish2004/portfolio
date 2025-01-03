import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-jakarta dark:bg-gray-800 dark:text-white'>
      <hr className='border-slate-200 dark:border-gray-700' />

      <div className='footer-container'>
        <p className="font-grotesk tracking-wide">
          © {new Date().getFullYear()} <strong>Jagdish Raut</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.link} 
              target='_blank'
              className='transition-transform hover:scale-110'
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain hover:opacity-80 dark:filter dark:invert'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
