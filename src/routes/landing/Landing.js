import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';

function Landing() { 
    return(
        <React.Fragment>
            {/* Main Section  */}
            <section id="main" className="main-section">               
                <div className="banner-text">Storytelling with Numbers</div>     
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <h3>Our Services</h3>
                <ul>
                <li><strong>Small Businesses:</strong> Assistance with bookkeeping, internal controls, and general advice.</li>
                <li><strong>Corporate Taxes:</strong> Filing T2 corporation income tax returns and electronic submissions.</li>
                <li><strong>Media and Entertainment:</strong> Eligibility for tax credits and related claims for film production.</li>
                </ul>
                
                <Link to="/services">
                    <button className="learn-more-button">Learn More</button>
                </Link>               
            </section>

            {/* About Section  */}
            <section id="about" className="about-section">
                    <h3>What We Do</h3>
                    <p>
                    To collaborate with our clients through clear communication, so that they can focus on the growth of their business.
                    </p>
                <div className="about-details">
                    <h3>About Me</h3>
                    <p>
                        Deciding to pursue my Chartered Accountant designation was never just about accounting. My experience has shown me
                        that although the numbers are a major piece of the framework for a successful business; people, drive, and passion form the core.
                    </p>
                </div>

                <Link to="/about">
                    <button className="learn-more-button">Learn More</button>
                </Link> 
            </section>

            {/* Team Section */}
            <section id="team" className="team-section">
                <h3>The Team</h3>
                <p>
                    Our team consists of talented individuals with an array of unique experiences. We share with our clients the enthusiasm 
                    in seeing company growth and evolution.
                </p>

                <Link to="/team">
                    <button className="learn-more-button">More About Our Team</button>
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
