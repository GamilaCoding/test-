import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
        Logout
      </button>
    </header>
  );
};

export default Header;
