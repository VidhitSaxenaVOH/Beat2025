// import React from 'react';

// const RegistrationSection = () => {
//     return (
//         <section className="bg-[#EDDEBA] relative overflow-hidden pb-8">
//             <div>
//                 <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

//                 <div className="relative w-full flex justify-center items-center py-8 bg-[#EDDEBA] overflow-hidden">
//                     {/* Background oversized text */}
//                     <h1
//                         className="absolute text-[67px] font-extrabold opacity-30 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                         style={{
//                             fontFamily: "Playfair Display",
//                             WebkitTextStroke: "1px #9ca3af",
//                             color: "transparent"
//                         }}
//                     >
//                         Registrations
//                     </h1>

//                     {/* Center bold blue title with lines */}
//                     <div className="flex items-center z-10">
//                         {/* Left tapered line */}
//                          <div className="relative mr-2">
//                             <div
//                                 className="w-30 bg-[#A21B43] rounded-full"
//                                 style={{
//                                     height: '6px',
//                                     clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                                 }}
//                             ></div>
//                         </div>

//                         <h2 className="text-[32px] font-bold text-[#012CDB] px-4"
//                             style={{ fontFamily: "Playfair Display" }}>Registrations</h2>

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

//             <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "Playfair Display" }}>Choose Your Pass</h2>
//             </div>

//             <div className="mt-8 grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">

//                 {/* Student Card */}
//                 <div
//                     className="rounded-lg p-8 transition duration-300 transform hover:scale-105 bg-transparent"
//                     style={{
//                         boxShadow: '0 8px 25px rgba(162, 27, 67, 0.5)' // rgba version of #A21B43
//                     }}
//                 >
//                     {/* Title */}
//                     <h3 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: "Playfair Display" }}>
//                         Student
//                     </h3>

//                     {/* Price */}
//                     <div className="text-center mb-10" style={{ fontFamily: "Playfair Display" }}>
//                         <p className="text-3xl font-bold mb-1">₹ 1180</p>
//                         <p className="text-sm opacity-75">(Including 18% GST)</p>
//                     </div>

//                     {/* Features */}
//                     <div className="mb-8 space-y-1" style={{ fontFamily: "Playfair Display" }}>
//                         <div className="flex items-start gap-3">
//                             <span className="text-black mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Lunch, Delegate Kit</span>
//                         </div>
//                         <div className="flex items-start gap-3">
//                             <span className="text-black mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Certificate of Participation</span>
//                         </div>
//                         <div className="flex items-start gap-3">
//                             <span className="text-black mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Access to the entire conference</span>
//                         </div>
//                         <div className="flex items-start gap-3 opacity-60">
//                             <span className="text-black mt-0.5 text-lg">✕</span>
//                             <span className="text-sm leading-relaxed line-through">Lunch with Networking opportunity.</span>
//                         </div>
//                     </div>

//                     {/* Register Button */}
//                     <div className="text-center">
//                         <button
//                             className="rounded-full px-8 py-3 text-sm font-bold transition duration-300 hover:scale-105 hover:shadow-md bg-[#A45E5F] text-[#EDDEBA]"
//                             style={{ fontFamily: "Playfair Display" }}
//                         >
//                             REGISTER NOW
//                         </button>
//                     </div>
//                 </div>

//                 {/* Individual Card */}
//                 <div
//                     className="rounded-lg p-8 shadow-xl transition duration-300 transform hover:scale-102 bg-transparent border-3 border-[#A45E5F]"
//                     style={{
//                         boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
//                     }}
//                 >
//                     {/* Title */}
//                     <h3 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: "Playfair Display" }}>
//                         Individual
//                     </h3>

//                     {/* Price */}
//                     <div className="text-center mb-10" style={{ fontFamily: "Playfair Display" }}>
//                         <p className="text-3xl font-bold mb-1">₹ 1770</p>
//                         <p className="text-sm opacity-75">(Including 18% GST)</p>
//                     </div>

