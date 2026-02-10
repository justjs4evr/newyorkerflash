import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hub from './pages/Hub';
import Story from './pages/Story';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Hub />} />
                <Route path="/story" element={<Story />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
