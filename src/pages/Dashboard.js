import React, { useState } from 'react';
import Chat from './Chat';

const Dashboard = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="space-y-4 w-full md:w-1/4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <img 
              className="w-16 h-16 rounded-full" 
              src={item.image} 
              alt={item.name} 
            />
            <div className="font-bold text-xl">{item.name}</div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="md:w-3/4 h-full md:border-l md:border-gray-300">
          <Chat item={selectedItem} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
