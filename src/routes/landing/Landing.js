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

            {/* New edited section */}
            <section id="team" className="team-section">
                <p>
                    At TPL, we specialize in insurance accounting, corporate tax, VAT, 
                    and bookkeeping services designed for small businesses and SMEs. 
                    With deep expertise in the insurance sector, we understand the unique 
                    challenges of regulatory compliance, financial reporting, and operational efficiency.
                </p>
            </section>

            {/* ribbon Section  */}
            <section id="ribbon" className="ribbon-section">               
                <div className="ribbon-text">Our mission is simple: we manage your financial complexities—so you can focus on growing your core business.</div>     
            </section>

            {/* About Section  */}
            <section id="about" className="about-section">                
                <div className="about-details">
                    <p>
                        "You focus on business; we take care of your accounting." This simple idea 
                        drives everything we do. By delivering tailored bookkeeping and tax solutions, 
                        we ensure that your business thrives in today’s competitive market.
                    </p>
                </div>
            </section>

            {/* ribbon Section  */}
            <section id="ribbon" className="ribbon-section">               
                <div className="ribbon-text">Let us be your trusted partner in achieving financial clarity and success.</div>     
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
