// import Image from "next/image";

// type Leader = {
//     name: string;
//     title: string;
//     image: string;
// };

// type LeaderCategory = {
//     heading: string;
//     leaders: Leader[];
// };

// const LeadersSection = () => {
//     const sections: LeaderCategory[] = [
//         {
//             heading: "Chief Guest",
//             leaders: [
//                 {
//                     name: "Dr. Devi Prasad Shetty",
//                     title: "Founder, Chairman & Senior Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//                     image: "/images/chief-guest.jpg",
//                 },
//             ],
//         },
//         {
//             heading: "Guests of Honor",
//             leaders: [
//                 {
//                     name: "Dr. O.K. Yadav",
//                     title: "Cardiac Surgeon, Escorts Heart Institute, New Delhi, India",
//                     image: "/images/guest1.jpg",
//                 },
//                 {
//                     name: "Dr. V.K. Mehra",
//                     title: "Chief Cardiac Surgeon, Manipal Heart Institute, Kathmandu, Nepal ",
//                     image: "/images/guest2.jpg",
//                 },
//             ],
//         },
//         {
//             heading: "Special Guests",
//             leaders: [
//                 {
//                     name: "Dr. Rukmini Singh",
//                     title: "Chairman, Building Healthy Society Initiative",
//                     image: "/images/special1.jpg",
//                 },
//                 {
//                     name: "Dr. T.S. Rao",
//                     title: "Founder, Indian Cardiology Forum",
//                     image: "/images/special2.jpg",
//                 },
//                 {
//                     name: "Dr. Shreedhar Shetty",
//                     title: "Senior Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//                     image: "/images/special3.jpg",
//                 },
//                 {
//                     name: "Dr. Pramod Kumar",
//                     title: "Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//                     image: "/images/special4.jpg",
//                 },
//             ],
//         },
//         {
//             heading: "Our Speakers",
//             leaders: [
//                 {
//                     name: "Dr. Devi Prasad Shetty",
//                     title: "Founder, Chairman & Senior Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//                     image: "/images/speaker1.jpg",
//                 },
//                 {
//                     name: "Dr. John Doe",
//                     title: "Senior Cardiac Surgeon, Narayana Health, Bengaluru",
//                     image: "/images/speaker2.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//                 {
//                     name: "Dr. Jane Smith",
//                     title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//                     image: "/images/speaker3.jpg",
//                 },
//             ],
//         },
//     ];

//     function clsx(arg0: { "mb-12": boolean; }): string | undefined {
//         throw new Error("Function not implemented.");
//     }

//     return (
//         <section className="relative bg-[#EDDEBA] py-12 pb-14">
//             {/* Background vectors (Add later) */}
//             <div className="absolute left-0 top-0 h-full w-32">{/* vector */}</div>
//             <div className="absolute right-0 top-0 h-full w-32">{/* vector */}</div>

//             <div className="max-w-5xl mx-auto px-4 text-center">
//                 <div>
//                     <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

//                     <div className="relative w-full flex justify-center items-center pb-8 bg-[#EDDEBA] overflow-hidden">
//                         {/* Background oversized text - very subtle */}
//                         <h1
//                             className="absolute text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                             style={{
//                                 fontFamily: "Playfair Display",
//                                 WebkitTextStroke: "1px #9ca3af",
//                                 color: "transparent"
//                             }}
//                         >
//                             Leaders We've Engaged
//                         </h1>

//                         {/* Center bold blue title with lines */}
//                         <div className="flex items-center z-10">
//                             {/* Left tapered line */}
//                             <div className="relative mr-2">
//                                 <div
//                                     className="w-30 bg-[#A21B43] rounded-full"
//                                     style={{
//                                         height: '6px',
//                                         clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                                     }}
//                                 ></div>
//                             </div>

//                             <h2 className="text-[32px] font-semibold text-[#012CDB]"
//                                 style={{ fontFamily: "Playfair Display" }}>Leaders We've Engaged</h2>

