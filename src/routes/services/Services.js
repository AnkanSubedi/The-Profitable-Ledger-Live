import React, { useState } from "react";
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChartLine, faShieldAlt, faMoneyBill, faProjectDiagram, faLaptop, faUserTie, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

function Services() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleCardClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <React.Fragment>
            
            {/* Title sectiom  */}
            <section id="services-title" className="services-title-section">               
                <div className="services-title-text">Discover Our Services</div>     
            </section>

            <section id="services" className="services-main-section">
                <ul className="services-list">
                    {/* Complimentary Bookkeeping Card */}
                    <li
                        className="service-item-deal"
                        onClick={handleCardClick} // Show popup on click
                    >
                        <FontAwesomeIcon icon={faClipboardCheck} className="service-icon-deal" />
                        <h4>Complimentary Bookkeeping Health Check</h4>
                        <p>This December, let us assess your bookkeeping for free, providing actionable recommendations to streamline your processes.</p>
                    </li>

                    {/* Other service cards */}
                    <li className="service-item">
                        <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
                        <h4>Comprehensive Small Business Support</h4>
                        <p>We help Small/Medium businesses streamline operations with tailored bookkeeping, internal controls, and expert advice to empower their growth.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faChartLine} className="service-icon" />
                        <h4>VAT & Corporate Tax Expertise</h4>
                        <p>Simplify tax compliance with our expert services, including T2 filings, VAT support, and strategic tax planning for your business.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
                        <h4>Insurance Service Accounting</h4>
                        <p>Streamline your insurance accounting processes with expert support on IFRS 17 compliance, regulatory reporting, and financial management tailored for the insurance sector.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faMoneyBill} className="service-icon" />
                        <h4>Optimized Working Capital Management</h4>
                        <p>Maintain smooth cash flow through proactive receivables and payables management and detailed aging reports.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faProjectDiagram} className="service-icon" />
                        <h4>Budgeting and Strategic Planning</h4>
                        <p>Align your finances with your vision through expert budget preparation, monitoring, and monthly progress reports.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faLaptop} className="service-icon" />
                        <h4>Accounting Software Implementation & Training</h4>
                        <p>Integrate and master accounting software with our hands-on setup and training services.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faUserTie} className="service-icon" />
                        <h4>Accountant Training</h4>
                        <p>Equip your team with the knowledge and skills for daily tasks, reporting, and compliance through our tailored training.</p>
                    </li>
                </ul>

                {/* Popup */}
                {isPopupVisible && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h3>Complimentary Bookkeeping Health Check Includes:</h3>
                            <li> VAT Filing and Corporate Taxation </li>
                            <li> Accounts Receivable operation, aging and collection </li>
                            <li> Accounts Payable operation  </li>
                            <li> Cash and bank operation </li>
                            <li> Monthy accounts budgeting strategy </li>
                            <button className="popup-close" onClick={handleClosePopup}>Close</button>
                        </div>
                    </div>
                )}
            </section>
        </React.Fragment>
    );
}

export default Services;
