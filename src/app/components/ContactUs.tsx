// // app/components/ContactUs.tsx or src/components/ContactUs.tsx
// 'use client';

// import { Mail, Phone, User } from 'lucide-react';
// import Image from 'next/image';

// const people = {
//   partnership: [
//     {
//       name: 'Pinky Chahar',
//       email: 'pinky.chahar@voiceofhealthcare.org',
//       phone: '9599193575',
//     },
//     {
//       name: 'Khushbu Sharma',
//       email: 'Khushbu.sh@voiceofhealthcare.org',
//       phone: '9599193575',
//     },
//   ],
//   delegate: [
//     {
//       name: 'Pinky Chahar',
//       email: 'pinky.chahar@voiceofhealthcare.org',
//       phone: '9599193575',
//     },
//     {
//       name: 'Khushbu Sharma',
//       email: 'Khushbu.sh@voiceofhealthcare.org',
//       phone: '9599193575',
//     },
//     {
//       name: 'Khushbu Sharma',
//       email: 'Khushbu.sh@voiceofhealthcare.org',
//       phone: '9599193575',
//     },
//   ],
// };

// export default function ContactUs() {
//   return (
//     <section className="relative py-12 px-4 bg-[#EDDEBA] overflow-hidden">
//       {/* Background branch image */}
//       <Image
//         src="/CUbranch.png"
//         alt="Branch Background"
//         fill
//         quality={100}
//         className="opacity-80"
//         style={{
//           objectFit: 'scale-down',
//           transform: 'translate(-120px, 180px)', // ← Adjust this to move left/down
//         }}
//       />

//       <div>
//         <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

//         <div className="relative w-full flex justify-center items-center py-8 bg-[#EDDEBA] overflow-hidden">
//           {/* Background oversized text */}
//           <h1
//             className="absolute text-[67px] font-semibold opacity-30 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//             style={{
//               fontFamily: "Playfair Display",
//               WebkitTextStroke: "1px #9ca3af",
//               color: "transparent"
//             }}
//           >
//             Contact Us
//           </h1>

//           {/* Center bold blue title with lines */}
//           <div className="flex items-center z-10">
//             {/* Left tapered line */}
//             <div className="relative mr-2">
//               <div
//                 className="w-30 bg-[#A21B43] rounded-full"
//                 style={{
//                   height: '6px',
//                   clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                 }}
//               ></div>
//             </div>

//             <h2 className="text-[32px] font-semibold text-[#012CDB] px-4"
//               style={{ fontFamily: "Playfair Display" }}>Contact Us</h2>

//             {/* Right tapered line */}
//             <div className="relative ml-2">
//               <div
//                 className="w-30 bg-[#A21B43] rounded-full"
//                 style={{
//                   height: '6px',
//                   clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto text-center mt-6">
//         {/* Partnership Section */}

//         <div className="max-w-4xl mx-auto mb-10">
//           <div className="bg-[#A15B5B] rounded-2xl px-8 py-2 text-white shadow-lg">
//             {/* Header */}
//             <div className="text-center mb-6">
//               <div className="bg-white bg-opacity-20 rounded-full px-44 inline-block">
//                 <h3 className="text-lg font-semibold tracking-wide text-[#A15B5B]" style={{ fontFamily: "Playfair Display" }}>
//                   FOR PARTNERSHIP
//                 </h3>
//               </div>
//             </div>

//             {/* Contact Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {people.partnership.map((person, index) => (
//                 <div key={index} className="space-y-1">
//                   {/* Name */}
//                   <div className="flex items-center gap-2">
//                     <div className=" bg-opacity-20 p-2 rounded">
//                       <User className="w-4 h-4" />
//                     </div>
//                     <span className="text-md font-semibold" >
//                       {person.name}
//                     </span>
//                   </div>

