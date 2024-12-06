import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import ScrollToTopButton from "../scrollToTop/ScrollToTopButton";

function Navigation({ topOffset }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavigation = (path) => {
        setIsMenuOpen(false); // Close the menu
        navigate(path); // Navigate to the specified route
    };

    return (
        <>
            <header className="App-header" style={{ marginTop: topOffset }}>
                <div className="logo" onClick={() => handleNavigation("/")}>
                    THE PROFITABLE LEDGER
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <nav className="menu-links">
                        <button onClick={() => handleNavigation("/")}>Main</button>
                        <button onClick={() => handleNavigation("/services")}>Services</button>
                        <button onClick={() => handleNavigation("/about")}>About Us</button>
                        <button onClick={() => handleNavigation("/team")}>Our Team</button>
                        <button onClick={() => handleNavigation("/contact")}>Contact Us</button>
                    </nav>
                </div>
                <nav className="navigation">
                    <button onClick={() => handleNavigation("/")}>Main</button>
                    <button onClick={() => handleNavigation("/services")}>Services</button>
                    <button onClick={() => handleNavigation("/about")}>About Us</button>
                    <button onClick={() => handleNavigation("/team")}>Our Team</button>
                    <button onClick={() => handleNavigation("/contact")}>Contact Us</button>
                </nav>
            </header>

            {/* Add ScrollToTopButton */}
            <ScrollToTopButton />
        </>
    );
}

export default Navigation;
