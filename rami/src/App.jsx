import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './pages/Team/Team';
import RecentProjects from './pages/RecentProjects/RecentProjects';
import Publications from './pages/Publications/Publications';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as you create more pages */}
        Example: <Route path="/team" element={<Team />} />
        Example: <Route path="/recent-projects" element={<RecentProjects />} />
        Example: <Route path="/publications" element={<Publications />} />
        {/* Example: <Route path="/news" element={<News />} /> */}
        {/* Example: <Route path="/more" element={<More />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