//                             {/* Right tapered line */}
//                             <div className="relative ml-2">
//                                 <div
//                                     className="w-30 bg-[#A21B43] rounded-full"
//                                     style={{
//                                         height: '6px',
//                                         clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
//                                     }}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <p className="text-gray-800 max-w-4xl text-lg font-semibold mx-auto mb-10">
//                     Highlighting our continued engagement with top cardiac experts shaping the future of heart health.
//                 </p>

//                 {sections.map((section, idx) => (
//                     <div key={idx}
//                         className={idx !== sections.length - 1 ? "mb-12" : ""}>
//                         <h3 className="text-xl font-bold mb-8">{section.heading}</h3>
//                         <div
//                             className={`grid gap-4 ${section.leaders.length === 1
//                                     ? "grid-cols-1 place-items-center"
//                                     : section.leaders.length === 2
//                                         ? "grid-cols-1 sm:grid-cols-2"
//                                         : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
//                                 }`}
//                         >
//                             {section.leaders.map((leader, i) => (
//                                 <div key={i} className="text-center">
//                                     <div className="w-40 h-40 mx-auto relative rounded-lg overflow-hidden">
//                                         <Image
//                                             src={leader.image}
//                                             alt={leader.name}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                     </div>
//                                     <div className="max-w-xl mx-auto">
//                                         <h4 className="mt-4 font-semibold">{leader.name}</h4>
//                                         <p className="text-sm text-gray-700 mb-2">{leader.title}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default LeadersSection;


// import Image from "next/image";

// type Leader = {
//   name: string;
//   title: string;
//   image: string;
// };

// type LeaderCategory = {
//   heading: string;
//   leaders: Leader[];
// };

// const LeadersSection = () => {
//   const sections: LeaderCategory[] = [
//     {
//       heading: "Chief Guest",
//       leaders: [
//         {
//           name: "Dr. Devi Prasad Shetty",
//           title:
//             "Founder, Chairman & Senior Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//           image: "/images/chief-guest.jpg",
//         },
//       ],
//     },
//     {
//       heading: "Guests of Honor",
//       leaders: [
//         {
//           name: "Dr. O.K. Yadav",
//           title:
//             "Cardiac Surgeon, Escorts Heart Institute, New Delhi, India",
//           image: "/images/guest1.jpg",
//         },
//         {
//           name: "Dr. V.K. Mehra",
//           title:
//             "Chief Cardiac Surgeon, Manipal Heart Institute, Kathmandu, Nepal ",
//           image: "/images/guest2.jpg",
//         },
//       ],
//     },
//     {
//       heading: "Special Guests",
//       leaders: [
//         {
//           name: "Dr. Rukmini Singh",
//           title: "Chairman, Building Healthy Society Initiative",
//           image: "/images/special1.jpg",
//         },
//         {
//           name: "Dr. T.S. Rao",
//           title: "Founder, Indian Cardiology Forum",
//           image: "/images/special2.jpg",
//         },
//         {
//           name: "Dr. Shreedhar Shetty",
//           title:
//             "Senior Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//           image: "/images/special3.jpg",
//         },
//         {
//           name: "Dr. Pramod Kumar",
//           title:
//             "Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//           image: "/images/special4.jpg",
//         },
//       ],
//     },
//     {
//       heading: "Our Speakers",
//       leaders: [
//         {
//           name: "Dr. Devi Prasad Shetty",
//           title:
//             "Founder, Chairman & Senior Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//           image: "/images/speaker1.jpg",
//         },
//         {
//           name: "Dr. John Doe",
//           title:
//             "Senior Cardiac Surgeon, Narayana Health, Bengaluru",
//           image: "/images/speaker2.jpg",
//         },
//         {
//           name: "Dr. Jane Smith",
//           title:
//             "Consultant Cardiologist, Narayana Health, Bengaluru",
//           image: "/images/speaker3.jpg",
//         },
//         {
//           name: "Dr. Jane Smith",
//           title:
//             "Consultant Cardiologist, Narayana Health, Bengaluru",
//           image: "/images/speaker3.jpg",
//         },
//         // repeated speaker entries...
//       ],
//     },
//   ];

