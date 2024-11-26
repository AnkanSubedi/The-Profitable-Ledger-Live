import React from "react";
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChartLine, faFilm, faMoneyBill, faProjectDiagram, faLaptop, faUserTie, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

function Services() {
    return (
        <section id="services" className="services-main-section">
            <h3 className="services-title">Discover Our Services</h3>
            <ul className="services-list">
                <li className="service-item">
                    <FontAwesomeIcon icon={faClipboardCheck} className="service-icon" />
                    <h4>Complimentary Bookkeeping Health Check</h4>
                    <p>This December, let us assess your bookkeeping for free, providing actionable recommendations to streamline your processes.</p>
                </li>
                <li className="service-item">
                    <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
                    <h4>Comprehensive Small Business Support</h4>
                    <p>We help SMEs streamline operations with tailored bookkeeping, internal controls, and expert advice to empower their growth.</p>
                </li>
                <li className="service-item">
                    <FontAwesomeIcon icon={faChartLine} className="service-icon" />
                    <h4>Corporate Tax Expertise</h4>
                    <p>Simplify tax compliance with our expert services, including T2 filings, VAT support, and strategic tax planning for your business.</p>
                </li>
                <li className="service-item">
                    <FontAwesomeIcon icon={faFilm} className="service-icon" />
                    <h4>Media & Entertainment Tax Credits</h4>
                    <p>Maximize production tax credits with tailored solutions designed for the media and entertainment industry.</p>
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
        </section>
    );
}

export default Services;