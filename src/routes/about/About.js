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
                    <div className="about-mission">
                        <h3>Our Vision</h3>
                        <p>"To be the leading accounting consultancy in the UAE, recognized for our expertise in financial solutions, 
                            commitment to excellence, and dedication to empowering businesses to achieve sustainable growth and 
                            profitability in a dynamic economic landscape."</p>
                    </div>

                    <div className="about-mission">
                        <h3>Our Mission</h3>
                        <p>"At The Profitable Ledger (TPL), our mission is to empower businesses in the UAE with precise, reliable, 
                            and strategic financial solutions. We specialize in VAT compliance, corporate tax planning, bookkeeping, 
                            business planning, and insurance accounting, enabling our clients to focus on growth while we ensure 
                            their financial foundation is strong and compliant. Guided by integrity, expertise, and innovation, we 
                            aim to be a trusted partner in driving sustainable profitability and long-term success for every business
                            we serve."</p>
                    </div>

                    <div className="about-expertise">
                        <h3>Our Expertise</h3>
                        <ul>
                            <li>Supporting small businesses with efficient bookkeeping and strategic financial insights.</li>
                            <li>Ensuring compliance with VAT and corporate tax requirements.</li>
                            <li>Assisting Insurance sector on accounting needs.</li>
                            <li>Empowering clients through training and technology integration for seamless accounting operations.</li>
                        </ul>
                    </div>

                    <div className="about-values">
                        <h3>Our Values</h3>
                        <p>At The Profitable Ledger (TPL), our work is guided by:</p>
                        <ul>
                            <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in every interaction.</li>
                            <li><strong>Expertise:</strong> We are committed to delivering accurate and insightful financial solutions backed by deep industry knowledge.</li>
                            <li><strong>Client-Centricity:</strong> Your success is our priority, and we tailor our services to meet your unique needs and goals.</li>
                            <li><strong>Innovation:</strong> We embrace modern tools and approaches to ensure efficiency, compliance, and forward-thinking strategies.</li>
                            <li><strong>Excellence:</strong> We strive for perfection in everything we do, ensuring high-quality results that exceed expectations.</li>
                            <li><strong>Sustainability:</strong> We focus on building long-term relationships and creating solutions that promote financial stability and growth.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AboutPage;
