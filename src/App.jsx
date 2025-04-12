import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import { LanguageProvider } from './context/LanguageContext';

import Coursoul from './components/Coursoul';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import About from './components/Faculty';

import Campus from './components/Campus';
import College from './components/About';
import Contact from './components/Contact';
import Timer from './components/Timer';
import Curriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Students from './components/Students';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className='bg-gray-100'>
          <Navbar />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <div>
                  <Coursoul />
                  <Marquee text={`"Welcome to Apex English School, where we nurture young minds for a brighter future."`} />
                  <Timer />                
                  <Main1 />
                
                </div>
              }
            />

            <Route
              exact
              path='/faculty'
              element={
                <>
                  <Faculty />
              
                
                  
                </>
              }
            />



            <Route
              exact
              path='/students'
              element={
                <>
                  <Students />
              
              
                
                </>
              }
            />

            <Route
              exact
              path='/campus'
              element={
                <>
                  <Campus />
               
              
                  <Main1 />
                 
                </>
              }
            />

        

            <Route
              exact
              path='/curriculum'
              element={
                <>
                  <Curriculum />
                 
              
               
               
              </>
            }
            />

         

            <Route
              exact
              path='/aboutus'
              element={
                <>
                  <College />
                  <Main2 />
                
                  <Main1 />
            
                </>
              }
            />

            <Route
              exact
              path='/contact'
              element={
                <>
                  <Contact />
                  
                </>
              }
            />

            <Route path='*' element={<Navigate to="/" />} />
          </Routes>

          {isVisible && (
            <button
              className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <KeyboardArrowUp />
            </button>
          )}
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
