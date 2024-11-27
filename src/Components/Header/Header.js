import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="navbar-center-wrapper">
      <Navbar expand="lg" className="p-3 rounded navbar mt-3">
        <Container>
          
          <Navbar.Brand as={Link} to="/" className="custom-navbar-brand d-flex align-items-center p-2">
            <i class="bi bi-at text-gradient" style={{ fontSize: '1.8rem', color: '#88A4E6' }}></i>
            <span className='text-gradient'>Pavithan Unenthiran</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: '#88A4E6' }} />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/about" className="fw-bold mx-3">
                About
              </Nav.Link>              
              <Nav.Link as={Link} to="/blog" className="fw-bold mx-3">
                Blog
              </Nav.Link>  
              <Nav.Link as={Link} to="/project" className="fw-bold mx-3">
                Project
              </Nav.Link>  
              <Nav.Link as={Link} to="/contactus" className="fw-bold mx-3">
                Contact Us
              </Nav.Link>                
              <i class="bi bi-sun" style={{ fontSize: '1.5rem', color: '#88A4E6' }}></i>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
