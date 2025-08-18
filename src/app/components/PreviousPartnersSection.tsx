// import React from 'react'
// import Image from 'next/image';


// const PreviousPartnersSection = () => {
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
//                             Previous Partners
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
    
//                             <h2 className="text-[30px] font-semibold text-[#012CDB]"
//                                 style={{ fontFamily: "Playfair Display" }}>Previous Partners</h2>
    
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
    
//                 <div className="flex justify-center items-center py-8">
//                     <Image
//                         src="/PreviousPartners.png"
//                         alt="Key Discussion Points Graphic"
//                         className="w-full max-w-[1200px] h-[600px] object-cover"
//                         priority
//                         width={800}
//                         height={600}
//                     />
//                 </div>
    
    
//             </section>
//   )
// }

// export default PreviousPartnersSection;




import React from 'react'
import Image from 'next/image';

const PreviousPartnersSection = () => {
  return (
     <section className="relative bg-[#EDDEBA] overflow-hidden">
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
    
                    <div className="relative w-full flex justify-center items-center py-4 sm:py-6 lg:py-8 bg-[#EDDEBA] overflow-hidden">
                        {/* Background oversized text - hidden on mobile, visible on larger screens */}
                        <h1
                            className="absolute hidden sm:block text-[32px] sm:text-[40px] md:text-[55px] lg:text-[67px] font-semibold opacity-50 select-none tracking-[0.001em] whitespace-nowrap text-[#4f4f4f]"
                            style={{
                                fontFamily: "Playfair Display",
                                WebkitTextStroke: "1px #9ca3af",
                                color: "transparent"
                            }}
                        >
                            Previous Partners
                        </h1>
    
                        {/* Center bold blue title with lines */}
                        <div className="flex items-center z-10">
                            {/* Left tapered line - responsive width */}
                            <div className="relative mr-1 sm:mr-2">
                                <div
                                    className="w-8 sm:w-16 md:w-20 lg:w-30 bg-[#A21B43] rounded-full"
                                    style={{
                                        height: '3px',
                                        clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)'
                                    }}
                                ></div>
                            </div>
    
                            <h2 
                                className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-semibold text-[#012CDB] px-2 sm:px-3"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                Previous Partners
                            </h2>
    
                            {/* Right tapered line - responsive width */}
                            <div className="relative ml-1 sm:ml-2">
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
    
                {/* Image container - responsive sizing and spacing */}
                <div className="flex justify-center items-center py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-0">
                    <Image
                        src="/PreviousPartners.png"
                        alt="Previous Partners Graphic"
                        className="w-full max-w-[300px] h-[200px] sm:max-w-[450px] sm:h-[300px] md:max-w-[600px] md:h-[400px] lg:max-w-[1200px] lg:h-[600px] object-cover"
                        priority
                        width={800}
                        height={600}
                    />
                </div>
    
    
            </section>
  )
}

export default PreviousPartnersSection;