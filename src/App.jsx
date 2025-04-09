import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import ErrorPage from './components/ErrorPage';
import { ToastContainer, Zoom } from 'react-toastify';
import useTheme from "./hooks/useTheme";

// Lazy loading components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Skill = lazy(() => import('./components/Skill'));

function App() {
  const path = useLocation();

  const knownPaths = ["/", "/about", "/skills", "/projects", "/contact"];

  const hideLayout = !knownPaths.includes(location.pathname);

  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {!hideLayout && <Navbar theme={theme} toggleTheme={toggleTheme}/>}
        <main>
          <Routes>
            <Route path="/" element={<Home theme={theme}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        {!hideLayout && <Footer />}
      </Suspense>
      <ScrollToTop />
      
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div >
  );
}

export default App;