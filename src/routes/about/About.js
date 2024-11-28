import React from "react";
import './About.css';

function AboutPage() {
    return (
        <React.Fragment>
            {/* Title Section */}
            <section id="about-title" className="about-title-section">
                <div className="about-title-text">About Us</div>
            </section>

            {/* Main Content Section */}
            <section id="about-page" className="about-main-section">
                <div className="about-content-container">
                    <p className="about-intro">
                        At <strong>TPL Accounting and Bookkeeping LLC</strong>, we understand that accounting is more than just numbers—it’s the foundation of your business’s success. Our mission is to empower small and medium-sized enterprises (SMEs) by taking the burden of financial management off your shoulders, allowing you to focus on growth and success.
                    </p>

                    <div className="about-mission">
                        <h3>Our Mission</h3>
                        <p>"You focus on business; we take care of your accounting." This philosophy drives everything we do. By delivering tailored accounting and bookkeeping solutions, we help businesses streamline operations, make informed decisions, and achieve sustainable growth.</p>
                    </div>

                    <div className="about-expertise">
                        <h3>Our Expertise</h3>
                        <ul>
                            <li>Supporting small businesses with efficient bookkeeping and strategic financial insights.</li>
                            <li>Ensuring compliance with VAT and corporate tax requirements.</li>
                            <li>Empowering clients through training and technology integration for seamless accounting operations.</li>
                        </ul>
                    </div>

                    <div className="about-values">
                        <h3>Our Values</h3>
                        <ul>
                            <li><strong>Client-Centered Approach:</strong> We adapt to your needs, offering solutions that align with your goals.</li>
                            <li><strong>Excellence in Service:</strong> From timely reports to strategic planning, we ensure the highest quality.</li>
                            <li><strong>Innovation:</strong> We leverage the latest tools and techniques to enhance your financial processes.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AboutPage;
