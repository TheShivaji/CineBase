import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (

    <footer className="bg-white  shadow dark:bg-gray-900 mb-15 ">


      <div className="w-full max-w-7xl mx-auto p-4 md:flex md:items-center md:justify-between">

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2026 <Link to="/" className="hover:underline">Shivaji™</Link>. All Rights Reserved.
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li>
            <Link to="#" target="_blank" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link to="#" target="_blank" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link to="https://github.com/TheShivaji" target="_blank" className="hover:underline me-4 md:me-6">Github</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/prathamesh-jagdale-48817330b/" target="_blank" className="hover:underline">Contact</Link>
          </li>
        </ul>

      </div>
    </footer>
  );
};
