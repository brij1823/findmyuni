import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">My App</h1>
      <div>
        <Link className="text-white mx-2" to="/">Home</Link>
        <Link className="text-white mx-2" to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default MenuBar;
