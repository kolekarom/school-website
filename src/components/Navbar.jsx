import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { translate, loading } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Default navigation items
  const navItems = [
    { key: 'nav.home', text: 'HOME', path: '/' },
    { key: 'nav.aboutUs', text: 'ABOUT US', path: '/aboutus' },
    { key: 'nav.faculty', text: 'FACULTY', path: '/faculty' },
    { key: 'nav.students', text: 'STUDENTS', path: '/students' },
    { key: 'nav.academics', text: 'ACADEMICS', path: '/curriculum' },
    { key: 'nav.gallery', text: 'GALLERY', path: '/campus' },
    { key: 'nav.contactUs', text: 'CONTACT US', path: '/contact' }
  ];

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
                {navItems.map((item, index) => (
                  <li key={item.key} className={`nav-item ${index < navItems.length - 1 ? 'me-3' : ''}`}>
                    {item.key === 'nav.contactUs' ? (
                      <Link to={item.path} className="btn shadow btn-primary text-light text-decoration-none">
                        {loading ? item.text : translate(item.key)}
                      </Link>
                    ) : (
                      <Link to={item.path} className="nav-link">
                        {loading ? item.text : translate(item.key)}
                      </Link>
                    )}
                  </li>
                ))}
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
                  {navItems.map((item) => (
                    <li key={item.key}>
                      <Link to={item.path} className="text-white" onClick={toggleMenu}>
                        {loading ? item.text : translate(item.key)}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <LanguageSelector />
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
