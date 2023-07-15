import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Find My University</h1>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-2 rounded">
            Login
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