//   return (
//     <section className="relative bg-[#EDDEBA] py-12 pb-14">
//       {/* Background vectors (placeholder for future graphics) */}
//       <div className="absolute left-0 top-0 h-full w-32" />
//       <div className="absolute right-0 top-0 h-full w-32" />

//       <div className="max-w-5xl mx-auto px-4 text-center">
//         {/* Heading */}
//         <div>
//                 <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

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
//                         Leaders We&apos;ve Engaged
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
//                             Leaders We&apos;ve Engaged
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

//         <p className="text-gray-800 max-w-4xl text-base sm:text-lg font-semibold mx-auto mb-10 px-2">
//           Highlighting our continued engagement with top cardiac
//           experts shaping the future of heart health.
//         </p>

//         {/* Leader sections */}
//         {sections.map((section, idx) => (
//           <div
//             key={idx}
//             className={idx !== sections.length - 1 ? "mb-12" : ""}
//           >
//             <h3 className="text-lg sm:text-xl font-bold mb-8">
//               {section.heading}
//             </h3>
//             <div
//               className={`grid gap-6 ${
//                 section.leaders.length === 1
//                   ? "grid-cols-1 place-items-center"
//                   : section.leaders.length === 2
//                   ? "grid-cols-1 sm:grid-cols-2 gap-y-8"
//                   : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8"
//               }`}
//             >
//               {section.leaders.map((leader, i) => (
//                 <div
//                   key={i}
//                   className="text-center flex flex-col items-center"
//                 >
//                   <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto relative rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src={leader.image}
//                       alt={leader.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="max-w-xs mx-auto">
//                     <h4 className="mt-4 font-semibold text-sm sm:text-base md:text-lg">
//                       {leader.name}
//                     </h4>
//                     <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2">
//                       {leader.title}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LeadersSection;




import Image from "next/image";

type Leader = {
  name: string;
  title: string;
  image: string;
};

