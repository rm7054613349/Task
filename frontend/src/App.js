import React from 'react';
import FetchConfiguration from './components/FetchConfiguration';
import UpdateRemark from './components/UpdateRemark';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Fetch Configuration</Link></li>
            <li className="nav-item"><Link to="/update-remark" className="nav-link">Update Remark</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<FetchConfiguration />} />
            <Route path="/update-remark" element={<UpdateRemark />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
