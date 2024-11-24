import React from "react";
import './Team.css';

function Team() {
    return (
        <section id="team-page" className="team-main-section">
            <h2 className="team-title">Our Team</h2>
            <p className="team-intro">
                At TPL Accounting and Bookkeeping LLC, we believe our team is the backbone of our success.
                Every member brings unique expertise, a dedication to client satisfaction, and a shared
                passion for helping businesses thrive.
            </p>
            <div className="team-values">
                <h3>Our Core Values</h3>
                <ul>
                    <li><strong>Collaboration:</strong> Working together to deliver the best results for our clients.</li>
                    <li><strong>Excellence:</strong> Committed to accuracy, timeliness, and top-notch service.</li>
                    <li><strong>Integrity:</strong> Building trust through honesty and transparency.</li>
                </ul>
            </div>
            <div className="team-members">
                <h3>Meet Our Key Members</h3>
                <ul>
                    <li>
                        <strong>Placeholder:</strong> Founder & CEO – Chartered Accountant with over a decade of experience in tax compliance and financial strategy.
                    </li>
                    <li>
                        <strong>Placeholder:</strong> Senior Tax Consultant – Specializing in VAT compliance and corporate tax solutions for SMEs.
                    </li>
                    <li>
                        <strong>Placeholder:</strong> Bookkeeping Expert – Ensures seamless financial records and accurate reports for decision-making.
                    </li>
                    <li>
                        <strong>Placeholder:</strong> Software Implementation Lead – Skilled in integrating accounting software and training teams for success.
                    </li>
                </ul>
            </div>
            <p className="team-closing">
                Together, we are committed to driving your business forward with the expertise and support you can rely on.
            </p>
        </section>
    );
}

export default Team;