import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between px-8 py-4
        dark:bg-white-950/60
        border-b border-cyan-400/20
        shadow-[0_4px_30px_rgba(0,200,255,0.15)]
        transition-all duration-500
      "
    >
      {/* Logo / Name */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `
            font-playfair text-2xl font-bold tracking-wide select-none
            bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent
            drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]
            hover:brightness-125 transition-all duration-500
            ${
              isActive
                ? "drop-shadow-[0_0_16px_rgba(56,189,248,0.9)] scale-105"
                : ""
            }
          `
        }
      >
        <span className="font-semibold">Jagdish</span>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex gap-6 font-grotesk text-lg tracking-wide">
        {[
          { to: "/about", label: "About" },
          { to: "/projects", label: "Projects" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `
                relative px-4 py-2 rounded-xl font-medium
                backdrop-blur-md bg-gradient-to-br from-blue-500/10 via-cyan-700/10 to-gray-800/30
                border border-cyan-400/20
                text-blue-400 hover:text-cyan-300
                hover:scale-110 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? "text-cyan-300 border-cyan-400/40 shadow-[0_0_25px_rgba(56,189,248,0.6)] scale-105"
                    : ""
                }
              `
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
