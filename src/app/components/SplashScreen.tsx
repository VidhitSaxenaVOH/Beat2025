
// 'use client';

// import { useState, useEffect } from 'react';
// import Lottie from 'lottie-react';
// import heartRateAnimation from '../../../public/animation/ECG.json';

// export default function SplashScreen({ children }: { children: React.ReactNode }) {
//   const [loading, setLoading] = useState(true);
//   const [fadeIn, setFadeIn] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       setFadeIn(true);
//     }, 2000); // 3 seconds for splash

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen w-screen bg-[#EDDEBA]">
//         <Lottie animationData={heartRateAnimation} loop={true} className="h-full w-full text-[#A21B43]" />
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`transition-opacity duration-1000 ease-in-out ${
//         fadeIn ? 'opacity-100' : 'opacity-0'
//       }`}
//     >
//       {children}
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import heartRateAnimation from '../../../public/animation/ECG.json';

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, 2000); // 2 seconds for splash

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="flex items-center justify-center h-screen w-screen bg-[#EDDEBA]/70 backdrop-blur-md"
      >
        <Lottie
          animationData={heartRateAnimation}
          loop={true}
          className="h-full w-full text-[#A21B43]"
        />
      </div>
    );
  }

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
