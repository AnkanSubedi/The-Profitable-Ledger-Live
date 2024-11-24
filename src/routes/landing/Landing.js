import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import './Landing.css';

function Landing() { 
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate("/about");
        window.scrollTo(0, 0); // Scroll to the top of the page
    };
    return(
        <React.Fragment>
            {/* Main Section  */}
            <section id="main" className="main-section">               
                <div className="banner-text">Your Vision Is Ours</div>     
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <h3>Tailored Solutions for Your Business Needs</h3>
                <ul>
                <li><strong>Small Business Support:</strong> Streamline operations with bookkeeping, advice, and internal controls.</li>
                <li><strong>Corporate Taxes:</strong> Simplify T2 filings and VAT compliance.</li>
                <li><strong>Media & Entertainment Tax Services:</strong> Maximize tax credits for film production.</li>
                <li><strong>Working Capital Management:</strong> Optimize cash flow for financial stability.</li>
                <li><strong>Accounting Software Setup & Training:</strong> Implement and master your accounting tools.</li>
                </ul>
                
                <Link to="/services">
                    <button className="learn-more-button" onClick={handleLearnMoreClick}>Discover All Services</button>
                </Link>               
            </section>

            {/* About Section  */}
            <section id="about" className="about-section">
                <h3>About Us</h3>
                <p>
                    At TPL Accounting and Bookkeeping LLC, we are more than just accountants. 
                    We partner with small and medium-sized businesses to simplify their financial 
                    management and empower them to focus on growth and success.
                </p>
                <div className="about-details">
                    <h3>Our Philosophy</h3>
                    <p>
                        "You focus on business; we take care of your accounting." This simple idea 
                        drives everything we do. By delivering tailored bookkeeping and tax solutions, 
                        we ensure that your business thrives in today’s competitive market.
                    </p>
                </div>
                <Link to="/about">
                    <button className="learn-more-button" onClick={handleLearnMoreClick}>Learn More</button>
                </Link>
            </section>

            {/* Team Section */}
            <section id="team" className="team-section">
                <h3>Meet Our Team</h3>
                <p>
                    At TPL Accounting and Bookkeeping LLC, our team is our strength. 
                    Comprising experienced professionals with diverse expertise, we work collaboratively 
                    to ensure our clients achieve their business goals.
                </p>
                <p>
                    From seasoned accountants to innovative problem-solvers, every member of our team 
                    shares a commitment to excellence, integrity, and customer success.
                </p>
                <Link to="/team">
                    <button className="learn-more-button" onClick={handleLearnMoreClick}>Learn More About Our Team</button>
                </Link>
            </section>

            {/* ribbon Section  */}
            <section id="ribbon" className="ribbon-section">               
                <div className="ribbon-text">Your Numbers, Our Expertise</div>     
            </section>
            
            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <h3>Contact Us</h3>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" required />
                    
                    <label>Email Address</label>
                    <input type="email" name="email" required />
                    
                    <label>What can we help with?</label>
                    <select>
                        <option>Bookkeeping</option>
                        <option>Payroll</option>
                        <option>Personal Tax</option>
                        <option>Corporate Tax and Notice to Reader</option>
                        <option>Film Production Accounting</option>
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