const LeadersSection = () => {
  const speakers: Leader[] = [
    {
      name: "Dr. T. S. Kler",
      title:
        "Chairman & HOD - BLK-Max Heart & Vascular Institute, Chairman Pan Max - Electrophysiology - Heart & Vascular Institute",
      image: "/speakers/TSKler.webp",
    },
    {
      name: "Dr. Balbir Singh",
      title: "Chairman - Cardiac Sciences, Max Hospital",
      image: "/speakers/BalbirSingh.webp",
    },
    {
      name: "Dr. P. Ganeshkumar",
      title: "Scientist E & Head, Division of Noncommunicable Diseases ICMR National Institute of Epidemiology, Government of India ",
      image: "/speakers/GaneshKumar.webp",
    },
    {
      name: "Dr. Nityanand Tripathi",
      title: "Principal Director & Hod Cardiology & Electrophysiology, Fortis Shalimar Bagh, Delhi",
      image: "/speakers/NityanandTripathi.webp",
    },
    {
      name: "Dr. Subhash Chandra",
      title: "Chairman - Interventional Cardiology - Cardiology & Structural Heart Disease, BLK Max Super Specialty Hospital , Delhi ",
      image: "/speakers/SubhashChandra.webp",
    },
    {
      name: "Dr. Sameer Gupta",
      title: "Senior Interventional Cardiologist, Group Head – Cardiac Cath Lab; Director, Metro Group of Hospitals",
      image: "/speakers/SameerGupta.webp",
    },
  ];

  // Split speakers into first 4 and remaining
  const firstRow = speakers.slice(0, 4);
  const secondRow = speakers.slice(4);

  return (
    <section className="relative bg-[#EDDEBA] py-8 ">
      <div className="max-w-6xl mx-auto px-4 text-center lg:mb-2">
        {/* Heading */}
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
            Meet Our Speakers
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
              Meet Our Speakers
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

        {/* Subtitle */}
        <p className="text-gray-800 max-w-4xl text-base sm:text-lg font-semibold mx-auto mb-12 px-2">
          Highlighting our continued engagement with top cardiac experts
          shaping the future of heart health.
        </p>

        {/* First row - 4 speakers */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 mb-8">
          {firstRow.map((leader, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="max-w-xs mx-auto">
                <h4 className="mt-4 font-semibold text-sm sm:text-base md:text-lg">
                  {leader.name}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2">
                  {leader.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 speakers centered */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-center max-w-2xl mx-auto">
          {secondRow.map((leader, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="max-w-xs mx-auto">
                <h4 className="mt-4 font-semibold text-sm sm:text-base md:text-lg">
                  {leader.name}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2">
                  {leader.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;





// import Image from "next/image";

// type Leader = {
//   name: string;
//   title: string;
//   image: string;
// };

// const LeadersSection = () => {
//   const speakers: Leader[] = [
//     {
//       name: "Dr. Devi Prasad Shetty",
//       title:
//         "Founder, Chairman & Senior Consultant Cardiac Surgeon, Narayana Health, Bengaluru",
//       image: "/images/speaker1.jpg",
//     },
//     {
//       name: "Dr. John Doe",
//       title: "Senior Cardiac Surgeon, Narayana Health, Bengaluru",
//       image: "/images/speaker2.jpg",
//     },
//     {
//       name: "Dr. Jane Smith",
//       title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//       image: "/images/speaker3.jpg",
//     },
//     {
//       name: "Dr. Jane Smith",
//       title: "Consultant Cardiologist, Narayana Health, Bengaluru",
//       image: "/images/speaker3.jpg",
//     },
//     // You can add/remove speakers, grid will stay responsive
//   ];

//   return (
//     <section className="relative bg-[#EDDEBA] py-12 pb-14">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Heading */}
//         <div>
//           <link
//             href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap"
//             rel="stylesheet"
//           ></link>

//           {/* Header Section */}
//           <div className="relative w-full flex justify-center items-center py-8 sm:py-10 lg:py-12 bg-transparent overflow-hidden">
//             {/* Background oversized text */}
//             <h1
//               className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//               style={{
//                 fontFamily: "Playfair Display",
//                 WebkitTextStroke: "1px #9ca3af",
//                 color: "transparent",
//               }}
//             >
//               Our Speakers
//             </h1>

//             {/* Foreground title with lines */}
//             <div className="flex items-center z-10 px-4">
//               <div className="relative mr-2 sm:mr-3">
//                 <div
//                   className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
//                   style={{
//                     height: "4px",
//                     clipPath:
//                       "polygon(0 50%, 100% 0, 100% 100%, 0 50%)",
//                   }}
//                 ></div>
//               </div>

//               <h2
//                 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#012CDB] text-center whitespace-nowrap"
//                 style={{ fontFamily: "Playfair Display" }}
//               >
//                 Our Speakers
//               </h2>

//               <div className="relative ml-2 sm:ml-3">
//                 <div
//                   className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
//                   style={{
//                     height: "4px",
//                     clipPath:
//                       "polygon(0 0, 100% 50%, 0 100%, 0 0)",
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Subtitle */}
//         <p className="text-gray-800 max-w-4xl text-base sm:text-lg font-semibold mx-auto mb-10 px-2">
//           Highlighting our continued engagement with top cardiac
//           experts shaping the future of heart health.
//         </p>

//         {/* Speakers Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {speakers.map((leader, i) => (
//             <div
//               key={i}
//               className="text-center flex flex-col items-center"
//             >
//               <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto relative rounded-lg overflow-hidden shadow-md">
//                 <Image
//                   src={leader.image}
//                   alt={leader.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="max-w-xs mx-auto">
//                 <h4 className="mt-4 font-semibold text-sm sm:text-base md:text-lg">
//                   {leader.name}
//                 </h4>
//                 <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2">
//                   {leader.title}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadersSection;
