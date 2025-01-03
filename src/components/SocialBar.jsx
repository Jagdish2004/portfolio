import { socialLinks } from "../constants";
import { Link } from "react-router-dom";

const SocialBar = () => {
  return (
    <div className="fixed left-6 bottom-0 z-30">
      <div className="flex flex-col items-center gap-6">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            to={link.link}
            target={link.name !== 'Contact' ? '_blank' : '_self'}
            className="w-12 h-12 flex items-center justify-center rounded-full 
                     bg-white dark:bg-gray-800 shadow-lg transform transition-all 
                     duration-300 hover:scale-110 hover:-translate-y-1
                     border border-gray-200 dark:border-gray-700"
            rel="noopener noreferrer"
          >
            <img
              src={link.iconUrl}
              alt={link.name}
              className="w-6 h-6 object-contain dark:invert"
            />
          </Link>
        ))}
        <div className="w-[2px] h-32 bg-gray-400 dark:bg-gray-600 mt-2"></div>
      </div>
    </div>
  );
};

export default SocialBar; 