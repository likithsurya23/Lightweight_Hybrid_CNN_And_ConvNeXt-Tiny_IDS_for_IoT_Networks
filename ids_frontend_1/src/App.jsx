import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import SinglePrediction from './pages/SinglePrediction/SinglePrediction';
import BatchPrediction from './pages/BatchPrediction/BatchPrediction';
import Analytics from './pages/Analytics/Analytics';
import ModelInfo from './pages/ModelInfo/ModelInfo';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Landing />} />
               <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/predict" element={<SinglePrediction />} />
              <Route path="/batch" element={<BatchPrediction />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/model-info" element={<ModelInfo />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;