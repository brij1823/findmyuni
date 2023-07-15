import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import MenuBar from "./pages/Menubar";
import Header from "./components/Header";

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
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<><h1 className="text-2xl font-bold mb-4">List of Items</h1><Dashboard items={items} /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
