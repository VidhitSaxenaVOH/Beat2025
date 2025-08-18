// // components/HeroSection.tsx
// "use client"
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#003399] py-24 pb-60">
//       {/* Background color or image */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#002b66] to-[#0055cc] z-0 " />

//       {/* ECG Wave GIF */}
//        <video
//         className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/sinus-wave.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Red Heart GIF - Animated */}
//       <div className="absolute top-5/12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in-up-delay-1">
//         <Image
//           src="/0026.gif"
//           alt="Beating Heart"
//           width={900}
//           height={880}
//           className="opacity-80 pointer-events-none object-contain"
//         />
//       </div>

//       {/* Content Layer */}
//       <div className="relative z-30 flex flex-col items-center justify-center text-center space-y-8 px-4">
//         {/* Heart + Title - Animated */}
//         <div className="relative w-[700px] max-w-full animate-fade-in-up">
//           <Image
//             src="/hero-title.png" // This image contains the white heart & text
//             alt="National Cardiovascular Summit & Awards"
//             width={600}
//             height={300}
//             className="mx-auto mt-90"
//           />
//         </div>

//         {/* Date & Location - Animated with stagger */}
//         <div className="flex w-full justify-center gap-x-[700px] max-w-6xl mt-6 mb-6">
//           <div className="animate-fade-in-up-delay-2">
//             <Image
//               src="/hero-date.png"
//               alt="12th Oct 2025"
//               width={250}
//               height={80}
//             />
//           </div>
//           <div className="animate-fade-in-up-delay-3">
//             <Image
//               src="/hero-location.png"
//               alt="New Delhi, India"
//               width={250}
//               height={80}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS Animations - Add this to your global CSS or as a style tag */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(60px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 1s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-fade-in-up-delay-1 {
//           animation: fadeInUp 1s ease-out 0.3s forwards;
//           opacity: 0;
//         }

//         .animate-fade-in-up-delay-2 {
//           animation: fadeInUp 1s ease-out 0.6s forwards;
//           opacity: 0;
//         }

//         .animate-fade-in-up-delay-3 {
//           animation: fadeInUp 1s ease-out 0.9s forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </section>
//   );
// }

// components/HeroSection.tsx
"use client"
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#003399] py-24 pb-60">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002b66] to-[#0055cc] z-0 " />

      {/* ECG Wave Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/sinus-wave.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Heart GIF */}
      <div className="absolute top-5/12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in-up-delay-1">
        <Image
          src="/0026.gif"
          alt="Beating Heart"
          width={900}
          height={880}
          className="opacity-80 pointer-events-none object-contain"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center space-y-8 px-4">
        {/* Hero Title */}
        <div className="relative w-[700px] max-w-full animate-fade-in-up">
          <Image
            src="/hero-title.png"
            alt="National Cardiovascular Summit & Awards"
            width={600}
            height={300}
            className="mx-auto mt-90"
          />
        </div>

        {/* Date & Location */}
        <div className="flex w-full justify-center gap-x-[700px] max-w-6xl mt-6 mb-6">
          <div className="animate-fade-in-up-delay-2">
            <Image src="/hero-date.png" alt="12th Oct 2025" width={250} height={80} />
          </div>
          <div className="animate-fade-in-up-delay-3">
            <Image src="/hero-location.png" alt="New Delhi, India" width={250} height={80} />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 animate-fade-in-up-delay-3 mb-6">
          {/* Register Now - scroll to section */}
          <a
            href="#registration"
            className="px-6 py-3 bg-[#E8D5B7] text-black font-medium rounded-md shadow-md hover:bg-[#f0e0c5] transition-all"
          >
            Register Now
          </a>

          {/* Partner with Us - external link */}
          <a
            href="https://your-external-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#E8D5B7] text-black font-medium rounded-md shadow-md hover:bg-[#f0e0c5] transition-all"
          >
            Partner with Us
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay-3 {
          animation: fadeInUp 1s ease-out 0.9s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
