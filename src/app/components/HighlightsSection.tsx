// 'use client';

// import React from 'react';
// import { FaAward, FaUsers, FaNetworkWired, FaImage } from 'react-icons/fa';

// const highlights = [
//     {
//         icon: <FaUsers className="text-red-800 text-5xl" />,
//         title: '+5',
//         subtitle: 'Hours of Expert Led Conference',
//     },
//     {
//         icon: <FaAward className="text-blue-700 text-5xl" />,
//         title: '+5',
//         subtitle: 'Cardiac Excellence Awards',
//     },
//     {
//         icon: <FaImage className="text-red-800 text-5xl" />,
//         title: '+5',
//         subtitle: 'Live Exhibition Gallery',
//     },
//     {
//         icon: <FaNetworkWired className="text-blue-700 text-5xl" />,
//         title: '+5',
//         subtitle: 'Networking & Partnership',
//     },
// ];

// const HighlightsSection = () => {
//     return (
//         <section className="bg-[#EDDEBA] pb-10">
//             <div>
//                 <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>

//                 <div className="relative w-full flex justify-center items-center py-12 bg-[#EDDEBA] overflow-hidden">
//                     {/* Background oversized text - very subtle */}
//                     <h1
//                         className="absolute text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                         style={{
//                             fontFamily: "Playfair Display",
//                             WebkitTextStroke: "1px #9ca3af",
//                             color: "transparent"
//                         }}
//                     >
//                         Key Highlights
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
//                             style={{ fontFamily: "Playfair Display" }}>Key Highlights </h2>

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
//             <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
//                 {highlights.map((item, index) => (
//                     <div key={index} className="flex flex-row items-center justify-center relative gap-2 m-2">
//                         {/* Icon + Text */}
//                         <div className="flex flex-row gap-6 items-center" >
//                             <div className="text-3xl">{item.icon}</div>
//                             <div className='flex flex-col gap-1 mr-1'>
//                                 <h3 className="font-extrabold text-xl">{item.title}</h3>
//                                 <p className="text-sm text-gray-800 font-semibold">{item.subtitle}</p>
//                             </div>
//                         </div>

//                         {/* Vertical triangle line (only if not last item) */}
//                         {index !== highlights.length - 1 && (
//                             <div
//                                 className="h-20 bg-[#A21B43] rounded-full"
//                                 style={{
//                                     width: '6px',
//                                     clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
//                                 }}
//                             ></div>
//                         )}
//                     </div>
//                 ))}
//             </div>

//         </section>
//     );
// };

// export default HighlightsSection;



'use client';

import React from 'react';
import { FaAward, FaUsers, FaNetworkWired, FaImage } from 'react-icons/fa';

const highlights = [
    {
        icon: <FaUsers className="text-red-800 text-3xl sm:text-4xl lg:text-5xl" />,
        title: '+5',
        subtitle: 'Hours of Expert Led Conference',
    },
    {
        icon: <FaAward className="text-blue-700 text-3xl sm:text-4xl lg:text-5xl" />,
        title: '+5',
        subtitle: 'Cardiac Excellence Awards',
    },
    {
        icon: <FaImage className="text-red-800 text-3xl sm:text-4xl lg:text-5xl" />,
        title: '+5',
        subtitle: 'Live Exhibition Gallery',
    },
    {
        icon: <FaNetworkWired className="text-blue-700 text-3xl sm:text-4xl lg:text-5xl" />,
        title: '+5',
        subtitle: 'Networking & Partnership',
    },
];

const HighlightsSection = () => {
    return (
        <section className="bg-[#EDDEBA] pb-6 sm:pb-8 lg:pb-10">
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
                        Key Highlights
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
                            Key Highlights
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

            {/* Highlights Grid - Responsive Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Layout - Vertical Stack */}
                <div className="sm:hidden space-y-6">
                    {highlights.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-4 mb-3">
                                <div>{item.icon}</div>
                                <div>
                                    <h3 className="font-extrabold text-xl text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-800 font-semibold">{item.subtitle}</p>
                                </div>
                            </div>
                            {/* Horizontal divider for mobile */}
                            {/* {index !== highlights.length - 1 && (
                                <div
                                    className="w-24 bg-[#A21B43] rounded-full mt-4"
                                    style={{
                                        height: '3px',
                                        clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)'
                                    }}
                                ></div>
                            )} */}
                        </div>
                    ))}
                </div>

                {/* Tablet Layout - 2x2 Grid */}
                <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 md:gap-8">
                    {highlights.map((item, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <div className="flex items-center gap-4">
                                <div>{item.icon}</div>
                                <div>
                                    <h3 className="font-extrabold text-xl text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-800 font-semibold max-w-[120px]">{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Layout - Single Row with Separators */}
                <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-8">
                    {highlights.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="flex items-center gap-4 xl:gap-6">
                                <div>{item.icon}</div>
                                <div>
                                    <h3 className="font-extrabold text-xl xl:text-2xl text-gray-900">{item.title}</h3>
                                    <p className="text-sm xl:text-base text-gray-800 font-semibold max-w-[140px] xl:max-w-[160px]">{item.subtitle}</p>
                                </div>
                            </div>

                            {/* Vertical triangle separator - only between items */}
                            {index !== highlights.length - 1 && (
                                <div className="flex-shrink-0 mx-2 xl:mx-4">
                                    <div
                                        className="h-16 xl:h-20 bg-[#A21B43] rounded-full"
                                        style={{
                                            width: '6px',
                                            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                                        }}
                                    ></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;