// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import Skill from './components/Skill';
// import ErrorPage from './components/ErrorPage';

// function App() {
//   const location = useLocation();
//   const hideLayout = location.pathname === "/404"; // or location.pathname doesn't match known routes
//   return (
//     <div>
//     {!hideLayout && <Navbar/>}
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skill />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }

// export default App;



import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

// Lazy loading components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Skill = lazy(() => import('./components/Skill'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));

function App() {
 const path = useLocation();

  const knownPaths = ["/", "/about", "/skills", "/projects", "/contact"];
  
  const hideLayout = !knownPaths.includes(location.pathname);
  return (
    <div>
      <Suspense fallback={<Loader />}>
         {!hideLayout && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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
    </div >
  );
}

export default App;