//                     {/* Features */}
//                     <div className="mb-8 space-y-1" style={{ fontFamily: "Playfair Display" }}>
//                         <div className="flex items-start gap-3">
//                             <span className="text-black mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Lunch, Delegate Kit</span>
//                         </div>
//                         <div className="flex items-start gap-3">
//                             <span className="text-black mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Certificate of Participation</span>
//                         </div>
//                         <div className="flex items-start gap-3">
//                             <span className="text-black mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Access to the entire conference</span>
//                         </div>
//                         <div className="flex items-start gap-3">
//                             <span className="text-black mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Lunch with Networking opportunity.</span>
//                         </div>
//                     </div>

//                     {/* Register Button */}
//                     <div className="text-center">
//                         <button
//                             className="rounded-full px-8 py-3 text-sm font-bold transition duration-300 hover:scale-105 hover:shadow-md bg-[#A45E5F] text-[#EDDEBA]"
//                             style={{ fontFamily: "Playfair Display" }}
//                         >
//                             REGISTER NOW
//                         </button>
//                     </div>
//                 </div>

//                 {/* Group of 3 Card */}
//                 <div
//                     className="rounded-lg p-8 shadow-xl transition duration-300 transform hover:scale-102 bg-[#A45E5F] text-white border border-opacity-20 border-gray-400"
//                     style={{
//                         boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
//                     }}
//                 >
//                     {/* Title */}
//                     <h3 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: "Playfair Display" }}>
//                         Group of 3
//                     </h3>

//                     {/* Price */}
//                     <div className="text-center mb-10" style={{ fontFamily: "Playfair Display" }}>
//                         <p className="text-3xl font-bold mb-1">₹ 4720</p>
//                         <p className="text-sm opacity-75">(Including 18% GST)</p>
//                     </div>

//                     {/* Features */}
//                     <div className="mb-8 space-y-1" style={{ fontFamily: "Playfair Display" }}>
//                         <div className="flex items-start gap-3">
//                             <span className="text-white mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Lunch, Delegate Kit</span>
//                         </div>
//                         <div className="flex items-start gap-3">
//                             <span className="text-white mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Certificate of Participation</span>
//                         </div>
//                         <div className="flex items-start gap-3">
//                             <span className="text-white mt-0.5 text-lg">✓</span>
//                             <span className="text-sm leading-relaxed">Access to the entire conference</span>
//                         </div>
//                         <div className="flex items-start gap-3 opacity-60">
//                             <span className="text-white mt-0.5 text-lg">✕</span>
//                             <span className="text-sm leading-relaxed line-through">Lunch with Networking opportunity.</span>
//                         </div>
//                     </div>

//                     {/* Register Button */}
//                     <div className="text-center">
//                         <button
//                             className="rounded-full px-8 py-3 text-sm font-bold transition duration-300 hover:scale-105 hover:shadow-md bg-white text-[#A67C7C] border border-[#A67C7C]"
//                             style={{ fontFamily: "Playfair Display" }}
//                         >
//                             REGISTER NOW
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default RegistrationSection;


// import React from 'react';

// const RegistrationSection = () => {
//     const cards = [
//         {
//             title: "Student",
//             price: "₹ 1180",
//             gst: "(Including 18% GST)",
//             features: [
//                 { text: "Lunch, Delegate Kit", available: true },
//                 { text: "Certificate of Participation", available: true },
//                 { text: "Access to the entire conference", available: true },
//                 { text: "Lunch with Networking opportunity.", available: false }
//             ]
//         },
//         {
//             title: "Individual",
//             price: "₹ 1770",
//             gst: "(Including 18% GST)",
//             features: [
//                 { text: "Lunch, Delegate Kit", available: true },
//                 { text: "Certificate of Participation", available: true },
//                 { text: "Access to the entire conference", available: true },
//                 { text: "Lunch with Networking opportunity.", available: true }
//             ]
//         },
//         {
//             title: "Group of 3",
//             price: "₹ 4720",
//             gst: "(Including 18% GST)",
//             features: [
//                 { text: "Lunch, Delegate Kit", available: true },
//                 { text: "Certificate of Participation", available: true },
//                 { text: "Access to the entire conference", available: true },
//                 { text: "Lunch with Networking opportunity.", available: false }
//             ]
//         }
//     ];

