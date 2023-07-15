import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";


function App() {

  const items = [
    { name: 'John Doe1', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Doe2', image: 'https://via.placeholder.com/150' },
    { name: 'John Doe3', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Doe4', image: 'https://via.placeholder.com/150' },
    { name: 'John Doe5', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Doe6', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
        <Route path="/" element={<><h1 className="text-2xl font-bold mb-4">List of Items</h1><Dashboard items={items} /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
