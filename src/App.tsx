import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;