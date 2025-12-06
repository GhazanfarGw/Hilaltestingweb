// import React from 'react'

// function Agency() {
//   return (

//     <>
//     {/* <div data-aos="zoom-in-up" data-aos-delay="300" className='grid-cols-4 px-5 mx-auto justify-center items-center block md:hidden lg:hidden pt-20 pb-20'>
//       <h1 className='text-3xl text-[#dfc660] justify-center mx-auto pt-3'>
//         Protect your transaction from.
//       </h1>
//       <div className='w-80 flex items-center justify-center mx-auto gap-x-2'>
//         <img src="../logos/anduril.jpg" alt="" />
//       </div>
//       <div className='w-80 flex items-center justify-center h-0 mx-auto gap-x-0 pt-5'>

//       </div>
//       <div className='w-80 flex items-center justify-center mx-auto gap-x-3 pt-5'>

//       </div>
//       <div className='flex items-center justify-center h-28 mx-auto'>
 
//       </div>
//       <div className='flex items-center justify-center h-0 mx-auto gap-x-1 pt-3'>

//       </div>
//     </div> */}
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='pt-32 px-5 md:px-10 justify-center mx-auto max-w-screen-xl md:pb-20 hidden md:block lg:block' >
        // <h1 className='justify-center mx-auto md:py-10 md:max-w-2xl md:text-xl font-light text-lg text-[#444444]'>
        //     We are proud to partner with some of the most innovative companies in the tech industry. Here's below lists of them.
        // </h1>
//         <div className='grid grid-cols-4 justify-center mx-auto gap-3 mt-10'>
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/Openal.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/scale.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anth.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/groq.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/figue.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mistral.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anduril.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/builder.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/cfdx.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/ltaf.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/zellar.jpg" alt="" />
            // <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mirzy.jpg" alt="" />
//         </div>
//       </div>


//       <div data-aos="zoom-in-up" data-aos-delay="300" className='pt-20 px-5 md:px-10 justify-center mx-auto max-w-screen-xl pb-20 block md:hidden lg:hidden mt-24'>
//         <h1 className='justify-center mx-auto md:py-10 md:max-w-2xl md:text-xl font-light text-lg text-[#444444]'>
//             We are proud to partner with some of the most innovative companies in the tech industry. Here's below lists of them.
//         </h1>
//         <div className='grid grid-cols-2 justify-center mx-auto gap-3 mt-10'>
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/Openal.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/scale.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anth.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/groq.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/figue.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mistral.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/anduril.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/builder.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/cfdx.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/ltaf.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/zellar.jpg" alt="" />
//             <img className='hover:scale-105 duration-300 border py-6 px-3' src="../logos/mirzy.jpg" alt="" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Agency

