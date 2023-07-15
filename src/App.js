import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/dashboard/Index";
import store from "./store/store";
import { Provider } from "react-redux";
import SearchStudents from "./pages/search-students";

function App() {
  const items = [
    { name: "John Doe1", image: "https://via.placeholder.com/150" },
    { name: "Jane Doe2", image: "https://via.placeholder.com/150" },
    { name: "John Doe3", image: "https://via.placeholder.com/150" },
    { name: "Jane Doe4", image: "https://via.placeholder.com/150" },
    { name: "John Doe5", image: "https://via.placeholder.com/150" },
    { name: "Jane Doe6", image: "https://via.placeholder.com/150" },
  ];

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Dashboard />} />
          <Route path="/search-students" element={<SearchStudents />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
