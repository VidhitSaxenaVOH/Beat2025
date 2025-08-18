// import Image from 'next/image';
// import { Calendar } from 'lucide-react';

// import awardImage from '../../../public/award-sample.png';
// import mapImage from '../../../public/map.png';

// const awards = [
//     {
//         date: '22 June, 2025',
//         location: 'Mumbai',
//         title: 'IVF Excellence Awards',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         image: awardImage,
//     },
//     {
//         date: '22 June, 2025',
//         location: 'Mumbai',
//         title: 'IVF Excellence Awards',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         image: awardImage,
//     },
// ];

// export default function ExploreAwards() {
//     return (
//         <div className="relative bg-[#EDDEBA] p-8 pb-12 overflow-hidden">
//             {/* Background Overlay */}
//             {/* <Image
//                 src={''}
//                 alt="Explore background"
//                 fill
//                 className="object-cover opacity-20 -z-10"
//             /> */}

//             {/* Header */}
//             <div>
//                 <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet" />
//                 <div className="relative w-full flex justify-center items-center py-8 bg-[#EDDEBA] overflow-hidden">
//                     <h1
//                         className="absolute text-[67px] font-semibold opacity-30 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                         style={{
//                             fontFamily: "Playfair Display",
//                             WebkitTextStroke: "1px #9ca3af",
//                             color: "transparent"
//                         }}
//                     >
//                         Explore Our Other Awards
//                     </h1>

//                     <div className="flex items-center z-10">
//                         <div className="relative mr-2">
//                             <div
//                                 className="w-30 bg-[#A21B43] rounded-full"
//                                 style={{
//                                     height: '6px',
//                                     clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
//                                 }}
//                             ></div>
//                         </div>
//                         <h2 className="text-[32px] font-semibold text-[#012CDB] px-4" style={{ fontFamily: "Playfair Display" }}>
//                             Explore Our Other Awards
//                         </h2>
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

//             {/* Main Content */}
//             <div className="flex flex-row justify-center items-center gap-10 max-w-5xl mx-auto mt-4">
//                 {/* Map Section */}
//                 <div className="relative max-w-md w-full group">
//                     {/* Map Image with Blur */}
//                     <Image
//                         src={mapImage}
//                         alt="Map"
//                         className="rounded-md w-full transition-all duration-500 "
//                         layout="responsive"
//                         width={600}
//                         height={400}
//                     />

//                     {/* Overlay Text (Visible Initially, Hidden on Hover) */}
//                     <div className="absolute inset-0 flex justify-center items-center text-[#EDDEBA] text-3xl font-bold bg-black/60 rounded-md opacity-100 transition-opacity duration-500 group-hover:opacity-0" style={{ fontFamily: "Playfair Display" }}>
//                         VENUE
//                     </div>

//                     {/* GET DIRECTIONS Button (Hidden Initially, Shown on Hover) */}
//                     <button
//                         className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#A15B5B] text-white px-6 py-2 rounded-full hover:bg-[#8f1738] transition font-semibold opacity-0 group-hover:opacity-100 duration-500"
//                         style={{ fontFamily: "Playfair Display" }}
//                     >
//                         GET DIRECTIONS
//                     </button>
//                 </div>

//                 {/* Divider Shape */}
//                 <div>
//                     <div
//                         className="h-60 bg-[#A21B43] rounded-full"
//                         style={{
//                             width: '6px',
//                             clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
//                         }}
//                     ></div>
//                 </div>

//                 {/* Awards List */}
//                 <div>
//                     <div className="flex flex-col md:flex-row gap-6" style={{ fontFamily: "Playfair Display" }}>
//                         {awards.map((award, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-transparent hover:scale-105 transition-transform duration-300 max-w-sm"
//                             >
//                                 <Image src={award.image} alt="Award" className="rounded-md mb-3" />
//                                 <div className="flex items-center text-sm text-gray-500 mb-1">
//                                     <Calendar className="w-4 h-4 mr-1" />
//                                     {award.date}
//                                 </div>
//                                 <h3 className="font-bold text-lg text-[#A21B43]">{award.title}</h3>
//                                 <div className="text-sm text-gray-600 mb-1">📍 {award.location}</div>
//                                 <p className="text-sm text-gray-900">{award.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* See More Button */}
//             <div className="flex justify-center mt-8" style={{ fontFamily: "Playfair Display" }}>
//                 <button className="bg-[#A15B5B] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#8f1738] transition">
//                     SEE MORE
//                 </button>
//             </div>
//         </div>
//     );
// }




import Image from 'next/image';
import { Calendar } from 'lucide-react';

import awardImage from '../../../public/award-sample.png';
import mapImage from '../../../public/map.png';