//                   {/* Email */}
//                   <div className="flex items-center gap-2">
//                     <div className=" bg-opacity-20 p-2 rounded">
//                       <Mail className="w-4 h-4" />
//                     </div>
//                     <span className="text-base" >
//                       {person.email}
//                     </span>
//                   </div>

//                   {/* Phone */}
//                   <div className="flex items-center gap-2">
//                     <div className=" bg-opacity-20 p-2 rounded">
//                       <Phone className="w-4 h-4" />
//                     </div>
//                     <span className="text-base font-semibold" >
//                       {person.phone}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//               {/* Duplicate for the second column as shown in image */}
//             </div>
//           </div>
//         </div>

//         {/* Delegate Section */}

//         <div className="max-w-6xl mx-auto mt-16">
//           <div className="bg-[#A15B5B] rounded-2xl px-8 py-2 text-white shadow-lg">
//             {/* Header */}
//             <div className="text-center mb-6">
//               <div className="bg-white bg-opacity-20 rounded-full px-44 inline-block">
//                 <h3 className="text-lg font-semibold tracking-wide text-[#A15B5B]" style={{ fontFamily: "Playfair Display" }}>
//                   FOR DELEGATES
//                 </h3>
//               </div>
//             </div>

//             {/* Contact Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {people.delegate.map((person, index) => (
//                 <div key={index} className="space-y-1">
//                   {/* Name */}
//                   <div className="flex items-center gap-2">
//                     <div className=" bg-opacity-20 p-2 rounded">
//                       <User className="w-4 h-4" />
//                     </div>
//                     <span className="text-md font-semibold">
//                       {person.name}
//                     </span>
//                   </div>

//                   {/* Email */}
//                   <div className="flex items-center gap-2">
//                     <div className=" bg-opacity-20 p-2 rounded">
//                       <Mail className="w-4 h-4" />
//                     </div>
//                     <span className="text-base">
//                       {person.email}
//                     </span>
//                   </div>

//                   {/* Phone */}
//                   <div className="flex items-center gap-2">
//                     <div className=" bg-opacity-20 p-2 rounded">
//                       <Phone className="w-4 h-4" />
//                     </div>
//                     <span className="text-base font-semibold" >
//                       {person.phone}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//               {/* Duplicate for the second column as shown in image */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// app/components/ContactUs.tsx or src/components/ContactUs.tsx
// 'use client';

// import { Mail, Phone, User } from 'lucide-react';
// import Image from 'next/image';

// const people = {
//   partnership: [
//     {
//       name: 'Pinky Chahar',
//       designation: 'Director',
//       email: 'pinky.chahar@voiceofhealthcare.org',
//       phone: '9599193575',
//     },
//     {
//       name: 'Khushbu Sharma',
//       designation: 'joint Director',
//       email: 'Khushbu.sh@voiceofhealthcare.org',
//       phone: '8407982899',
//     },
//   ],
//   delegate: [
//     {
//       name: 'Katyayni Sinha',
//       designation: 'Manager Administration',
//       email: 'katyayni.s@voiceofhealthcare.org',
//       phone: '8789925401',
//     },

//   ],
// };

// export default function ContactUs() {
//   return (
//     <section className="relative py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-4 bg-[#EDDEBA] overflow-hidden">
//       {/* Background branch image - responsive positioning */}
//       <Image
//         src="/CUbranch.png"
//         alt="Branch Background"
//         fill
//         quality={100}
//         className="opacity-60 sm:opacity-70 lg:opacity-80 hidden sm:block md:hidden"
//         style={{
//           objectFit: 'scale-down',
//           transform: 'translate(-60px, 80px) scale(0.6)', // Mobile positioning
//         }}
//       />

//       {/* Tablet positioning */}
//       <Image
//         src="/CUbranch.png"
//         alt="Branch Background"
//         fill
//         quality={100}
//         className="opacity-70 hidden sm:block md:hidden"
//         style={{
//           objectFit: 'scale-down',
//           transform: 'translate(-80px, 120px) scale(0.8)', // Tablet positioning
//         }}
//       />

