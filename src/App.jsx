
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import FloatingProjectsPage from './pages/FloatingProjectsPage'
import Projects from './components/Projects'

import './App.css'
import './index.css';

function App() {
    return (
      <Router>
        <Navbar />
        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/floating_projects" element={<FloatingProjectsPage />} />
          </Routes>
        </main>
      </Router>
    );
  }

export default App