const awards = [
    {
        date: '22 June, 2025',
        location: 'Mumbai',
        title: 'IVF Excellence Awards',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: awardImage,
    },
    {
        date: '22 June, 2025',
        location: 'Mumbai',
        title: 'IVF Excellence Awards',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: awardImage,
    },
];

export default function ExploreAwards() {
    return (
        <div className="relative bg-[#EDDEBA] p-4 sm:p-6 lg:p-8 pb-6 sm:pb-8 lg:pb-12 overflow-hidden">
            {/* Header */}
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet" />
                
                <div className="relative w-full flex justify-center items-center py-4 sm:py-6 lg:py-8 bg-[#EDDEBA] overflow-hidden">
                    {/* Background oversized text - hidden on mobile, visible on larger screens */}
                    <h1
                        className="absolute hidden sm:block text-[20px] sm:text-[30px] md:text-[45px] lg:text-[67px] font-semibold opacity-30 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
                        style={{
                            fontFamily: "Playfair Display",
                            WebkitTextStroke: "1px #9ca3af",
                            color: "transparent"
                        }}
                    >
                        Explore Our Other Awards
                    </h1>

                    <div className="flex items-center z-10">
                        {/* Left tapered line - responsive width */}
                        <div className="relative mr-1 sm:mr-2">
                            <div
                                className="w-4 sm:w-8 md:w-16 lg:w-30 bg-[#A21B43] rounded-full"
                                style={{
                                    height: '3px',
                                    clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
                                }}
                            ></div>
                        </div>
                        
                        <h2 
                            className="text-sm sm:text-lg md:text-xl lg:text-[32px] font-semibold text-[#012CDB] px-1 sm:px-2 lg:px-4 text-center" 
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Explore Our Other Awards
                        </h2>
                        
                        {/* Right tapered line - responsive width */}
                        <div className="relative ml-1 sm:ml-2">
                            <div
                                className="w-4 sm:w-8 md:w-16 lg:w-30 bg-[#A21B43] rounded-full"
                                style={{
                                    height: '3px',
                                    clipPath: 'polygon(0 0, 100% 50%, 0 100%, 0 0)'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - responsive layout */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-10 max-w-5xl mx-auto mt-2 sm:mt-3 lg:mt-4">
                {/* Map Section - responsive sizing */}
                <div className="relative max-w-xs sm:max-w-sm lg:max-w-md w-full group">
                    {/* Map Image with Blur */}
                    <Image
                        src={mapImage}
                        alt="Map"
                        className="rounded-md w-full transition-all duration-500"
                        layout="responsive"
                        width={600}
                        height={400}
                    />

                    {/* Overlay Text - responsive sizing */}
                    <div 
                        className="absolute inset-0 flex justify-center items-center text-[#EDDEBA] text-xl sm:text-2xl lg:text-3xl font-bold bg-black/60 rounded-md opacity-100 transition-opacity duration-500 group-hover:opacity-0" 
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        VENUE
                    </div>

                    {/* GET DIRECTIONS Button - responsive sizing */}
                    <button
                        className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 bg-[#A15B5B] text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full hover:bg-[#8f1738] transition font-semibold opacity-0 group-hover:opacity-100 duration-500"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        GET DIRECTIONS
                    </button>
                </div>

                {/* Divider Shape - responsive sizing and positioning */}
                <div className="hidden lg:block">
                    <div
                        className="h-40 sm:h-48 lg:h-60 bg-[#A21B43] rounded-full"
                        style={{
                            width: '6px',
                            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                        }}
                    ></div>
                </div>

                {/* Mobile/Tablet Horizontal Divider */}
                <div className="block lg:hidden w-full">
                    <div
                        className="w-32 sm:w-40 mx-auto bg-[#A21B43] rounded-full"
                        style={{
                            height: '4px',
                            clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                        }}
                    ></div>
                </div>

                {/* Awards List - responsive grid */}
                <div className="w-full lg:w-auto">
                    <div className="flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6 justify-center" style={{ fontFamily: "Playfair Display" }}>
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="bg-transparent hover:scale-105 transition-transform duration-300 max-w-sm mx-auto sm:mx-0"
                            >
                                <Image 
                                    src={award.image} 
                                    alt="Award" 
                                    className="rounded-md mb-2 sm:mb-3 w-full" 
                                />
                                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-1">
                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                    {award.date}
                                </div>
                                <h3 className="font-bold text-base sm:text-lg text-[#A21B43]">{award.title}</h3>
                                <div className="text-xs sm:text-sm text-gray-600 mb-1">📍 {award.location}</div>
                                <p className="text-xs sm:text-sm text-gray-900">{award.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* See More Button - responsive sizing */}
            <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8" style={{ fontFamily: "Playfair Display" }}>
                <button className="bg-[#A15B5B] text-white font-semibold px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full hover:bg-[#8f1738] transition">
                    SEE MORE
                </button>
            </div>
        </div>
    );
}