//       {/* Desktop positioning - original */}
//       <Image
//         src="/CUbranch.png"
//         alt="Branch Background"
//         fill
//         quality={100}
//         className="opacity-80 hidden lg:block"
//         style={{
//           objectFit: 'scale-down',
//           transform: 'translate(-250px, 180px)', // Original desktop positioning
//         }}
//       />

//       <div>
//                 {/* <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link> */}

//                 {/* Header Section - Responsive */}
//                 <div className="relative w-full flex justify-center items-center py-8 sm:py-10 lg:py-12 bg-transparent overflow-hidden">
//                     {/* Background oversized text - responsive sizing */}
//                     <h1
//                         className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                         style={{
//                             fontFamily: "Playfair Display",
//                             WebkitTextStroke: "1px #9ca3af",
//                             color: "transparent"
//                         }}
//                     >
//                         Contact Us
//                     </h1>

//                     {/* Center bold blue title with lines - responsive */}
//                     <div className="flex items-center z-10 px-4">
//                         {/* Left tapered line - responsive width */}
//                         <div className="relative mr-2 sm:mr-3">
//                             <div
//                                 className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
//                                 style={{
//                                     height: '4px',
//                                     clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                                 }}
//                             ></div>
//                         </div>

//                         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#012CDB] text-center whitespace-nowrap"
//                             style={{ fontFamily: "Playfair Display" }}>
//                             Contact Us
//                         </h2>

//                         {/* Right tapered line - responsive width */}
//                         <div className="relative ml-2 sm:ml-3">
//                             <div
//                                 className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
//                                 style={{
//                                     height: '4px',
//                                     clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
//                                 }}
//                             ></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//       <div className="relative z-10 max-w-7xl mx-auto text-center mt-3 sm:mt-4 lg:mt-6">
//         {/* Partnership Section */}
//         <div className="max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10">
//           <div className="bg-[#A15B5B] rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-2 text-white shadow-lg">
//             {/* Header - responsive button */}
//             <div className="text-center mb-4 sm:mb-5 lg:mb-6">
//               <div className="bg-white bg-opacity-20 rounded-full px-6 sm:px-16 md:px-32 lg:px-44 inline-block">
//                 <h3 
//                   className="text-sm sm:text-base lg:text-lg font-semibold tracking-wide text-[#A15B5B]" 
//                   style={{ fontFamily: "Playfair Display" }}
//                 >
//                   FOR SPEAKERSHIP & PARTNERSHIPS
//                 </h3>
//               </div>
//             </div>

//             {/* Contact Cards - responsive grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
//               {people.partnership.map((person, index) => (
//                 <div key={index} className="space-y-1">
//                   {/* Name */}
//                   <div className="flex items-center gap-2">
//                     <div className="bg-opacity-20 p-1.5 sm:p-2 rounded">
//                       <User className="w-3 h-3 sm:w-4 sm:h-4 font-semibold" />
//                     </div>
//                     <span className="text-sm sm:text-base lg:text-md font-semibold">
//                       {person.name}
//                     </span>
//                   </div>

//                   {/* Designation */}
//                   <div className="flex items-center gap-2">
//                     <div className="bg-opacity-20 p-1.5 sm:p-2 rounded">
//                       <User className="w-3 h-3 sm:w-4 sm:h-4" />
//                     </div>
//                     <span className="text-xs sm:text-sm lg:text-base break-all">
//                       {person.designation}
//                     </span>
//                   </div>

//                   {/* Email */}
//                   <div className="flex items-start gap-2">
//                     <div className="bg-opacity-20 p-1.5 sm:p-2 rounded">
//                       <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
//                     </div>
//                     <span className="text-xs sm:text-sm lg:text-base break-all">
//                       {person.email}
//                     </span>
//                   </div>

