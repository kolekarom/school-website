import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { translate } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-[100vw]'>
      <div className='container-fluid'>
        <div className="lg:h-fit p-0 row navbar navbar-expand-lg d-flex bg-light">
          <div className="container-fluid">
            <Link to="/" className='navbar-brand flex items-center'>
              <img src="/images/logo_main.svg" alt="Logo" className="navbar-brand rounded-full object-fill w-[50px] lg:w-[80px]" />
              <div className='flex-col justify-center hidden lg:flex'>
                <span className='font-bold'>Apex English School</span>
                <span className='small text-gray-500'>Beed Districts</span>
              </div>
              <span className='lg:hidden block text-sm'>Apex English School</span>
            </Link>

            <div className="flex items-center" id="navbarNav">
              <ul className="navbar-nav hidden lg:flex align-items-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link">{translate('home')}</Link>
                </li>
                <li className="nav-item me-3">
                  <Link to='/aboutus' className="nav-link">{translate('about')}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/faculty" className="nav-link">{translate('faculty')}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/students" className="nav-link">{translate('students')}</Link>
                </li>
                <li className="nav-item me-3">
                  <Link to="/curriculum" className="nav-link">{translate('academics')}</Link>
                </li>
                <li className="nav-item me-3">
                  <Link to="/campus" className="nav-link">{translate('gallery')}</Link>
                </li>
                <li className="nav-item me-3">
                  <Link to="/contact" className="btn shadow btn-primary text-light text-decoration-none">
                    {translate('nav.contact')}
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <LanguageSelector />
                </li>
              </ul>
              <div className='d-lg-none d-block'>
                <Menu className='fw-bold fs-1 cursor-pointer' onClick={toggleMenu}/>
              </div>
              <div
                className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${
                  isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
              >
                <div className="cursor-pointer text-2xl" onClick={toggleMenu}>
                  &times;
                </div>
                <ul className="mt-8 space-y-4 flex flex-col gap-3">
                  <li>
                    <Link to="/" className="text-white" onClick={toggleMenu}>
                      {translate('home')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" className="text-white" onClick={toggleMenu}>
                      {translate('about')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/faculty" className="text-white" onClick={toggleMenu}>
                      {translate('faculty')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/students" className="text-white" onClick={toggleMenu}>
                      {translate('students')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/curriculum" className="text-white" onClick={toggleMenu}>
                      {translate('academics')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/campus" className="text-white" onClick={toggleMenu}>
                      {translate('gallery')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-white" onClick={toggleMenu}>
                      {translate('contact')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
