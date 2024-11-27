import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content d-flex justify-content-between align-items-center py-3 px-4">
        <div className="d-flex align-items-center text-white">
        © <span className="text-gradient " style={{fontSize: '1.2rem', fontWeight: 'bold' }}>Pavithan Unenthiran</span>. All Rights Reserved.
        </div>

        <div className="d-flex gap-3">

          <a href="https://medium.com/@pavithanunenthiran29" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-medium" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://github.com/Dev-Pavithan" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" style={{ fontSize: '1.5rem'}}></i>
          </a>
          <a href="https://www.linkedin.com/in/pavithan-unenthiran/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