//                   {/* Phone */}
//                   <div className="flex items-center gap-2">
//                     <div className="bg-opacity-20 p-1.5 sm:p-2 rounded">
//                       <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
//                     </div>
//                     <span className="text-xs sm:text-sm lg:text-base break-all">
//                       {person.phone}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Delegate Section */}
//         <div className="max-w-5xl mx-auto mt-8 sm:mt-12 lg:mt-16">
//           <div className="bg-[#A15B5B] rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-2 text-white shadow-lg">
//             {/* Header - responsive button */}
//             <div className="text-center mb-4 sm:mb-5 lg:mb-6">
//               <div className="bg-white bg-opacity-20 rounded-full px-8 sm:px-20 md:px-32 lg:px-44 inline-block">
//                 <h3 
//                   className="text-sm sm:text-base lg:text-lg font-semibold tracking-wide text-[#A15B5B]" 
//                   style={{ fontFamily: "Playfair Display" }}
//                 >
//                   FOR DELEGATES & AWARDS
//                 </h3>
//               </div>
//             </div>

//             {/* Contact Cards - responsive grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//               {people.delegate.map((person, index) => (
//                 <div key={index} className="space-y-1">
//                   {/* Name */}
//                   <div className="flex items-center gap-2">
//                     <div className="bg-opacity-20 p-1.5 sm:p-2 rounded">
//                       <User className="w-3 h-3 sm:w-4 sm:h-4 font-semibold" />
//                     </div>
//                     <span className="text-sm sm:text-base lg:text-md font-semibold">
//                       {person.name}
//                     </span>
//                   </div>

//                   {/* Designation */}
//                   <div className="flex items-center gap-2">
//                     <div className="bg-opacity-20 p-1.5 sm:p-2 rounded">
//                       <User className="w-3 h-3 sm:w-4 sm:h-4" />
//                     </div>
//                     <span className="text-xs sm:text-sm lg:text-base break-all">
//                       {person.designation}
//                     </span>
//                   </div>

//                   {/* Email */}
//                   <div className="flex items-start gap-2">
//                     <div className="bg-opacity-20 p-1.5 sm:p-2 rounded">
//                       <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
//                     </div>
//                     <span className="text-xs sm:text-sm lg:text-base break-all">
//                       {person.email}
//                     </span>
//                   </div>

//                   {/* Phone */}
//                   <div className="flex items-center gap-2">
//                     <div className="bg-opacity-20 p-1.5 sm:p-2 rounded">
//                       <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
//                     </div>
//                     <span className="text-xs sm:text-sm lg:text-base break-all">
//                       {person.phone}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// app/components/ContactUs.tsx
'use client';

import { Mail, Phone, User } from 'lucide-react';
import Image from 'next/image';

