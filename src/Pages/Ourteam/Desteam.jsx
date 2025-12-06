import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamPage = () => {
  const teamMembers = [
    // Senior Leadership
    {
      id: 1,
      category: "Senior Leadership",
      name: "Zafar Sareshwala",
      role: "Chief Patron and Advisor",
      image: "./Imagesp/zafarfs-354x354.png",
      description: `Mr Sareshwala is the Chief Advisor of Hilal Capital. Zafar has over 30 years of experience in Stocks, Islamic Finance and Fund Management. He founded Parsoli Corporation, a Shariah-compliant brokerage listed on BSE, and set up one of the first Islamic Equity Funds in the UK.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      category: "Senior Leadership",
      name: "Irshad Akhtar",
      role: "Co-Founder",
      image: "./Imagesp/Irshad-Akhtar-1-354x354.png",
      description: `Irshad is an Alumni of Imperial College London and Said Business School Oxford. A CA, Investment Banker and Corporate Treasurer. Co-founded HSBC KSA, involved in Banking, Brokerage, Asset Management and Advisory.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      category: "Senior Leadership",
      name: "Zaheer Muneer",
      role: "Co-Founder",
      image: "./Imagesp/zaheer-354x354.png",
      description: `Zaheer is a professional investor specializing in growth strategies across public and private sectors. Structured deals worth over $1 billion and guided organizations in fintech, AI and cybersecurity adoption.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },

    // Management
    {
      id: 4,
      category: "Management",
      name: "Irshad Akhtar",
      role: "Chief Executive Officer (CEO)",
      image: "./Imagesp/Irshad-Akhtar-1-354x354.png",
      description: `Irshad leads Hilal Capital as CEO with decades of banking and strategic leadership experience.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 5,
      category: "Management",
      name: "Zaheer Muneer",
      role: "Chief Strategy Officer (CSO)",
      image: "./Imagesp/zaheer-354x354.png",
      description: `Zaheer oversees strategic direction and investment structuring at Hilal Capital.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 6,
      category: "Management",
      name: "Habib Sareshwala",
      role: "Chief Operating Officer (COO)",
      image: "./Imagesp/habibsareshwala-354x354.png",
      description: `Habib is an experienced operations expert known for enhancing organizational performance and business controls.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 7,
      category: "Management",
      name: "Simon Bayles",
      role: "Senior Fund Manager",
      image: "./Imagesp/simonbayles-354x354.png",
      description: `Simon brings 30 years of Asset Management experience and has managed PE funds, Fund of Funds and long-only portfolios.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },

    // Board & Advisors
    {
      id: 8,
      category: "Board & Advisors",
      name: "Robert B. Gray",
      role: "Non-Executive Director / Chairman of the Board",
      image: "./Imagesp/robergrey-354x354.png",
      description: `Financial services professional with over 40 years at J.P. Morgan and HSBC, specializing in capital markets, debt finance and regulatory policy.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 9,
      category: "Board & Advisors",
      name: "Cihan Aktas",
      role: "Non-Executive Director",
      image: "./Imagesp/cihan-354x354.png",
      description: `Economist with 20+ years in global financial stability, international finance and government relations.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 10,
      category: "Board & Advisors",
      name: "Sohail Essa Jaffer",
      role: "Senior Advisor",
      image: "./Imagesp/Jaffar.png",
      description: `Over 40 years of experience in financial services, holding executive roles at major global firms.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 11,
      category: "Board & Advisors",
      name: "Rajnish Kumar",
      role: "Senior Advisor",
      image: "./Imagesp/rajnishkumar-354x354.png",
      description: `Former Chairman of State Bank of India, influential in global banking and financial leadership.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 12,
      category: "Board & Advisors",
      name: "Raihan R. Choudhury",
      role: "Senior Advisor",
      image: "./Imagesp/knowimage.png",
      description: `Advisor in sovereign and private sector initiatives, PPP, trading and strategic resource management.`,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const handleMemberClick = (id) => {
    setSelectedMemberId(selectedMemberId === id ? null : id);
  };

  return (
    <div className="space-y-16 py-6 md:py-16 px-5 md:px-10 max-w-screen-xl mx-auto">
      {/* Categories */}
      {['Senior Leadership','Management','Board & Advisors'].map((category) => (
        <div key={category}>
          <h2 className="first text-3xl pt-10 underline pb-8 font-light text-[#444444]">{category}</h2>

          <div className="grid grid-cols-4 gap-4 pb-10 border-b-2">
            {teamMembers
              .filter((m) => m.category === category)
              .map((member) => (
                <React.Fragment key={member.id}>
                  <div
                    className={`second team-member hover:translate-x-0.5 ${
                      selectedMemberId && selectedMemberId !== member.id ? "fade-out" : ""
                    }`}
                    onClick={() => handleMemberClick(member.id)}
                  >
                    <img className="third hover:scale-105 duration-200" src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>

                  {selectedMemberId === member.id && (
                    <div className="expanded-profile w-full mx-auto">
                      <div className="profile-content mx-auto">
                        <div className="first mt-8 px-8 py-10 max-w-sm">
                          <img src={member.image} alt={member.name} />
                        </div>

                        <div className="profile-details mt-10 mr-16 mx-auto">
                          <h2>{member.name}</h2>
                          <h4>{member.role}</h4>
                          <p className="text-sm max-w-screen-lg">{member.description}</p>

                          <div className="social-links flex gap-4 mt-4">
                            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                          </div>

                          <button className="mt-5 border px-4 py-1" onClick={() => setSelectedMemberId(null)}>Close</button>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;