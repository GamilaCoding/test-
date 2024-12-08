import React from 'react';
import { FiHome, FiUser, FiMail, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-72 bg-blue-900 text-white p-6 flex flex-col">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-3 text-lg p-3 hover:bg-blue-700 rounded-lg transition duration-200">
          <FiHome size={20} /> Home
        </a>
        <a href="#" className="flex items-center gap-3 text-lg p-3 hover:bg-blue-700 rounded-lg transition duration-200">
          <FiUser size={20} /> Profile
        </a>
        <a href="#" className="flex items-center gap-3 text-lg p-3 hover:bg-blue-700 rounded-lg transition duration-200">
          <FiMail size={20} /> Messages
        </a>
        <a href="#" className="flex items-center gap-3 text-lg p-3 hover:bg-blue-700 rounded-lg transition duration-200">
          <FiSettings size={20} /> Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
