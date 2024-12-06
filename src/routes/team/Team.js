import React from "react";
import './Team.css';
import MurugeshPalaniImage from "../../assets/MurugeshPalani.jpg";

function Team() {
    const teamMembers = [
        {
            name: "Murugesh Palani FCMA (UK), CGMA, MBA (PIM USJ)",
            title: "Founder & CEO",
            description: `A seasoned finance executive with over 27 years of experience in accounting, corporate finance, 
                          taxation, and strategic leadership. Proven expertise in financial planning, cost optimization, 
                          regulatory compliance, and stakeholder management, consistently driving growth and operational 
                          efficiency across leading organizations. This includes 16 years in UAE and 11 years in Sri Lanka.`,
            image: MurugeshPalaniImage, // Replace with actual image path
            keyCompetencies: [
                "Strategic Financial Leadership",
                "Budgeting, Forecasting & Financial Planning",
                "Risk & Compliance Management",
                "Cost Reduction & Operational Efficiency",
                "Insurance Accounting & Regulatory Affairs",
                "Mergers & Acquisitions",
                "Stakeholder & Board Relations",
                "Financial Reporting & Analysis",
                "Team Leadership & Talent Development",
                "Investment & Asset Management",
                "Technology Integration in Financial Systems",
            ],
        },
    ];

    return (
        <React.Fragment>
            {/* Title Section */}
            <section id="team-title" className="team-title-section">
                <div className="team-title-text">Our Team</div>
            </section>

            {/* Main Content */}
            <section id="team-page" className="team-main-section">
                <p className="team-intro">
                    At TPL Accounting and Bookkeeping LLC, we believe our team is the backbone of our success.
                    Every member brings unique expertise, a dedication to client satisfaction, and a shared
                    passion for helping businesses thrive.
                </p>

                {/* Meet Our Key Members */}
                <div className="team-members">
                    <h3>Meet Our Key Members</h3>
                    <ul>
                        {teamMembers.map((member, index) => (
                            <li key={index} className="team-member-profile">
                                <div className="team-member-left">
                                    <img 
                                        src={member.image} 
                                        alt={`${member.name}`} 
                                        className="team-member-image" 
                                    />
                                </div>
                                <div className="team-member-right">
                                    <h4>{member.name}</h4>
                                    <p className="team-member-title">{member.title}</p>
                                    <p className="team-member-description">{member.description}</p>
                                    <div className="key-competencies">
                                        <h5>Key Competencies</h5>
                                        <ul>
                                            {member.keyCompetencies.map((competency, idx) => (
                                                <li key={idx}>{competency}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="team-closing">
                    Together, we are committed to driving your business forward with the expertise and support you can rely on.
                </p>
            </section>
        </React.Fragment>
    );
}

export default Team;
