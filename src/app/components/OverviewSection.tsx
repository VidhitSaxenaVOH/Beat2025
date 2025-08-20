// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const OverviewSection = () => {
//   return (
//     <section className="relative bg-[#EDDEBA] overflow-hidden">
//       {/* Background overlay image */}
//       <Image
//   src="/branch-bg.png"
//   alt="Background overlay"
//   width={900}
//   height={900}
//   className="absolute top-[-240] right-0 z-0 pointer-events-none object-fill"
// />



//         <div>
//                 <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

//                 <div className="relative w-full flex justify-center items-center py-8 bg-[#EDDEBA] overflow-hidden">
//                     {/* Background oversized text - very subtle */}
//                     <h1
//                         className="absolute text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                         style={{
//                             fontFamily: "Playfair Display",
//                             WebkitTextStroke: "1px #9ca3af",
//                             color: "transparent"
//                         }}
//                     >
//                         Overview
//                     </h1>

//                     {/* Center bold blue title with lines */}
//                     <div className="flex items-center z-10">
//                         {/* Left tapered line */}
//                         <div className="relative mr-2">
//                             <div
//                                 className="w-30 bg-[#A21B43] rounded-full"
//                                 style={{
//                                     height: '6px',
//                                     clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                                 }}
//                             ></div>
//                         </div>

//                         <h2 className="text-[32px] font-semibold text-[#012CDB]"
//                             style={{ fontFamily: "Playfair Display" }}>Overview</h2>

//                         {/* Right tapered line */}
//                         <div className="relative ml-2">
//                             <div
//                                 className="w-30 bg-[#A21B43] rounded-full"
//                                 style={{
//                                     height: '6px',
//                                     clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
//                                 }}
//                             ></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//       {/* Content Container */}
//       <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-2 mt-0 py-6">
//         {/* Left image */}
//         <div className="flex-shrink-0 w-full lg:w-2/5 flex justify-center">
//           <Image
//             src="/overview-foreground.png"
//             alt="Overview Illustration"
//             className="w-[60%] max-w-sm"
//             priority
//             width={350}
//             height={350}
//           />
//         </div>
        
//         {/* Right text */}
//         <div className="w-full lg:w-3/5 text-center lg:text-justify">
          
//           <p className="text-gray-600 leading-relaxed text-lg mr-18" >
//             With CVD’s accounting for over 28% of total deaths in India, the economic,
//             infrastructural, and institutional implications are impossible to ignore. As the
//             burden shifts toward younger, working-age populations, the need for systemic,
//             policy-led, and innovation driven responses has become more critical than ever.
//             India requires not just treatment strategies— but cohesive action across hospital
//             systems, health-tech providers, payers, and regulators. BEAT 2025 is envisioned as
//             a high-level B2B platform that brings these decision-makers together. It aims to
//             bridge the gaps between policy and practice, foster strategic partnerships, and
//             accelerate scalable innovations in cardiac care.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OverviewSection;


'use client';

import React from 'react';
import Image from 'next/image';

