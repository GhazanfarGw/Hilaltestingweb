import React from "react";
import {
  FaHandshake,
  FaChartLine,
  FaBuilding,
  FaUsers,
  FaGlobe,
  FaDollarSign,
  FaMapMarkedAlt,
  FaBalanceScale,
  FaPlane,
  FaLightbulb,
  FaCheckCircle,
  FaRegChartBar,
  FaRegFileAlt,
} from "react-icons/fa";

function Description() {
  return (
    <section className="space-y-16 py-6 md:py-16 px-5 md:px-10 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="first text-center space-y-4">
        <p className="mt-4 max-w-2xl mx-auto md:text-lg text-sm text-[#777]">
          Hilal Capital operates across two verticals providing advisory, capital markets solutions, and strategic partnerships for growth.
        </p>
      </div>

      {/* Verticals */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Advisory & Deal Structuring */}
        <div className="bg-white p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
          <div className="second flex items-center mb-4 text-green-800">
            <FaHandshake className="w-8 h-8 mr-3" />
            <h3 className="md:text-2xl text-lg">Advisory & Deal Structuring</h3>
          </div>
          <ul className="third space-y-3 text-gray-600">
            <li className="flex items-center">
              <FaBalanceScale className="mr-3 text-green-600" /> Transaction structuring (Shariah & conventional)
            </li>
            <li className="flex items-center">
              <FaMapMarkedAlt className="mr-3 text-green-600" /> Market entry and regulatory support
            </li>
            <li className="flex items-center">
              <FaRegFileAlt className="mr-3 text-green-600" /> Due diligence and valuation
            </li>
            <li className="flex items-center">
              <FaPlane className="mr-3 text-green-600" /> Cross-border corporate finance
            </li>
          </ul>
        </div>

        {/* Capital Markets & Private Transactions */}
        <div className="bg-white p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
          <div className="first flex items-center mb-4 text-[#383380]">
            <FaChartLine className="w-8 h-8 mr-3" />
            <h3 className="md:text-2xl text-lg">Capital Markets & Private Transactions</h3>
          </div>
          <ul className="second space-y-3 text-gray-600">
            <li className="flex items-center">
              <FaDollarSign className="mr-3 text-[#383380]" /> Co-investment platforms
            </li>
            <li className="flex items-center">
              <FaLightbulb className="mr-3 text-[#383380]" /> Venture growth and real asset opportunities
            </li>
            <li className="flex items-center">
              <FaGlobe className="mr-3 text-[#383380]" /> Strategic M&A across GCC, India, and select EU markets
            </li>
          </ul>
        </div>
      </div>

      <p className="third text-gray-500 italic text-center border-b pb-5">
        We do not undertake fund management, discretionary investment, or asset custody services.
      </p>

      {/* For Investors */}
      <div className="space-y-6 md:pt-10">
        <h2 className="first md:text-4xl text-2xl underline text-[#444]">
          For Investors
        </h2>
        <p className="second text-gray-600 text-lg font-medium">
          Ethical Capital. Emerging Growth.
        </p>
        <p className="third text-gray-600 max-w-3xl">
          Hilal Capital connects institutional and qualified investors to rigorously screened, impact-aligned opportunities across emerging markets.
        </p>

        <div className="fourth grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex">
              <FaUsers className="mr-2 text-green-700"/> Our investors include:
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaCheckCircle className="mr-2 text-green-600"/> Sovereign and pension funds
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-2 text-green-600"/> Development institutions
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-2 text-green-600"/> UHNWIs and family offices
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-2 text-green-600"/> Corporate treasuries
              </li>
            </ul>
          </div>
          <div>
            <h3 className="first text-xl font-bold mb-3 flex">
              <FaGlobe className="mr-2 text-[#383380]"/> Why Partner with Us
            </h3>
            <ul className="second space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaRegChartBar className="mr-2 text-[#383380]"/> Deep regional sourcing (GCC–India–Europe)
              </li>
              <li className="flex items-center">
                <FaBalanceScale className="mr-2 text-[#383380]"/> Structurally sound, compliant investment formats
              </li>
              <li className="flex items-center">
                <FaUsers className="mr-2 text-[#383380]"/> Governance-first philosophy
              </li>
              <li className="flex items-center">
                <FaBuilding className="mr-2 text-[#383380]"/> Regulated platform under development at ADGM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* For Companies */}
      <div className="space-y-6 border-t py-10">
        <h2 className="third md:text-4xl text-2xl underline text-[#444]">
          For Companies
        </h2>
        <p className="fourth text-gray-600 text-lg font-medium">
          More Than Capital. Strategic Partnership.
        </p>
        <p className="fourth text-gray-600 max-w-3xl">
          We support founders and businesses seeking intelligent capital solutions, regulatory navigation, and expansion access.
        </p>

        <div className="five grid md:grid-cols-1 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex">
              <FaBuilding className="mr-2 text-green-700"/> We deliver:
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaLightbulb className="mr-2 text-green-600"/> Capital advisory tailored to stage and structure
              </li>
              <li className="flex items-center">
                <FaUsers className="mr-2 text-green-600"/> Investor readiness and board-level guidance
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-2 text-green-600"/> ESG integration and compliance positioning
              </li>
              <li className="flex items-center">
                <FaBalanceScale className="mr-2 text-green-600"/> Shariah structuring, where relevant
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Description;
