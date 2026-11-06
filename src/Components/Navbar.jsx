import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    // {
    //   name: "Case Studies",
    //   path: "/case-studies",
    // },
    {
      name: "Expertise",
      path: "/expertise",
    },
    {
      name: "Tools",
      path: "/tools",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  return (
    <header className="bg-[#06142f] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}

          <Link to="/" className="text-2xl font-black italic">
            <img src="/logo.png" alt="" className="h-15 w-auto" />
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs transition ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP BUTTON */}

          <Link
            to="/contact"
            className="hidden lg:block bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-md text-xs font-medium transition"
          >
            Let's Connect
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* MOBILE MENU */}

        {open && (
          <nav className="lg:hidden pb-6 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-sm ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