const OverviewSection = () => {
  return (
    <section className="relative bg-[#EDDEBA] overflow-hidden">
      {/* Background overlay image - responsive positioning */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile/Tablet: Smaller, centered background */}
        <div className="lg:hidden absolute top-0 right-0 w-full h-full flex justify-center items-start pt-8">
          <Image
            src="/branch-bg.png"
            alt="Background overlay"
            width={400}
            height={400}
            className="opacity-30 object-contain"
          />
        </div>
        
        {/* Desktop/Laptop: Original positioning */}
        <div className="hidden lg:block">
          <Image
            src="/branch-bg.png"
            alt="Background overlay"
            width={900}
            height={900}
            className="absolute top-[-240px] right-0 object-fill"
          />
        </div>
      </div>

      <div>
        <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

        {/* Header Section - Responsive */}
        <div className="relative w-full flex justify-center items-center py-6 sm:py-8 lg:py-8 bg-transparent overflow-hidden">
          {/* Background oversized text - responsive sizing */}
          <h1
            className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
            style={{
              fontFamily: "Playfair Display",
              WebkitTextStroke: "1px #9ca3af",
              color: "transparent"
            }}
          >
            Overview
          </h1>

          {/* Center bold blue title with lines - responsive */}
          <div className="flex items-center z-10 px-4">
            {/* Left tapered line - responsive width */}
            <div className="relative mr-2 sm:mr-3">
              <div
                className="w-8 sm:w-12 md:w-16 lg:w-20 xl:w-30 bg-[#A21B43] rounded-full"
                style={{
                  height: '4px',
                  clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
                }}
              ></div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#012CDB] whitespace-nowrap"
              style={{ fontFamily: "Playfair Display" }}>
              Overview
            </h2>

            {/* Right tapered line - responsive width */}
            <div className="relative ml-2 sm:ml-3">
              <div
                className="w-8 sm:w-12 md:w-16 lg:w-20 xl:w-30 bg-[#A21B43] rounded-full"
                style={{
                  height: '4px',
                  clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container - Responsive Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Layout - Stacked */}
        <div className="sm:hidden flex flex-col items-center gap-6 py-6">
          <div className="w-full flex justify-center">
            <Image
              src="/overview-foreground.png"
              alt="Overview Illustration"
              className="w-[70%] max-w-[280px]"
              priority
              width={280}
              height={280}
            />
          </div>
          
          <div className="w-full">
            <p className="text-gray-600 leading-relaxed text-base text-justify px-2">
              With CVD&apos;s accounting for over 28% of total deaths in India, the economic,
              infrastructural, and institutional implications are impossible to ignore. As the
              burden shifts toward younger, working-age populations, the need for systemic,
              policy-led, and innovation driven responses has become more critical than ever.
              India requires not just treatment strategies— but cohesive action across hospital
              systems, health-tech providers, payers, and regulators. BEAT 2025 is envisioned as
              a high-level B2B platform that brings these decision-makers together. It aims to
              bridge the gaps between policy and practice, foster strategic partnerships, and
              accelerate scalable innovations in cardiac care.
            </p>
          </div>
        </div>

        {/* Tablet Layout - Stacked with more space */}
        <div className="hidden sm:flex lg:hidden flex-col items-center gap-8 py-8">
          <div className="w-full flex justify-center">
            <Image
              src="/overview-foreground.png"
              alt="Overview Illustration"
              className="w-[50%] max-w-[320px]"
              priority
              width={320}
              height={320}
            />
          </div>
          
          <div className="w-full max-w-4xl">
            <p className="text-gray-600 leading-relaxed text-lg text-justify px-4">
              With CVD&apos;s accounting for over 28% of total deaths in India, the economic,
              infrastructural, and institutional implications are impossible to ignore. As the
              burden shifts toward younger, working-age populations, the need for systemic,
              policy-led, and innovation driven responses has become more critical than ever.
              India requires not just treatment strategies— but cohesive action across hospital
              systems, health-tech providers, payers, and regulators. BEAT 2025 is envisioned as
              a high-level B2B platform that brings these decision-makers together. It aims to
              bridge the gaps between policy and practice, foster strategic partnerships, and
              accelerate scalable innovations in cardiac care.
            </p>
          </div>
        </div>

        {/* Desktop/Laptop Layout - Original Design Preserved */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-2 mt-0 py-6">
          {/* Left image - Original sizing and positioning */}
          <div className="flex-shrink-0 w-full lg:w-2/5 flex justify-center">
            <Image
              src="/overview-foreground.png"
              alt="Overview Illustration"
              className="w-[60%] max-w-sm"
              priority
              width={350}
              height={350}
            />
          </div>
          
          {/* Right text - Original layout preserved */}
          <div className="w-full lg:w-3/5 text-center lg:text-justify">
            <p className="text-gray-600 leading-relaxed text-lg mr-18">
              With CVD&apos;s accounting for over 28% of total deaths in India, the economic,
              infrastructural, and institutional implications are impossible to ignore. As the
              burden shifts toward younger, working-age populations, the need for systemic,
              policy-led, and innovation driven responses has become more critical than ever.
              India requires not just treatment strategies— but cohesive action across hospital
              systems, health-tech providers, payers, and regulators. BEAT 2025 is envisioned as
              a high-level B2B platform that brings these decision-makers together. It aims to
              bridge the gaps between policy and practice, foster strategic partnerships, and
              accelerate scalable innovations in cardiac care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;