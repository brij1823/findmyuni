import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EXISTING_STUDENT, NEW_STUDENT } from '../assets/String';

const CenteredButtons = () => {
  const headerHeight = 64; // Adjust this value based on the actual height of your header

  const navigate = useNavigate()

  return (
    <div className={`flex items-center justify-center min-h-screen pt-${headerHeight}`}>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          {EXISTING_STUDENT}
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded" onClick={() => {
          navigate('/search-students')
        }}>
          {NEW_STUDENT}
        </button>
      </div>
    </div>
  );
};

export default CenteredButtons;
