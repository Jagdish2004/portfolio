import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header dark:bg-gray-800'>
      <NavLink 
        to='/' 
        className={({ isActive }) => 
          `text-lg transition-colors duration-300 hover:text-blue-600 font-playfair tracking-wide
          ${isActive ? "text-blue-600" : "text-black dark:text-white"}`
        }
      >
        <span className="font-bold text-xl">Jagdish Raut</span>
      </NavLink>
      <nav className='flex text-lg gap-7 font-grotesk tracking-wide'>
        <NavLink 
          to='/about' 
          className={({ isActive }) => 
            `transition-colors duration-300 hover:text-blue-600 
            ${isActive ? "text-blue-600" : "text-black dark:text-white"}`
          }
        >
          About
        </NavLink>
        <NavLink 
          to='/projects'
          className={({ isActive }) => 
            `transition-colors duration-300 hover:text-blue-600 
            ${isActive ? "text-blue-600" : "text-black dark:text-white"}`
          }
        >
          Projects
        </NavLink>
        <NavLink 
          to='/contact'
          className={({ isActive }) => 
            `transition-colors duration-300 hover:text-blue-600 
            ${isActive ? "text-blue-600" : "text-black dark:text-white"}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
