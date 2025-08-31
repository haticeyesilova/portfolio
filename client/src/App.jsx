import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import '@react-pdf-viewer/core/lib/styles/index.css';
import CVViewer from './components/CVViewer';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/cv" element={<CVViewer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
