import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Landing.css';

function Landing() {
    const location = useLocation();

    useEffect(() => {
        // Check if the state has a scrollTo property
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <React.Fragment>
            {/* Main Section */}
            <section id="main" className="main-section">
                <div className="banner-text">Your Vision Is Ours</div>
            </section>

            {/* Team Section */}
            <section id="team" className="team-section">
                <p>
                    At TPL, we specialize in insurance accounting, corporate tax, VAT, 
                    and bookkeeping services designed for small businesses and SMEs.
                </p>
            </section>

            {/* Ribbon Section */}
            <section id="ribbon" className="ribbon-section">
                <div className="ribbon-text">
                    Our mission is simple: we manage your financial complexities—so you can focus on growing your core business.
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="about-details">
                    <p>
                        "You focus on business; we take care of your accounting." This simple idea 
                        drives everything we do. By delivering tailored bookkeeping and tax solutions, 
                        we ensure that your business thrives in today’s competitive market.
                    </p>
                </div>
            </section>

            {/* Ribbon Section */}
            <section id="ribbon" className="ribbon-section">
                <div className="ribbon-text">
                    Let us be your trusted partner in achieving financial clarity and success.
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <h3>Contact Us</h3>
                <form action="https://formspree.io/f/xvgonbza" method= "POST">
                    <label>Name</label>
                    <input type="text" name="name" required />

                    <label>Email Address</label>
                    <input type="email" name="email" required />

                    <label>What can we help with?</label>
                    <select>
                        <option>Bookkeeping</option>
                        <option>Business plan for small and SME</option>
                        <option>VAT submission</option>
                        <option>Corporate Tax</option>
                        <option>Insurance accounting</option>
                        <option>Accounting system implementation</option>
                        <option>Health checks up on business</option>
                        <option>Others</option>
                    </select>

                    <label>Subject</label>
                    <input type="text" name="subject" required />

                    <label>Message</label>
                    <textarea name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>
        </React.Fragment>
    );
}

export default Landing;
