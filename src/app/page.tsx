import React from 'react'
import SplashScreen from '@/app/components/SplashScreen';
import HighlightsSection from './components/HighlightsSection';
import OverviewSection from './components/OverviewSection';
import KeyDiscussionPointsSection from './components/KeyDiscussionPointsSection';
import WhoShouldAttendSection from './components/WhoShouldAttendSection';
import PreviousPartnersSection from './components/PreviousPartnersSection';
import RegistrationSection from './components/RegistrationSection';
import ContactUs from './components/ContactUs';
import ExploreAwards from './components/ExploreAwards';
import Footer from './components/Footer';
import WhyBeatMatters from './components/WhyBeatMatters';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LeadersSection from './components/LeadersSection';

const page = () => {
  return (
    <SplashScreen>
      <Navbar />
      
      <div className=""> {/* Add top padding to account for fixed navbar */}
        <HeroSection/>
        <HighlightsSection />
        
        <section id="overview">
          <OverviewSection />
        </section>
        
        <section id="why-beat-matters">
          <WhyBeatMatters />
        </section>
        
        <section id="key-discussion-points">
          <KeyDiscussionPointsSection />
        </section>
        
        <section id="who-should-attend">
          <WhoShouldAttendSection />
        </section>
        
        <section id="leaders">
          {/* You might want to create a Leaders component or use existing one */}
          <LeadersSection/>
        </section>
        
        <section id="partners">
          <PreviousPartnersSection />
        </section>
        
        <section id="registration">
          <RegistrationSection />
        </section>
        
        <section id="contact-us">
          <ContactUs />
        </section>
        
        <ExploreAwards />
        <Footer />
      </div>
    </SplashScreen>
  )
}

export default page





// "use client"
// import React from 'react'
// import SplashScreen from '@/app/components/SplashScreen';
// import HighlightsSection from './components/HighlightsSection';
// import OverviewSection from './components/OverviewSection';
// import KeyDiscussionPointsSection from './components/KeyDiscussionPointsSection';
// import WhoShouldAttendSection from './components/WhoShouldAttendSection';
// import PreviousPartnersSection from './components/PreviousPartnersSection';
// import RegistrationSection from './components/RegistrationSection';
// import ContactUs from './components/ContactUs';
// import ExploreAwards from './components/ExploreAwards';
// import Footer from './components/Footer';
// import WhyBeatMatters from './components/WhyBeatMatters';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import LeadersSection from './components/LeadersSection';
// import AnimatedSection from './components/AnimatedSection'; // We'll create this component

// const page = () => {
//   return (
//     <SplashScreen>
//       <Navbar />
      
//       <div className="">
//         {/* Hero section without animation wrapper since it has its own animations */}
//         <HeroSection/>
        
//         <AnimatedSection animation="fade-up" delay={0}>
//           <HighlightsSection />
//         </AnimatedSection>
        
//         <section id="overview">
//           <AnimatedSection animation="fade-up" delay={100}>
//             <OverviewSection />
//           </AnimatedSection>
//         </section>
        
//         <section id="why-beat-matters">
//           <AnimatedSection animation="slide-left" delay={150}>
//             <WhyBeatMatters />
//           </AnimatedSection>
//         </section>
        
//         <section id="key-discussion-points">
//           <AnimatedSection animation="fade-up" delay={200}>
//             <KeyDiscussionPointsSection />
//           </AnimatedSection>
//         </section>
        
//         <section id="who-should-attend">
//           <AnimatedSection animation="slide-right" delay={100}>
//             <WhoShouldAttendSection />
//           </AnimatedSection>
//         </section>
        
//         <section id="leaders">
//           <AnimatedSection animation="fade-up" delay={150}>
//             <LeadersSection/>
//           </AnimatedSection>
//         </section>
        
//         <section id="partners">
//           <AnimatedSection animation="zoom-in" delay={200}>
//             <PreviousPartnersSection />
//           </AnimatedSection>
//         </section>
        
//         <section id="registration">
//           <AnimatedSection animation="fade-up" delay={100}>
//             <RegistrationSection />
//           </AnimatedSection>
//         </section>
        
//         <section id="contact-us">
//           <AnimatedSection animation="slide-up" delay={150}>
//             <ContactUs />
//           </AnimatedSection>
//         </section>
        
//         <AnimatedSection animation="fade-up" delay={100}>
//           <ExploreAwards />
//         </AnimatedSection>
        
//         <Footer />
//       </div>

//       {/* Global Animation Styles */}
//       <style jsx global>{`
//         /* Animation Keyframes */
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(60px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-80px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideRight {
//           from {
//             opacity: 0;
//             transform: translateX(80px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(80px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes zoomIn {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         /* Animation Classes */
//         .animate-on-scroll {
//           opacity: 0;
//           transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }

//         .animate-on-scroll.animate-fade-up {
//           animation: fadeUp 0.8s ease-out forwards;
//         }

//         .animate-on-scroll.animate-slide-left {
//           animation: slideLeft 0.8s ease-out forwards;
//         }

//         .animate-on-scroll.animate-slide-right {
//           animation: slideRight 0.8s ease-out forwards;
//         }

//         .animate-on-scroll.animate-slide-up {
//           animation: slideUp 0.8s ease-out forwards;
//         }

//         .animate-on-scroll.animate-zoom-in {
//           animation: zoomIn 0.8s ease-out forwards;
//         }

//         .animate-on-scroll.animate-fade-in {
//           animation: fadeIn 0.8s ease-out forwards;
//         }

//         /* Reduced motion support */
//         @media (prefers-reduced-motion: reduce) {
//           .animate-on-scroll {
//             animation: none !important;
//             opacity: 1 !important;
//             transform: none !important;
//           }
//         }
//       `}</style>
//     </SplashScreen>
//   )
// }

// export default page