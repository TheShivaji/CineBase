import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  // Dynamic year taaki har saal update na karna pade
  const currentYear = new Date().getFullYear();

  return (
    // PREMIUM UI: Header ki tarah isme bhi Glassmorphism (blur) aur Zinc colors dale hain
    <footer className="w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-t border-gray-200 dark:border-white/10 transition-colors duration-300 mt-auto relative z-20">
      
      <div className="w-full max-w-7xl mx-auto p-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Copyright Section with Gradient Text */}
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {currentYear}{" "}
          <Link to="/" className="font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            CineBase™
          </Link>
          . All Rights Reserved. By Shivaji.
        </span>

        {/* Links & Socials Section */}
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
          
          {/* Internal Links */}
          <li>
            <Link to="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 px-2">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 px-2">
              Privacy Policy
            </Link>
          </li>

          {/* External Links: GitHub (Pill shape with icon) */}
          <li>
            <a 
              href="https://github.com/TheShivaji" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-white hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black px-3 py-1.5 rounded-full transition-all duration-300 border border-transparent dark:border-white/10"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>Github</span>
            </a>
          </li>

          {/* External Links: LinkedIn (Pill shape with icon) */}
          <li>
            <a 
              href="https://www.linkedin.com/in/prathamesh-jagdale-48817330b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#0a66c2] dark:hover:text-[#70b5f9] px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-[#0a66c2]/10"
            >
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              <span>Contact</span>
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
};