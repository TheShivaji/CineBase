import React from 'react';
import { Link } from "react-router-dom"; // Galti 1 Fix: { Link } lagaya

export const Footer = () => {
  return (
    // Galti 2 Fix: Colors change kiye (bg-white, text-gray)
    <footer className="bg-white rounded-lg shadow  ">
      <div className="w-full max-w-9xl p-4 md:flex md:items-center md:justify-between dark:bg-gray-900">

        <span className="text-sm text-gray-500 sm:text-center">
          © 2026 <a href="https://flowbite.com/" className="hover:underline">Shivaji</a>. All Rights Reserved.
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            {/* Galti 3 Fix: target="_blank" kiya */}
            <Link to="#" target="_blank" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link to="#" target="_blank" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#" target="_blank" className="hover:underline me-4 md:me-6">Licensing</Link>
          </li>
          <li>
            <Link to="#" target="_blank" className="hover:underline">Contact</Link>
          </li>
        </ul>

      </div>
    </footer>
  );
};
