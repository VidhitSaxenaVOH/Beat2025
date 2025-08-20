'use client';

import React from 'react';
import {
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import Image from 'next/image';
import logo from '../../../public/VOH logo.png';
import { Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <section className="bg-[#EDDEBA] overflow-hidden">
      <link
        href="https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rozha+One&display=swap"
        rel="stylesheet"
      />

      <div className="relative bg-[#A45E5F] text-white pt-8 pb-4 overflow-hidden rounded-t-[40px]">
        {/* Background Video Overlay */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/sinus-wave.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6">
          {/* Logo and Tagline */}
          <div className="mb-4">
            <div className="flex justify-center mb-4">
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={200}
                className="object-contain w-28 sm:w-40 md:w-48 lg:w-[200px] h-auto"
              />
            </div>
            <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
              Voice of Healthcare acts as an industry connect platform that
              sources ideas, synergizes stakeholders, and solves bottlenecks to
              advance healthcare relentlessly.
            </p>
          </div>

          {/* Footer Links
          <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-6 text-left text-xs sm:text-sm max-w-2xl mx-auto mt-8">
            <div>
              <h4 className="font-bold mb-3 sm:mb-4">
                NEWS
              </h4>
              <ul className="space-y-1 font-semibold">
                <li className="hover:text-[#EDDEBA]">Healthtech</li>
                <li className="hover:text-[#EDDEBA]">Pharma</li>
                <li className="hover:text-[#EDDEBA]">Hospitals & Providers</li>
                <li className="hover:text-[#EDDEBA]">Diagnostics</li>
                <li className="hover:text-[#EDDEBA]">Precision Medicine</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4">
                VOH TV
              </h4>
              <ul className="space-y-1 font-semibold">
                <li className="hover:text-[#EDDEBA]">Expert Speaks</li>
                <li className="hover:text-[#EDDEBA]">The Big Idea</li>
                <li className="hover:text-[#EDDEBA]">Daily Broadcast</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4">
                EVENTS
              </h4>
              <ul className="space-y-1 font-semibold">
                <li className="hover:text-[#EDDEBA]">Health Awareness</li>
                <li className="hover:text-[#EDDEBA]">
                  Conferences & Summits
                </li>
                <li className="hover:text-[#EDDEBA]">Brand Solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4">
                VOH EXCLUSIVE
              </h4>
              <ul className="space-y-1 font-semibold">
                <li className="hover:text-[#EDDEBA]">Brands In Focus</li>
                <li className="hover:text-[#EDDEBA]">Idea Leader</li>
                <li className="hover:text-[#EDDEBA]">Listicles</li>
                <li className="hover:text-[#EDDEBA]">Editorials</li>
              </ul>
            </div>
          </div> */}
          {/* Footer Links */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left md:text-left text-xs sm:text-sm max-w-2xl mx-auto mt-8">
  <div>
    <h4 className="font-bold mb-3 sm:mb-4">
      NEWS
    </h4>
    <ul className="space-y-1 font-semibold">
      <li className="hover:text-[#EDDEBA]">Healthtech</li>
      <li className="hover:text-[#EDDEBA]">Pharma</li>
      <li className="hover:text-[#EDDEBA]">Hospitals & Providers</li>
      <li className="hover:text-[#EDDEBA]">Diagnostics</li>
      <li className="hover:text-[#EDDEBA]">Precision Medicine</li>
    </ul>
  </div>

  <div>
    <h4 className="font-bold mb-3 sm:mb-4">
      VOH TV
    </h4>
    <ul className="space-y-1 font-semibold">
      <li className="hover:text-[#EDDEBA]">Expert Speaks</li>
      <li className="hover:text-[#EDDEBA]">The Big Idea</li>
      <li className="hover:text-[#EDDEBA]">Daily Broadcast</li>
    </ul>
  </div>

  <div>
    <h4 className="font-bold mb-3 sm:mb-4">
      EVENTS
    </h4>
    <ul className="space-y-1 font-semibold">
      <li className="hover:text-[#EDDEBA]">Health Awareness</li>
      <li className="hover:text-[#EDDEBA]">Conferences & Summits</li>
      <li className="hover:text-[#EDDEBA]">Brand Solutions</li>
    </ul>
  </div>

  <div>
    <h4 className="font-bold mb-3 sm:mb-4">
      VOH EXCLUSIVE
    </h4>
    <ul className="space-y-1 font-semibold">
      <li className="hover:text-[#EDDEBA]">Brands In Focus</li>
      <li className="hover:text-[#EDDEBA]">Idea Leader</li>
      <li className="hover:text-[#EDDEBA]">Listicles</li>
      <li className="hover:text-[#EDDEBA]">Editorials</li>
    </ul>
  </div>
</div>


          {/* Social Icons */}
          {/* <div className="flex justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
            {[BiLogoFacebook, FaInstagram, FaYoutube, RiTwitterXFill, AiFillLinkedin].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer text-[#A15B5B] p-1 bg-white rounded-full 
                  hover:bg-[#A15B5B] hover:text-white transition-all duration-300 transform hover:scale-110"
                />
              )
            )}
          </div> */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
            {[
              { Icon: BiLogoFacebook, url: "https://www.facebook.com/vohglobal" },
              { Icon: FaInstagram, url: "https://instagram.com/yourprofile" },
              { Icon: FaYoutube, url: "https://www.youtube.com/@VoiceofHealthcare" },
              { Icon: RiTwitterXFill, url: "https://x.com/vohglobal" },
              { Icon: AiFillLinkedin, url: "https://linkedin.com/in/yourprofile" },
            ].map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Icon
                  className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer text-[#A15B5B] p-1 bg-white rounded-full 
        hover:bg-[#A15B5B] hover:text-white transition-all duration-300 transform hover:scale-110"
                />
              </a>
            ))}
          </div>


          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm mt-4 font-semibold">
            <span className="hover:text-[#EDDEBA]">About Us</span>
            <span className="hidden sm:inline text-lg">•</span>
            <span className="hover:text-[#EDDEBA]">Ethics</span>
            <span className="hidden sm:inline text-lg">•</span>
            <span className="hover:text-[#EDDEBA]">Privacy Policy</span>
            <span className="hidden sm:inline text-lg">•</span>
            <span className="hover:text-[#EDDEBA]">Refund Policy</span>
            <span className="hidden sm:inline text-lg">•</span>
            <span className="hover:text-[#EDDEBA]">Terms & Conditions</span>
          </div>
        </div>
      </div>

      <div className="bg-[#842738] text-center py-2 px-2">
        <p className="text-white text-xs sm:text-sm md:text-md font-bold flex justify-center items-center gap-1 sm:gap-2">
          <Copyright size={18} className="sm:w-5 sm:h-5" /> ALL RIGHTS RESERVED BY VOH 2025
        </p>
      </div>
    </section>
  );
};

export default Footer;
