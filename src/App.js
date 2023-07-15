import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import store from "./store/store";
import { Provider } from "react-redux";
import SearchStudents from "./pages/search-students";
import Header from "./components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Dashboard />} />
          <Route path="/search-students" element={<SearchStudents/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
