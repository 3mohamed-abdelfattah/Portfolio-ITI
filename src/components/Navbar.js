import React from 'react';

const Navbar = () => {
    const handleMenuClick = () => {
        document.querySelector('.navbar .menu').classList.toggle('active');
        document.querySelector('.menu-btn i').classList.toggle('active');
    };

    return (
        <nav className="navbar">
            <div className="container">
                <ul className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#services" className="menu-btn">Services</a></li>
                    <li><a href="#skills" className="menu-btn">Skills</a></li>
                    <li><a href="#work" className="menu-btn">Works</a></li>
                    <li><a href="#contact" className="menu-btn">Contact</a></li>
                </ul>
                <div className="menu-btn" onClick={handleMenuClick}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
