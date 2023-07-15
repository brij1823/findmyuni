import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/dashboard/Index";
import Header from "./components/Header";
import store from "./store/store";
import { Provider } from "react-redux";
import Chatboard from "./pages/Chatboard";
import SearchStudents from "./pages/search-students";

function App() {
  const items = [
    { name: "John Doe1", image: "https://via.placeholder.com/150", id: '1' },
    { name: "Jane Doe2", image: "https://via.placeholder.com/150", id: '2' },
    { name: "John Doe3", image: "https://via.placeholder.com/150", id: '3' },
    { name: "Jane Doe4", image: "https://via.placeholder.com/150", id: '4' },
    { name: "John Doe5", image: "https://via.placeholder.com/150", id: '5' },
    { name: "Jane Doe6", image: "https://via.placeholder.com/150", id: '6' },
  ];

  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chatboard items={items} />} />
          <Route path="/search-students" element={<SearchStudents />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
