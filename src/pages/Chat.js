import React from 'react';
import CenteredButtons from '../components/CenteredButtons';

const Chat = ({ item }) => {
  return (
    <div className="w-full h-full p-4 bg-gray-200 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Chat with {item.name}</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Book Zoom Meeting</button>
      </div>
      {/* Add your chat messages here */}
    </div>
  );
};

export default Chat;