//     return (
//         <section className="bg-[#EDDEBA] relative overflow-hidden pb-8">
//             {/* Header */}
//             <div className="relative w-full flex justify-center items-center py-8 bg-[#EDDEBA] overflow-hidden">
//                 <h1
//                     className="absolute text-[67px] font-semibold opacity-30 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                     style={{
//                         fontFamily: "Playfair Display",
//                         WebkitTextStroke: "1px #9ca3af",
//                         color: "transparent"
//                     }}
//                 >
//                     Registrations
//                 </h1>

//                 <div className="flex items-center z-10">
//                     <div className="relative mr-2">
//                         <div
//                             className="w-30 bg-[#A21B43] rounded-full"
//                             style={{
//                                 height: '6px',
//                                 clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                             }}
//                         ></div>
//                     </div>

//                     <h2 className="text-[32px] font-semibold text-[#012CDB] px-4"
//                         style={{ fontFamily: "Playfair Display" }}>Registrations</h2>

//                     <div className="relative ml-2">
//                         <div
//                             className="w-30 bg-[#A21B43] rounded-full"
//                             style={{
//                                 height: '6px',
//                                 clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
//                             }}
//                         ></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Subtitle */}
//             <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "Playfair Display" }}>
//                     Choose Your Pass
//                 </h2>
//             </div>

//             {/* Cards */}
//             <div className="mt-8 grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
//                 {cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className="rounded-lg p-8 transition duration-300 transform hover:scale-100 bg-transparent text-black hover:bg-[#A45E5F] hover:text-white"
//                         style={{
//                             boxShadow: '0 6px 20px rgba(162, 27, 67, 0.5)'
//                         }}
//                     >
//                         {/* Title */}
//                         <h3 className="text-2xl font-bold text-center mb-3" style={{ fontFamily: "Playfair Display" }}>
//                             {card.title}
//                         </h3>

//                         {/* Price */}
//                         <div className="text-center mb-8" style={{ fontFamily: "Playfair Display" }}>
//                             <p className="text-3xl font-bold mb-1">{card.price}</p>
//                             <p className="text-sm opacity-75">{card.gst}</p>
//                         </div>

//                         {/* Features */}
//                         <div className="mb-6 space-y-1" style={{ fontFamily: "Playfair Display" }}>
//                             {card.features.map((feature, i) => (
//                                 <div key={i} className={`flex items-start gap-3 ${!feature.available ? 'opacity-60' : ''}`}>
//                                     <span className="mt-0.5 text-lg">
//                                         {feature.available ? "✓" : "✕"}
//                                     </span>
//                                     <span className={`text-sm leading-relaxed ${!feature.available ? 'line-through' : ''}`}>
//                                         {feature.text}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Button */}
//                         <div className="text-center">
//                             <button
//                                 className="rounded-full px-8 py-3 text-sm font-bold transition duration-300 hover:scale-105 hover:shadow-md bg-[#A45E5F] text-[#EDDEBA] hover:bg-[#EDDEBA] hover:text-[#A45E5F]"
//                                 style={{ fontFamily: "Playfair Display" }}
//                             >
//                                 REGISTER NOW
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default RegistrationSection;



// import React from 'react';

// const RegistrationSection = () => {
//     const cards = [
//         {
//             title: "Student",
//             price: "₹ 1180",
//             gst: "(Including 18% GST)",
//             features: [
//                 { text: "Lunch, Delegate Kit", available: true },
//                 { text: "Certificate of Participation", available: true },
//                 { text: "Access to the entire conference", available: true },
//                 { text: "Lunch with Networking opportunity.", available: false }
//             ]
//         },
//         {
//             title: "Individual",
//             price: "₹ 1770",
//             gst: "(Including 18% GST)",
//             features: [
//                 { text: "Lunch, Delegate Kit", available: true },
//                 { text: "Certificate of Participation", available: true },
//                 { text: "Access to the entire conference", available: true },
//                 { text: "Lunch with Networking opportunity.", available: true }
//             ]
//         },
//         {
//             title: "Group of 3",
//             price: "₹ 4720",
//             gst: "(Including 18% GST)",
//             features: [
//                 { text: "Lunch, Delegate Kit", available: true },
//                 { text: "Certificate of Participation", available: true },
//                 { text: "Access to the entire conference", available: true },
//                 { text: "Lunch with Networking opportunity.", available: false }
//             ]
//         }
//     ];

