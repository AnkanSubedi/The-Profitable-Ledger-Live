import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";
import ScrollToTopButton from "../scrollToTop/ScrollToTopButton";

function Navigation({ topOffset }) { // Accept the topOffset as a prop
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavigation = (sectionId) => {
        setIsMenuOpen(false); // Close the menu
        if (location.pathname !== "/") {
            navigate("/");
        }
        setTimeout(() => {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100); // Allow time for the Landing page to load
    };

    return (
        <>
            <header className="App-header" style={{ marginTop: topOffset }}> {/* Dynamically set margin */}
                <div className="logo" onClick={() => handleNavigation("/")}>
                    The Profitable Ledger
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <nav className="menu-links">
                        <button onClick={() => handleNavigation("/")}>Main</button>
                        <button onClick={() => handleNavigation("services")}>Services</button>
                        <button onClick={() => handleNavigation("about")}>What We Do</button>
                        <button onClick={() => handleNavigation("team")}>Our Team</button>
                        <button onClick={() => handleNavigation("contact")}>Contact Us</button>
                    </nav>
                </div>
                <nav className="navigation">
                    <button onClick={() => handleNavigation("/")}>Main</button>
                    <button onClick={() => handleNavigation("services")}>Services</button>
                    <button onClick={() => handleNavigation("about")}>What We Do</button>
                    <button onClick={() => handleNavigation("team")}>Our Team</button>
                    <button onClick={() => handleNavigation("contact")}>Contact Us</button>
                </nav>
            </header>

            {/* Add ScrollToTopButton */}
            <ScrollToTopButton />
        </>
    );
}

export default Navigation;
