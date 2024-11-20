import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Navigation.css';
import ScrollToTopButton from "../scrollToTop/ScrollToTopButton";

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (sectionId) => {
        if (location.pathname !== "/") {
            // Navigate to Landing page if not already there
            navigate("/");
        }
        // Scroll to the section after a small delay
        setTimeout(() => {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100); // Allow time for the Landing page to load
    };

    const navigateToStart = () => {
        if (location.pathname !== "/") {
            navigate("/"); // Navigate to the Landing page
        }
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
        }, 100); // Delay ensures the Landing page is loaded
    };

    return (
        <>
        <header className="App-header">
            <div className="logo" onClick={navigateToStart} style={{ cursor: "pointer" }}>
                <h1>The Profitable Ledger</h1>
            </div>
            <nav className="navigation">
                <button onClick={() => handleNavigation("main")}>Main</button>
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