//     return (
//         <section className="bg-[#EDDEBA] relative overflow-hidden pb-4 sm:pb-6 lg:pb-8">
//             {/* Header */}
//             <div className="relative w-full flex justify-center items-center py-4 sm:py-6 lg:py-8 bg-[#EDDEBA] overflow-hidden">
//                 {/* Background oversized text - hidden on mobile, visible on larger screens */}
//                 <h1
//                     className="absolute hidden sm:block text-[32px] sm:text-[45px] md:text-[55px] lg:text-[67px] font-semibold opacity-30 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                     style={{
//                         fontFamily: "Playfair Display",
//                         WebkitTextStroke: "1px #9ca3af",
//                         color: "transparent"
//                     }}
//                 >
//                     Registrations
//                 </h1>

//                 <div className="flex items-center z-10">
//                     {/* Left tapered line - responsive width */}
//                     <div className="relative mr-1 sm:mr-2">
//                         <div
//                             className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
//                             style={{
//                                 height: '3px',
//                                 clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                             }}
//                         ></div>
//                     </div>

//                     <h2 
//                         className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold text-[#012CDB] px-2 sm:px-3 lg:px-4"
//                         style={{ fontFamily: "Playfair Display" }}
//                     >
//                         Registrations
//                     </h2>

//                     {/* Right tapered line - responsive width */}
//                     <div className="relative ml-1 sm:ml-2">
//                         <div
//                             className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
//                             style={{
//                                 height: '3px',
//                                 clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
//                             }}
//                         ></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Subtitle - responsive sizing */}
//             <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-4">
//                 <h2 
//                     className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2" 
//                     style={{ fontFamily: "Playfair Display" }}
//                 >
//                     Choose Your Pass
//                 </h2>
//             </div>

//             {/* Cards - responsive grid and spacing */}
//             <div className="mt-4 sm:mt-6 lg:mt-8 grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-8 sm:px-6 lg:px-0">
//                 {cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className="rounded-lg p-4 sm:p-6 lg:p-8 transition duration-300 transform hover:scale-100 bg-transparent text-black hover:bg-[#A45E5F] hover:text-white"
//                         style={{
//                             boxShadow: '0 6px 20px rgba(162, 27, 67, 0.5)'
//                         }}
//                     >
//                         {/* Title - responsive sizing */}
//                         <h3 
//                             className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-2 sm:mb-3" 
//                             style={{ fontFamily: "Playfair Display" }}
//                         >
//                             {card.title}
//                         </h3>

//                         {/* Price - responsive sizing */}
//                         <div className="text-center mb-4 sm:mb-6 lg:mb-8" style={{ fontFamily: "Playfair Display" }}>
//                             <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">{card.price}</p>
//                             <p className="text-xs sm:text-sm opacity-75">{card.gst}</p>
//                         </div>

//                         {/* Features - responsive sizing */}
//                         <div className="mb-4 sm:mb-5 lg:mb-6 space-y-1" style={{ fontFamily: "Playfair Display" }}>
//                             {card.features.map((feature, i) => (
//                                 <div key={i} className={`flex items-start gap-2 sm:gap-3 ${!feature.available ? 'opacity-60' : ''}`}>
//                                     <span className="mt-0.5 text-sm sm:text-base lg:text-lg">
//                                         {feature.available ? "✓" : "✕"}
//                                     </span>
//                                     <span className={`text-xs sm:text-sm leading-relaxed ${!feature.available ? 'line-through' : ''}`}>
//                                         {feature.text}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Button - responsive sizing */}
//                         <div className="text-center">
//                             <button
//                                 className="rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm font-bold transition duration-300 hover:scale-105 hover:shadow-md bg-[#A45E5F] text-[#EDDEBA] hover:bg-[#EDDEBA] hover:text-[#A45E5F]"
//                                 style={{ fontFamily: "Playfair Display" }}
//                             >
//                                 REGISTER NOW
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default RegistrationSection;



import React from 'react';