export default function ContactUs() {
  const people = {
    partnership: [
      {
        name: 'Pinky Chahar',
        designation: 'Director',
        email: 'pinky.chahar@voiceofhealthcare.org',
        phone: '9599193575',
      },
      {
        name: 'Khushbu Sharma',
        designation: 'Joint Director',
        email: 'Khushbu.sh@voiceofhealthcare.org',
        phone: '8407982899',
      },
    ],
    delegate: [
      {
        name: 'Katyayni Sinha',
        designation: 'Manager Administration',
        email: 'katyayni.s@voiceofhealthcare.org',
        phone: '8789925401',
      },
    ],
  };

  return (
    <section className="relative py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-4 bg-[#EDDEBA] overflow-hidden">
      {/* Background Images */}
      <Image
        src="/CUbranch.png"
        alt="Branch Background"
        fill
        quality={100}
        className="opacity-60 sm:opacity-70 lg:opacity-80 hidden sm:block md:hidden"
        style={{
          objectFit: 'scale-down',
          transform: 'translate(-60px, 80px) scale(0.6)',
        }}
      />
      <Image
        src="/CUbranch.png"
        alt="Branch Background"
        fill
        quality={100}
        className="opacity-70 hidden sm:block md:hidden"
        style={{
          objectFit: 'scale-down',
          transform: 'translate(-80px, 120px) scale(0.8)',
        }}
      />
      <Image
        src="/CUbranch.png"
        alt="Branch Background"
        fill
        quality={100}
        className="opacity-80 hidden lg:block"
        style={{
          objectFit: 'scale-down',
          transform: 'translate(-250px, 180px)',
        }}
      />

      {/* Header Section */}
      <div className="relative w-full flex justify-center items-center py-8 sm:py-10 lg:py-12 bg-transparent overflow-hidden">
        <h1
          className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
          style={{
            fontFamily: 'var(--font-playfair)', // ✅ use Next.js font variable
            WebkitTextStroke: '1px #9ca3af',
            color: 'transparent',
          }}
        >
          Contact Us
        </h1>

        <div className="flex items-center z-10 px-4">
          <div className="relative mr-2 sm:mr-3">
            <div
              className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
              style={{
                height: '4px',
                clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)',
              }}
            />
          </div>

          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#012CDB] text-center whitespace-nowrap"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Contact Us
          </h2>

          <div className="relative ml-2 sm:ml-3">
            <div
              className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
              style={{
                height: '4px',
                clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mt-3 sm:mt-4 lg:mt-6">
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <div className="bg-[#A15B5B] rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-2 text-white shadow-lg">
            <div className="text-center mb-4 sm:mb-5 lg:mb-6">
              <div className="bg-white bg-opacity-20 rounded-full px-6 sm:px-16 md:px-32 lg:px-44 inline-block">
                <h3
                  className="text-[10px] sm:text-base lg:text-lg font-semibold tracking-wide text-[#A15B5B]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  FOR SPEAKERSHIP & PARTNERSHIPS
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {people.partnership.map((person, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 font-semibold" />
                    <span className="text-[12px] sm:text-base lg:text-md font-semibold">
                      {person.name}
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm lg:text-base break-all">
                      {person.designation}
                    </span>
                  </div> */}
                  <div className="flex items-start gap-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm lg:text-base break-all">
                      {person.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm lg:text-base break-all">
                      {person.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Delegate Section */}
        <div className="max-w-xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-[#A15B5B] rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-2 text-white shadow-lg">
            <div className="text-center mb-4 sm:mb-5 lg:mb-6">
              <div className="bg-white bg-opacity-20 rounded-full px-8 sm:px-10 md:px-22 lg:px-26 inline-block">
                <h3
                  className="text-[10px] sm:text-base lg:text-lg font-semibold tracking-wide text-[#A15B5B]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  FOR DELEGATES & AWARDS
                </h3> 
              </div>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {people.delegate.map((person, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 font-semibold" />
                    <span className="text-sm sm:text-base lg:text-md font-semibold">
                      {person.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm lg:text-base break-all">
                      {person.designation}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm lg:text-base break-all">
                      {person.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm lg:text-base break-all">
                      {person.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
  {people.delegate.map((person, index) => (
    <div key={index} className="space-y-1">
      {/* Name */}
      <div className="flex items-center gap-2">
        <User className="w-3 h-3 sm:w-4 sm:h-4 font-semibold shrink-0" />
        <span className="text-[12px] sm:text-base lg:text-md font-semibold">
          {person.name}
        </span>
      </div>

      {/* Designation - single line */}
      {/* <div className="flex items-center gap-2">
        <User className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
        <span className="text-xs sm:text-sm lg:text-base break-words">
          {person.designation}
        </span>
      </div> */}

      {/* Email */}
      <div className="flex items-center gap-2">
        <Mail className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
        <span className="text-xs sm:text-sm lg:text-base break-words">
          {person.email}
        </span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2">
        <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
        <span className="text-xs sm:text-sm lg:text-base">
          {person.phone}
        </span>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
}




