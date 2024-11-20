import React, { useState, useEffect, useRef } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const footerRef = useRef();

    const handleScroll = () => {
        const navbarHeight = document.querySelector(".App-header")?.offsetHeight || 0;
        setIsVisible(window.scrollY > navbarHeight);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        // Detect when the footer comes into view
        const footerObserver = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the footer is visible
        );

        const footerElement = document.querySelector(".app-footer");
        if (footerElement) {
            footerObserver.observe(footerElement);
        }

        // Add scroll listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup observers and listeners
        return () => {
            if (footerElement) footerObserver.unobserve(footerElement);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    className="scroll-to-top"
                    style={{ bottom: isFooterVisible ? "100px" : "20px" }}
                    onClick={scrollToTop}
                >
                    {/* Add your SVG or styling here */}
                </button>
            )}
        </>
    );
}

export default ScrollToTopButton;