const RegistrationSection = () => {
    const cards = [
        {
            title: "Student",
            price: "₹ 1180",
            gst: "(Including 18% GST)",
            link: "https://example.com/student",  // 🔗 student link
            features: [
                { text: "Lunch, Delegate Kit", available: true },
                { text: "Certificate of Participation", available: true },
                { text: "Access to the entire conference", available: true },
                { text: "Lunch with Networking opportunity.", available: false }
            ]
        },
        {
            title: "Individual",
            price: "₹ 1770",
            gst: "(Including 18% GST)",
            link: "https://example.com/individual", // 🔗 individual link
            features: [
                { text: "Lunch, Delegate Kit", available: true },
                { text: "Certificate of Participation", available: true },
                { text: "Access to the entire conference", available: true },
                { text: "Lunch with Networking opportunity.", available: true }
            ]
        },
        {
            title: "Group of 3",
            price: "₹ 4720",
            gst: "(Including 18% GST)",
            link: "https://example.com/group", // 🔗 group link
            features: [
                { text: "Lunch, Delegate Kit", available: true },
                { text: "Certificate of Participation", available: true },
                { text: "Access to the entire conference", available: true },
                { text: "Lunch with Networking opportunity.", available: false }
            ]
        }
    ];

    return (
        <section id="registration" className="bg-[#EDDEBA] relative overflow-hidden pb-4 sm:pb-6 lg:pb-8">
            {/* Header */}
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

                {/* Header Section - Responsive */}
                <div className="relative w-full flex justify-center items-center py-8 sm:py-10 lg:py-12 bg-transparent overflow-hidden">
                    {/* Background oversized text - responsive sizing */}
                    <h1
                        className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
                        style={{
                            fontFamily: "Playfair Display",
                            WebkitTextStroke: "1px #9ca3af",
                            color: "transparent"
                        }}
                    >
                        Registerations
                    </h1>

                    {/* Center bold blue title with lines - responsive */}
                    <div className="flex items-center z-10 px-4">
                        {/* Left tapered line - responsive width */}
                        <div className="relative mr-2 sm:mr-3">
                            <div
                                className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
                                style={{
                                    height: '4px',
                                    clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
                                }}
                            ></div>
                        </div>

                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#012CDB] text-center whitespace-nowrap"
                            style={{ fontFamily: "Playfair Display" }}>
                            Registrations
                        </h2>

                        {/* Right tapered line - responsive width */}
                        <div className="relative ml-2 sm:ml-3">
                            <div
                                className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
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
            <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-4">
                <h2 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2" 
                    style={{ fontFamily: "Playfair Display" }}
                >
                    Choose Your Pass
                </h2>
            </div>

            {/* Cards */}
            <div className="mt-4 sm:mt-6 lg:mt-8 grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-8 sm:px-6 lg:px-0">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-4 sm:p-6 lg:p-8 transition duration-300 transform hover:scale-100 bg-transparent text-black hover:bg-[#A45E5F] hover:text-white"
                        style={{
                            boxShadow: '0 6px 20px rgba(162, 27, 67, 0.5)'
                        }}
                    >
                        {/* Title */}
                        <h3 
                            className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-2 sm:mb-3" 
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            {card.title}
                        </h3>

                        {/* Price */}
                        <div className="text-center mb-4 sm:mb-6 lg:mb-8" style={{ fontFamily: "Playfair Display" }}>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">{card.price}</p>
                            <p className="text-xs sm:text-sm opacity-75">{card.gst}</p>
                        </div>

                        {/* Features */}
                        <div className="mb-4 sm:mb-5 lg:mb-6 space-y-1" style={{ fontFamily: "Playfair Display" }}>
                            {card.features.map((feature, i) => (
                                <div key={i} className={`flex items-start gap-2 sm:gap-3 ${!feature.available ? 'opacity-60' : ''}`}>
                                    <span className="mt-0.5 text-sm sm:text-base lg:text-lg">
                                        {feature.available ? "✓" : "✕"}
                                    </span>
                                    <span className={`text-xs sm:text-sm leading-relaxed ${!feature.available ? 'line-through' : ''}`}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Button with external link */}
                        <div className="text-center">
                            <a
                                href={card.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm font-bold transition duration-300 hover:scale-105 hover:shadow-md bg-[#A45E5F] text-[#EDDEBA] hover:bg-[#EDDEBA] hover:text-[#A45E5F]"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                REGISTER NOW
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RegistrationSection;
