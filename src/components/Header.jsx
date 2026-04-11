import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ownlogo from '../assets/logo.png';

export const Header = () => {
  // Premium Active/Inactive Nav Link Classes
  const activeClass = "block py-2 px-3 text-purple-600 dark:text-purple-400 font-bold md:bg-transparent md:p-0 transition-all duration-300 scale-105";
  const inactiveClass = "block py-2 px-3 text-gray-700 dark:text-gray-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 md:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 md:p-0 transition-all duration-300";
  
  const [hidden, sethidden] = useState(true);
  const Navigate = useNavigate();

  // 1. FIX: Proper LocalStorage initialization (Bug solved)
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  // 2. FIX: Added dependency array to stop infinite rendering loop
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]); 

  // 3. FIX: Safely handle form submission
  const handlingForm = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search?.value;
    if (!queryTerm || !queryTerm.trim()) {
      return;
    }
    e.target.reset();
    sethidden(true); // Search hone ke baad mobile menu band kar do
    Navigate(`/search?q=${queryTerm.trim()}`);
  };

  return (
    // PREMIUM UI: Glassmorphism effect (backdrop-blur) aur Zinc colors
    <nav className="fixed w-full z-50 top-0 start-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10 transition-colors duration-300 shadow-sm dark:shadow-purple-900/10">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group relative z-10">
          <img src={ownlogo} className="h-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" alt="Logo" />
          <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent transition-all duration-300">
            CineBase
          </span>
        </Link>

        <div className="flex items-center md:order-2 gap-2">
          
          {/* Dark Mode Toggle - Smooth Rotation Animation */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            type="button" 
            className="p-2.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none"
          >
            {darkMode ? (
              <svg className="w-5 h-5 animate-[spin_0.5s_ease-out]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
            ) : (
              <svg className="w-5 h-5 animate-[spin_0.5s_ease-out]" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            )}
          </button>

          {/* Desktop Search Input - Premium Style */}
          <div className="relative hidden md:block group">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <form onSubmit={handlingForm}>
              <input 
                type="text" 
                name="search" 
                autoComplete="off"
                className="block w-64 p-2.5 ps-10 text-sm text-gray-900 bg-gray-100/50 border border-transparent rounded-full focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:bg-zinc-900/50 dark:text-white dark:focus:bg-zinc-900 dark:focus:border-purple-500 transition-all duration-300 outline-none placeholder-gray-400" 
                placeholder="Search movies..." 
              />
            </form>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-xl md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-zinc-700 transition-colors" 
            onClick={() => sethidden(!hidden)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu & Links Dropdown */}
        <div className={`items-center justify-between ${hidden ? 'hidden' : 'block'} w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out`}>
          
          {/* Mobile Search - FIX: Added name="search" */}
          <div className="relative mt-4 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <form onSubmit={handlingForm}>
              <input 
                type="text" 
                name="search" 
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-zinc-900 dark:border-white/10 dark:placeholder-gray-400 dark:text-white" 
                placeholder="Search movies..." 
              />
            </form>
          </div>

          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100/50 rounded-2xl bg-white/50 dark:bg-zinc-900/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-white/10 md:dark:bg-transparent shadow-lg md:shadow-none">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass} end onClick={() => sethidden(true)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => sethidden(true)}>Popular</NavLink>
            </li>
            <li>
              <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => sethidden(true)}>Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => sethidden(true)}>Upcoming</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};