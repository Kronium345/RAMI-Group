import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './pages/Team/Team';
import RecentProjects from './pages/RecentProjects/RecentProjects';
import Publications from './pages/Publications/Publications';
import News from './pages/News/News';
import News1 from './pages/News/News1';
import News2 from './pages/News/News2';
import News3 from './pages/News/News3';
import News4 from './pages/News/News4';

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
        Example: <Route path="/news" element={<News />} />
        Example: <Route path="/first-news" element={<News1 />} />
        Example: <Route path="/second-news" element={<News2 />} />
        Example: <Route path="/third-news" element={<News3 />} />
        Example: <Route path="/fourth-news" element={<News4 />} />
        {/* Example: <Route path="/more" element={<More />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
