import { useState } from "react";
import { Link } from "react-router-dom";

function Cap() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
      <path d="M3 17.5 24 7l21 10.5L24 28 3 17.5Z" fill="currentColor" />
      <path
        d="M12 23v10.5c7.2 5.2 16.8 5.2 24 0V23L24 31l-12-8Z"
        fill="currentColor"
        opacity=".78"
      />
      <path
        d="M43 19v12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="43" cy="34" r="2.5" fill="currentColor" />
    </svg>
  );
}

function Navbar() {
  const [selectedNavBar, setSelectedNavBar] = useState("Home");
  const links = [
    "Home",
    "Courses",
    "Faculty",
    "Results",
    "About",
    "Gallery",
    "Contact",
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900"
        >
          <span className="text-blue-600">
            <Cap />
          </span>
          EduPro
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link}
              onClick={() => setSelectedNavBar(link)}
              to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
              className={`text-xs font-semibold transition hover:text-blue-600 ${
                link === selectedNavBar ? "text-blue-700" : "text-slate-700"
              }`}
            >
              {link}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          onClick={() => setSelectedNavBar("Contact")}
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700"
        >
          Enroll Now
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
