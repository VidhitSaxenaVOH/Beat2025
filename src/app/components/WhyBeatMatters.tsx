// components/WhyBeatMatters.tsx
'use client';

import { useEffect, useState } from 'react';
import { Copyright } from 'lucide-react';

const facts = [
  "CVDs account for 27% of all deaths in India.",
  "Heart attacks strike Indians 10 years earlier than in Western populations.",
  "50% of heart attacks in Indian men occur before age 50, and 25% before age 40.",
  "India bears ~60% of the global heart disease burden with less than 20% of the world’s population.",
  "The age standardized CVD death rate in India is 272 per 100,000, higher than the global average of 235.",
  "Among Indians aged 30+, 1 in 3 has hypertension but only 20% manage it effectively.",
  "43% of people with diabetes also suffer from hypertension, increasing their cardiac risk multifold.",
];

export default function WhyBeatMatters() {
  return (
    <section className="relative bg-[#EDDEBA] py-8 pb-16 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/sinus-wave.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-black">
        <div>
                <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

                <div className="relative w-full flex justify-center items-center py-12 bg-[#EDDEBA] overflow-hidden">
                    {/* Background oversized text - very subtle */}
                    <h1
                        className="absolute text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
                        style={{
                            fontFamily: "Playfair Display",
                            WebkitTextStroke: "1px #9ca3af",
                            color: "transparent"
                        }}
                    >
                        Why Beat 2025 Matters 
                    </h1>

                    {/* Center bold blue title with lines */}
                    <div className="flex items-center z-10">
                        {/* Left tapered line */}
                        <div className="relative mr-2">
                            <div
                                className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
                                style={{
                                    height: '3px',
                                    clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
                                }}
                            ></div>
                        </div>

                        <h2 className="text-[32px] font-semibold text-[#012CDB]"
                            style={{ fontFamily: "Playfair Display" }}>Why Beat 2025 Matters </h2>

                        {/* Right tapered line */}
                        <div className="relative ml-2">
                            <div
                                className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
                                style={{
                                    height: '3px',
                                    clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-3">
          Cardiovascular diseases (CVDs) are not just a health issue in India.
        </p>
        <p className="font-extrabold uppercase text-sm md:text-base mb-10 tracking-wide">
          They’re a national emergency
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left max-w-4xl mx-auto">
  {facts.map((fact, index) => (
    <div key={index} className="relative flex items-start space-x-6 space-y-10">
      {/* Outlined background number */}
      <div className="absolute -left-6 -top-12  text-[110px] font-bold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]" style={{

                            WebkitTextStroke: "1px #9ca3af",
                            color: "transparent"
                        }}>
        {`0${index + 1}`}
      </div>

      {/* Foreground solid number */}
      <div className="text-7xl font-semibold text-black relative z-10">{`0${index + 1}`}</div>

      <p className="text-base md:text-lg leading-relaxed pl-2 text-gray-600 relative z-10">{fact}</p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}




// components/WhyBeatMatters.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { Copyright } from 'lucide-react';

// const facts = [
//   "CVDs account for 27% of all deaths in India.",
//   "Heart attacks strike Indians 10 years earlier than in Western populations.",
//   "50% of heart attacks in Indian men occur before age 50, and 25% before age 40.",
//   "India bears ~60% of the global heart disease burden with less than 20% of the world's population.",
//   "The age standardized CVD death rate in India is 272 per 100,000, higher than the global average of 235.",
//   "Among Indians aged 30+, 1 in 3 has hypertension but only 20% manage it effectively.",
//   "43% of people with diabetes also suffer from hypertension, increasing their cardiac risk multifold.",
// ];

// export default function WhyBeatMatters() {
//   return (
//     <section className="relative bg-[#EDDEBA] py-8 pb-16 overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/sinus-wave.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content wrapper */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
//         <div>
//           <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

//           <div className="relative w-full flex justify-center items-center py-8 sm:py-10 md:py-12 bg-[#EDDEBA] overflow-hidden">
//             {/* Background oversized text - very subtle */}
//             <h1
//               className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//               style={{
//                 fontFamily: "Playfair Display",
//                 WebkitTextStroke: "1px #9ca3af",
//                 color: "transparent"
//               }}
//             >
//               Why Beat 2025 Matters 
//             </h1>

//             {/* Center bold blue title with lines */}
//             <div className="flex items-center z-10">
//               {/* Left tapered line - hidden on mobile */}
//               <div className="relative mr-2 ">
//                 <div
//                   className="w-20 sm:w-24 md:w-30 bg-[#A21B43] rounded-full"
//                   style={{
//                     height: '4px sm:h-5 md:h-6',
//                     clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                   }}
//                 ></div>
//               </div>

//               <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#012CDB]"
//                   style={{ fontFamily: "Playfair Display" }}>Why Beat 2025 Matters </h2>

//               {/* Right tapered line - hidden on mobile */}
//               <div className="relative ml-2">
//                 <div
//                   className="w-20 sm:w-24 md:w-30 bg-[#A21B43] rounded-full"
//                   style={{
//                     height: '4px sm:h-5 md:h-6',
//                     clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-3 px-2 sm:px-0">
//           Cardiovascular diseases (CVDs) are not just a health issue in India.
//         </p>
//         <p className="font-extrabold uppercase text-xs sm:text-sm md:text-base mb-8 sm:mb-10 tracking-wide">
//           They're a national emergency
//         </p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 text-left max-w-4xl mx-auto px-2 sm:px-0">
//           {facts.map((fact, index) => (
//             <div key={index} className="relative flex items-start space-x-4 sm:space-x-6">
//               {/* Outlined background number */}
//               <div className="absolute -left-4 sm:-left-6 -top-4 sm:-top-6 text-7xl sm:text-8xl md:text-[110px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]" style={{
//                 WebkitTextStroke: "1px #9ca3af",
//                 color: "transparent"
//               }}>
//                 {`0${index + 1}`}
//               </div>

//               {/* Foreground solid number */}
//               <div className="text-5xl sm:text-6xl md:text-7xl font-semibold text-black relative z-10">{`0${index + 1}`}</div>

//               <p className="text-sm sm:text-base md:text-lg leading-relaxed pl-2 text-gray-600 relative z-10 mt-2 sm:mt-0">{fact}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// 'use client';

// import { Copyright } from 'lucide-react';

// const facts = [
//   "CVDs account for 27% of all deaths in India.",
//   "Heart attacks strike Indians 10 years earlier than in Western populations.",
//   "50% of heart attacks in Indian men occur before age 50, and 25% before age 40.",
//   "India bears ~60% of the global heart disease burden with less than 20% of the world’s population.",
//   "The age standardized CVD death rate in India is 272 per 100,000, higher than the global average of 235.",
//   "Among Indians aged 30+, 1 in 3 has hypertension but only 20% manage it effectively.",
//   "43% of people with diabetes also suffer from hypertension, increasing their cardiac risk multifold.",
// ];

// export default function WhyBeatMatters() {
//   return (
//     <section className="relative bg-[#EDDEBA] py-8 pb-16 overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/sinus-wave.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content wrapper */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-black">
//         {/* Section Title */}
//         <div className="relative w-full flex justify-center items-center py-8 sm:py-12 bg-[#EDDEBA] overflow-hidden">
//           {/* Background oversized text */}
//           <h1
//             className="absolute text-[32px] sm:text-[48px] md:text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//             style={{
//               fontFamily: 'Playfair Display',
//               WebkitTextStroke: '1px #9ca3af',
//               color: 'transparent',
//             }}
//           >
//             Why Beat 2025 Matters
//           </h1>

//           {/* Foreground title with lines */}
//           <div className="flex items-center z-10 flex-wrap justify-center gap-2">
//             {/* Left tapered line */}
//             <div
//               className="w-10 sm:w-20 md:w-30 bg-[#A21B43] rounded-full"
//               style={{
//                 height: '4px',
//                 clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)',
//               }}
//             ></div>

//             <h2
//               className="text-lg sm:text-2xl md:text-[32px] font-semibold text-[#012CDB] text-center"
//               style={{ fontFamily: 'Playfair Display' }}
//             >
//               Why Beat 2025 Matters
//             </h2>

//             {/* Right tapered line */}
//             <div
//               className="w-10 sm:w-20 md:w-30 bg-[#A21B43] rounded-full"
//               style={{
//                 height: '4px',
//                 clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)',
//               }}
//             ></div>
//           </div>
//         </div>

//         {/* Intro text */}
//         <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-3 px-2">
//           Cardiovascular diseases (CVDs) are not just a health issue in India.
//         </p>
//         <p className="font-extrabold uppercase text-xs sm:text-sm md:text-base mb-10 tracking-wide">
//           They’re a national emergency
//         </p>

//         {/* Facts Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left max-w-4xl mx-auto">
//           {facts.map((fact, index) => (
//             <div key={index} className="relative flex items-start gap-4 sm:gap-6">
//               {/* Outlined number */}
//               <div
//                 className="absolute -left-4 sm:-left-6 -top-8 sm:-top-10 text-[50px] sm:text-[80px] md:text-[110px] font-bold opacity-50 select-none tracking-[0.001em] text-[#4f4f4f]"
//                 style={{
//                   WebkitTextStroke: '1px #9ca3af',
//                   color: 'transparent',
//                 }}
//               >
//                 {`0${index + 1}`}
//               </div>

//               {/* Solid number */}
//               <div className="text-3xl sm:text-5xl md:text-7xl font-semibold text-black relative z-10">
//                 {`0${index + 1}`}
//               </div>

//               {/* Fact text */}
//               <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 relative z-10">
//                 {fact}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
