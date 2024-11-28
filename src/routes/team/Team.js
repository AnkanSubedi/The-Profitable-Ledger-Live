import React from "react";
import './Team.css';
import { faUsers, faMedal, faShieldAlt } from '@fortawesome/free-solid-svg-icons'; // Icons for core values
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Team() {
    const coreValues = [
        {
            title: "Collaboration",
            description: "Working together to deliver the best results for our clients.",
            icon: faUsers, // Icon for collaboration
        },
        {
            title: "Excellence",
            description: "Committed to accuracy, timeliness, and top-notch service.",
            icon: faMedal, // Icon for excellence
        },
        {
            title: "Integrity",
            description: "Building trust through honesty and transparency.",
            icon: faShieldAlt, // Icon for integrity
        },
    ];

    const teamMembers = [
        {
            name: "John Doe",
            title: "Founder & CEO",
            description: "Chartered Accountant with over a decade of experience in tax compliance and financial strategy.",
            backgroundImage: "../../assets/bannerImage2.jpg", // Replace with actual image path
        },
        {
            name: "Jane Smith",
            title: "Senior Tax Consultant",
            description: "Specializing in VAT compliance and corporate tax solutions for SMEs.",
            backgroundImage: "../../assets/janeSmith.jpg", // Replace with actual image path
        },
        {
            name: "Michael Brown",
            title: "Bookkeeping Expert",
            description: "Ensures seamless financial records and accurate reports for decision-making.",
            backgroundImage: "../../assets/michaelBrown.jpg", // Replace with actual image path
        },
        {
            name: "Sarah Johnson",
            title: "Software Implementation Lead",
            description: "Skilled in integrating accounting software and training teams for success.",
            backgroundImage: "../../assets/sarahJohnson.jpg", // Replace with actual image path
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

                {/* Core Values */}
                <div className="team-values">
                    <h3>Our Core Values</h3>
                    <ul>
                        {coreValues.map((value, index) => (
                            <li key={index} className="team-value-card">
                                <FontAwesomeIcon icon={value.icon} className="team-value-icon" />
                                <div className="team-value-text">
                                    <h4>{value.title}</h4>
                                    <p>{value.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Meet Our Key Members */}
                <div className="team-members">
                    <h3>Meet Our Key Members</h3>
                    <ul>
                        {teamMembers.map((member, index) => (
                            <li
                                key={index}
                                className="team-member-card"
                                style={{ backgroundImage: `url(${member.backgroundImage})` }}
                            >
                                <h4>{member.name}</h4>
                                <p>{member.title}</p>
                                <p>{member.description}</p>
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