import React, { useEffect } from "react";
import { FaEye, FaBullseye, FaLightbulb } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Post() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="space-y-16 md:py-16 px-5 md:px-10 max-w-screen-xl mx-auto">
      {/* About Us Header */}
      <div className="text-center md:mb-20 pb-5 md:block lg:block hidden" data-aos="fade-up">
        <p className="mt-4 max-w-2xl mx-auto md:text-lg text-sm text-[#777]">
          We provide principled, performance-driven financial advisory solutions shaping sustainable economic outcomes.
        </p>
      </div>

      {/* Sections Grid */}
      <div className="">
        {/* Vision */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className="md:pb-10 pb-5 md:pt-0 pt-5 border-b border-b-[#0C6E33] border-opacity-20"
        >
          <h2 className="first border-l-8 border-l-[#0C6E33] pl-3 md:text-4xl font-light text-2xl text-[#444444]">
            Our Vision
          </h2>
          <p className="second text-[#777] text-sm md:text-lg leading-relaxed max-w-3xl pt-5">
            To become the region’s leading multi-market financial advisory firm—providing principled, performance-driven solutions that shape sustainable economic outcomes.
          </p>
        </div>

        {/* Mission */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className="md:pb-20 pb-5 pt-10 border-b border-b-[#0C6E33] border-opacity-20"
        >
          <h2 className="first border-l-8 border-l-[#383380] pl-3 md:text-4xl font-light text-2xl text-[#444444]">
            Our Mission
          </h2>
          <p className="second text-[#777] text-sm md:text-lg leading-relaxed max-w-3xl pt-5">
            We identify and enable high-impact businesses through strategic capital advisory, robust governance frameworks, and institutional-grade execution—while balancing Shariah principles and conventional flexibility.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl md:py-20 pb-16 md:pb-0">
      <h2 className="first md:text-4xl font-light text-2xl text-[#444444] leading-relaxed md:text-center">
        Our Philosophy
      </h2>
      {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:pt-16 pt-8">
          <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center border border-[#0C6E33] border-opacity-20">
            <img src="/icons8-dollar-100.png" alt="Value Driven" className="first w-16 h-16 mb-4"/>
            <h3 className="second font-semibold text-lg mb-2 text-[#444444] text-center">Value-Driven Capital</h3>
            <p className="third text-[#777] text-sm md:text-lg leading-relaxed">Anchored in trust, transparency, and long-term alignment.</p>
          </div>

          <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center border border-[#0C6E33] border-opacity-20">
            <img src="/icons8-rings-100.png" alt="Dual Lens" className="first w-16 h-16 mb-4"/>
            <h3 className="second font-semibold text-lg mb-2 text-[#444444] md:text-center text-left">Dual Lens Approach</h3>
            <p className="third text-[#777] text-sm md:text-lg leading-relaxed">Offering both Shariah-compliant and conventional structuring capabilities.</p>
          </div>

          <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center border border-[#0C6E33] border-opacity-20">
            <img src="/icons8-check-100.png" alt="Disciplined Advisory" className="first w-16 h-16 mb-4 text-left"/>
            <h1 className="second font-semibold text-lg mb-2 text-[#444444] md:text-center text-left">Disciplined Advisory</h1>
            <p className="third text-[#777] text-sm md:text-lg leading-relaxed">Rooted in robust regulatory frameworks and ethical engagement.</p>
          </div>

        {/* Regional Advantage Boxes */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-5">
          <h3 className="first font-light md:text-2xl text-xl text-[#444444] leading-relaxed py-6 underline">Regional Advantage</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-4 bg-white p-4 shadow-lg hover:shadow-2xl transition border border-[#0C6E33] border-opacity-20">
              <img src="./in.svg" alt="India" className="second w-10 h-10 object-cover rounded-full" />
              <p className="third text-[#777] text-sm md:text-lg"><strong>INDIA</strong> – Legacy relationships across corporates and government.</p>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 shadow-lg hover:shadow-2xl transition border border-[#0C6E33] border-opacity-20">
              <img src="./ae.svg" alt="UAE" className="first w-10 h-10 object-cover rounded-full" />
              <p className="second text-[#777] text-sm md:text-lg"><strong>UAE</strong> – ADGM-based governance and connectivity.</p>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 shadow-lg hover:shadow-2xl transition border border-[#0C6E33] border-opacity-20">
              <img src="./sa.svg" alt="KSA" className="first w-10 h-10 object-cover rounded-full" />
              <p className="second text-[#777] text-sm md:text-lg"><strong>KSA</strong> – Emerging market edge through local partnerships.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Philosophy
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="py-20 duration-300"
        >
          <h2 className="text-3xl pt-10 pb-8 font-light text-[#444444] mb-6">
            Our Philosophy
          </h2>
          <ul className="text-[#0C6E33] text-2xl space-y-4 list-disc list-inside text-left mx-auto">
            <li>
              <span className="font-semibold text-[#444444] underline text-sm md:text-lg">Value-Driven Capital:</span> 
              <span className="text-[#777] text-sm md:text-lg"> Anchored in trust, transparency, and long-term alignment.</span>
            </li>
            <li>
              <span className="font-semibold text-[#444444] underline text-sm md:text-lg">Dual Lens Approach:</span>
              <span className="text-[#777] text-sm md:text-lg"> Offering both Shariah-compliant and conventional structuring capabilities.</span>
            </li>
            <li>
              <span className="font-semibold text-[#444444] underline text-sm md:text-lg">Disciplined Advisory:</span>
              <span className="text-[#777] text-sm md:text-lg"> Rooted in robust regulatory frameworks and ethical engagement.</span>
            </li>
            <li>
              <span className="font-semibold text-[#444444] text-sm md:text-lg">Regional Advantage:</span>
              <ul className="ml-6 mt-2 space-y-2 text-sm md:text-lg text-[#777]">
                <li className="flex items-center gap-2">
                  <img src="./in.svg" alt="India" className="w-6 h-6" />
                  <span className="font-semibold text-[#444444] underline text-sm md:text-lg">INDIA</span>– Legacy relationships across corporates and government.
                </li>
                <li className="flex items-center gap-2">
                  <img src="./ae.svg" alt="UAE" className="w-6 h-6" />
                  <span className="font-semibold text-[#444444] underline text-sm md:text-lg">UAE</span> – ADGM-based governance and connectivity.
                </li>
                <li className="flex items-center gap-2">
                  <img src="./sa.svg" alt="KSA" className="w-6 h-6" />
                  <span className="font-semibold text-[#444444] underline text-sm md:text-lg">KSA</span> – Emerging market edge through local partnerships.
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
    </div>
  );
}

export default Post;
