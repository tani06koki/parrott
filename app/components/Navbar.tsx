// components/Header.jsx
import React from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V16C7 17.6569 8.34315 19 10 19H18C19.6569 19 21 17.6569 21 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 9L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 15L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-2xl font-bold text-purple-600">Parott</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6 text-sm font-medium">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Competitions</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Community</a></li>
            </ul>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 p-2 pl-8 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
            </div>
            <a href="#" className="flex items-center text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors">Sign In</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

