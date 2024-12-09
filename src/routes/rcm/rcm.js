import React, { useState } from "react";
import "./rcm.css";

function RCM() {
    const [expandedSection, setExpandedSection] = useState(null);
    const [showPricingPopup, setShowPricingPopup] = useState(false);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const togglePricingPopup = () => {
        setShowPricingPopup(!showPricingPopup);
    };

    return (
        <div className="rcm-container">
            {/* Hero Section */}
            <section className="rcm-hero">
                <div className="hero-overlay">
                    <h1>Revenue Cycle Management (RCM)</h1>
                    <p>
                        VNM is a subsidiary of TPL LLC, a registered company in UAE. 
                        VNM has the expertise to work on a full RCM model with an objective 
                        of effective cost-saving to the client.
                    </p>
                </div>
            </section>

            {/* Expansion Sections */}
            <section className="rcm-expansion-sections">
                <div
                    className={`expansion-section ${expandedSection === "services" ? "expanded" : ""}`}
                    onClick={() => toggleSection("services")}
                >
                    <h3>
                        Our Services
                        <span className="expand-icon">{expandedSection === "services" ? "–" : "+"}</span>
                    </h3>
                    {expandedSection === "services" && (
                        <div className="expanded-content">
                            <ul>
                                <li>Submission & Resubmission of claims</li>
                                <li>Submission & Resubmission of claims with reporting and dashboard</li>
                                <li>Submission & Resubmission of claims with reporting with dashboard reconciliation and collection</li>
                                <li>Add-on services like training, business development support (price increasing, market practice information, and auditing support)</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div
                    className={`expansion-section ${expandedSection === "benefits" ? "expanded" : ""}`}
                    onClick={() => toggleSection("benefits")}
                >
                    <h3>
                        Benefits of Working with VNM
                        <span className="expand-icon">{expandedSection === "benefits" ? "–" : "+"}</span>
                    </h3>
                    {expandedSection === "benefits" && (
                        <div className="expanded-content">
                            <ul>
                                <li>Efficient Workflow Management</li>
                                <li>Enhanced Financial Performance</li>
                                <li>Cost Reduction</li>
                                <li>Improved Cash Flow</li>
                                <li>Senior Revenue Cycle Leadership</li>
                                <li>Real-Time Data for Informed Decision-Making</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div
                    className={`expansion-section ${expandedSection === "deliverables" ? "expanded" : ""}`}
                    onClick={() => toggleSection("deliverables")}
                >
                    <h3>
                        What We Deliver from VNM
                        <span className="expand-icon">{expandedSection === "deliverables" ? "–" : "+"}</span>
                    </h3>
                    {expandedSection === "deliverables" && (
                        <div className="expanded-content">
                            <ul>
                                <li>Collection Rate Increases</li>
                                <li>Monthly Cash Flow Increases</li>
                                <li>Claims Resolution Time improves</li>
                                <li>Denial Rate Decreases</li>
                                <li>Reimbursement Rate Improves</li>
                                <li>Operational Cost Savings</li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* Value Addition Section */}
            <section className="rcm-value-addition">
                <h2>Value Addition</h2>
                <ul>
                    <li>Dedicated Team Support</li>
                    <li>Expertise You Can Rely On</li>
                    <li>Customized Solutions for Your Organization</li>
                    <li>Scalable Services for All Types of Organizations</li>
                </ul>
            </section>
            
        </div>
    );
}

export default RCM;
