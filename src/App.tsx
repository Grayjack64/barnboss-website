import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import WhyBarnBoss from './pages/WhyBarnBoss';
import About from './pages/About';
import Support from './pages/Support';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Download from './pages/Download';
import Testimonials from './pages/Testimonials';
import Privacy from './pages/Privacy';
import { Dashboard } from './pages/Dashboard';
import ColiSigns from './pages/blog/ColiSigns';
import TaskManagement from './pages/blog/TaskManagement';
import BarnBossUpdate from './pages/blog/BarnBossUpdate';
import LaminitisGuide from './pages/blog/LaminitisGuide';
import Communication from './pages/blog/Communication';
import WinterCare from './pages/blog/WinterCare';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Protected Dashboard Route */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            {/* Public Marketing Routes */}
            <Route path="/*" element={
              <>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/why-barnboss" element={<WhyBarnBoss />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/colic-signs" element={<ColiSigns />} />
                    <Route path="/blog/task-management" element={<TaskManagement />} />
                    <Route path="/blog/barnboss-update" element={<BarnBossUpdate />} />
                    <Route path="/blog/laminitis-guide" element={<LaminitisGuide />} />
                    <Route path="/blog/communication" element={<Communication />} />
                    <Route path="/blog/winter-care" element={<WinterCare />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/privacy" element={<Privacy />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;