import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

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

// Group members by category
const grouped = teamMembers.reduce((acc, member) => {
  if (!acc[member.category]) acc[member.category] = [];
  acc[member.category].push(member);
  return acc;
}, {});

export default function OurPeople() {
  return (
       <div className="w-full px-4 md:px-6 py-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-12 text-center">Our People</h1>

      {Object.keys(grouped).map((category) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl mb-8 border-b pb-2 text-center md:text-left">
            {category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {grouped[category].map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border shadow-sm"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.description}</p>

                <div className="flex space-x-4 mt-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#444444] hover:text-blue-900 transition">
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#444444] hover:text-blue-600 transition">
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#444444] hover:text-blue-800 transition">
                      <FaFacebook size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}