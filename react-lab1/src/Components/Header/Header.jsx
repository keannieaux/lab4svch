import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import { Navbar, Nav, } from 'react-bootstrap';
import Dropdown from '../Dopdown/dropdown'

function Header() {
    return (
        <header className="header">
            <div className="header1">
                <div className="burger-menu" id="burgerMenu">
                    <span></span><span></span><span></span>
                </div>
                <div className="header-block1">
                <Navbar expand="lg" className="header-nav">
      <Navbar.Brand href="#home"><Link to="/" className="dm-sansFont text-a">Home</Link></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about"><Link to="/about" className="dm-sansFont text-a">About</Link></Nav.Link>
          <Nav.Link href="#contact"><Link to="/reviews" className="dm-sansFont text-a">Reviews</Link></Nav.Link>
          <Nav.Link href="#contact"><Dropdown/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
                </div>
            </div>
        </header>
    );
}

export default Header;
