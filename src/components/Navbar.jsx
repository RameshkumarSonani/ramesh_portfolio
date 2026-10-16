
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `text-sm transition-colors duration-200 ${isActive
      ? "font-semibold text-green-400"
      : "text-slate-400 hover:text-green-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-mono text-xl font-bold tracking-tight text-white"
          aria-label="Ramesh home"
        >
          ramesh<span className="text-green-400">.dev</span>
          <span className="text-green-400">_</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={getLinkClass}
            >
              {link.label}
            </NavLink>
          ))}

          
<Link
  to="/contact"
  onClick={() => setMenuOpen(false)}
  className="rounded-lg border border-green-400/40 px-5 py-2.5 font-medium text-green-300 transition-all duration-300 hover:border-green-300 hover:bg-green-400/10 hover:text-green-200"
>
  Let's Talk <span className="ml-1">↗</span>
</Link>

        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-md border border-white/10 p-2 text-slate-200 transition-colors hover:border-green-400/40 hover:text-green-400 md:hidden"
        >
          <span className="block w-5 text-center text-xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0b1120] px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={getLinkClass}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-green-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-green-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
