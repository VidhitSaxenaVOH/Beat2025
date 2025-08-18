// import React from 'react'
// import Image from 'next/image';


// const WhoShouldAttendSection = () => {
//   return (
//      <section className="relative bg-[#EDDEBA] overflow-hidden">
//                 <div>
//                     <link href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap" rel="stylesheet"></link>
    
//                     <div className="relative w-full flex justify-center items-center py-8 bg-[#EDDEBA] overflow-hidden">
//                         {/* Background oversized text - very subtle */}
//                         <h1
//                             className="absolute text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
//                             style={{
//                                 fontFamily: "Playfair Display",
//                                 WebkitTextStroke: "1px #9ca3af",
//                                 color: "transparent"
//                             }}
//                         >
//                             Who Should Attend
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
//                                 style={{ fontFamily: "Playfair Display" }}>Who Should Attend</h2>
    
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
    
//                 <div className="flex justify-center items-center pb-8">
//                     <Image
//                         src="/wsa.png"
//                         alt="Key Discussion Points Graphic"
//                         className="w-full max-w-[1200px] h-[600px] object-cover"
//                         priority
//                         width={800}
//                         height={700}
//                     />
//                 </div>
    
    
//             </section>
//   )
// }

// export default WhoShouldAttendSection



import React from 'react'
import Image from 'next/image';

const WhoShouldAttendSection = () => {
  return (
     <section className="relative bg-[#EDDEBA] overflow-hidden">
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
                        Who Should Attend
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
                            Who Should Attend
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
    
                {/* Image container - responsive sizing and spacing */}
                <div className="flex justify-center items-center pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-0">
                    <Image
                        src="/wsa.png"
                        alt="Who Should Attend Graphic"
                        className="w-full max-w-[300px] h-[200px] sm:max-w-[470px] sm:h-[300px] md:max-w-[620px] md:h-[400px] lg:max-w-[1200px] lg:h-[600px] object-cover"
                        priority
                        width={800}
                        height={700}
                    />
                </div>
    
    
            </section>
  )
}

export default WhoShouldAttendSection