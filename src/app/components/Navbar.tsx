// // components/Navbar.tsx
// 'use client'

// import Image from 'next/image'
// import { Home, Menu } from 'lucide-react'
// import { RiMenu2Line } from "react-icons/ri";

// const Navbar = () => {
//     const scrollToSection = (sectionId: string) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//                 inline: 'nearest'
//             });
//         }
//     };

//     return (
//         <div className="fixed top-4 left-6 right-6 z-50">
//             <div className="max-w-6xl mx-auto flex items-start gap-2">

//                 {/* Left Part - Logo, Title, Navigation */}
//                 <div className="flex-1 bg-[#E8D5B7] rounded-l-full px-6 pt-4 pb-2 shadow-lg">
//                     <div className="flex items-start justify-start w-full">
//                         {/* Logo */}
//                         <div className="flex items-center align-middle p-2 mr-4">
//                             <Image
//                                 src="/VOH_logo_2.png"
//                                 alt="VOH Logo"
//                                 width={110}
//                                 height={30}
//                                 className="object-contain"
//                             />
//                         </div>

//                         {/* Vertical Divider */}
//                         <div className='max-h-xl my-auto'>
//                             <div
//                                 className="h-8 bg-[#A21B43] rounded-full mr-6"
//                                 style={{
//                                     width: '2px',
//                                     clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
//                                 }}
//                             ></div>
//                         </div>

//                         {/* Title and Navigation */}
//                         <div className="flex-1 flex flex-col items-left">
//                             {/* Title */}
//                             <div className="flex items-baseline gap-2 mb-1">
//                                 <h1 className="text-2xl font-bold text-[#8B1538]">BEAT 2025</h1>
//                                 <span className="text-lg font-semibold text-black">NATIONAL CARDIOVASCULAR</span>
//                                 <span className="text-sm text-black">SUMMIT & AWARDS</span>
//                             </div>

//                             {/* Navigation Menu */}
//                             <div className="border-t border-[#D4C4A8] mr-24">
//                                 <nav className="flex justify-left items-center gap-3 text-[10px] font-medium text-[#4A4A4A] uppercase tracking-wide">
//                                     <button
//                                         onClick={() => scrollToSection('overview')}
//                                         className="hover:text-[#8B1538] transition-colors cursor-pointer py-1"
//                                     >
//                                         OVERVIEW
//                                     </button>
//                                     <button
//                                         onClick={() => scrollToSection('why-beat-matters')}
//                                         className="hover:text-[#8B1538] transition-colors cursor-pointer py-1"
//                                     >
//                                         WHY BEAT MATTERS?
//                                     </button>
//                                     <button
//                                         onClick={() => scrollToSection('key-discussion-points')}
//                                         className="hover:text-[#8B1538] transition-colors cursor-pointer py-1"
//                                     >
//                                         KEY DISCUSSION POINTS
//                                     </button>
//                                     <button
//                                         onClick={() => scrollToSection('who-should-attend')}
//                                         className="hover:text-[#8B1538] transition-colors cursor-pointer py-1"
//                                     >
//                                         WHO SHOULD ATTEND?
//                                     </button>
//                                     <button
//                                         onClick={() => scrollToSection('leaders')}
//                                         className="hover:text-[#8B1538] transition-colors cursor-pointer py-1"
//                                     >
//                                         LEADERS
//                                     </button>
//                                     <button
//                                         onClick={() => scrollToSection('partners')}
//                                         className="hover:text-[#8B1538] transition-colors cursor-pointer py-1"
//                                     >
//                                         PARTNERS
//                                     </button>
//                                     <button
//                                         onClick={() => scrollToSection('registration')}
//                                         className="hover:text-[#8B1538] transition-colors cursor-pointer py-1"
//                                     >
//                                         REGISTRATIONS
//                                     </button>
//                                     <button
//                                         onClick={() => scrollToSection('contact-us')}
//                                         className="hover:text-[#8B1538] transition-colors cursor-pointer py-1"
//                                     >
//                                         CONTACT US
//                                     </button>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Part - Icons */}
//                 <div className="bg-[#E8D5B7] rounded-r-full px-6 py-[26.5px] shadow-lg">
//                     <div className="flex items-center gap-3">
//                         <a
//                             href="https://example.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
//                         >
//                             <Home className="w-7 h-7 text-[#4A4A4A] hover:text-white" />
//                         </a>
//                         <a
//                             href="https://another-link.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
//                         >
//                             <RiMenu2Line className="w-7 h-7 text-[#4A4A4A] hover:text-white" />
//                         </a>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default Navbar

// components/Navbar.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Home, Menu, X } from 'lucide-react'
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
        // Close mobile menu after clicking
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'overview', label: 'OVERVIEW' },
        { id: 'why-beat-matters', label: 'WHY BEAT MATTERS?' },
        { id: 'key-discussion-points', label: 'KEY DISCUSSION POINTS' },
        { id: 'who-should-attend', label: 'WHO SHOULD ATTEND?' },
        { id: 'leaders', label: 'LEADERS' },
        { id: 'partners', label: 'PARTNERS' },
        { id: 'registration', label: 'REGISTRATIONS' },
        { id: 'contact-us', label: 'CONTACT US' }
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <div className="fixed top-4 left-6 right-6 z-50 hidden lg:block">
                <div className="max-w-7xl mx-auto flex items-start gap-2">
                    {/* Left Part - Logo, Title, Navigation */}
                    <div className="flex-1 bg-[#E8D5B7] rounded-l-full px-6 pt-4 pb-2 shadow-lg">
                        <div className="flex items-start justify-start w-full">
                            {/* Logo */}
                            <div className="flex items-center align-middle p-2 mr-4 flex-shrink-0">
                                <Image
                                    src="/VOH_logo_2.png"
                                    alt="VOH Logo"
                                    width={110}
                                    height={30}
                                    className="object-contain"
                                />
                            </div>

                            {/* Vertical Divider */}
                            <div className='max-h-xl my-auto flex-shrink-0'>
                                <div
                                    className="h-8 bg-[#A21B43] rounded-full mr-6"
                                    style={{
                                        width: '2px',
                                        clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                                    }}
                                ></div>
                            </div>

                            {/* Title and Navigation */}
                            <div className="flex-1 flex flex-col items-left min-w-0">
                                {/* Title */}
                                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                                    <h1 className="text-2xl font-bold text-[#8B1538] whitespace-nowrap">BEAT 2025</h1>
                                    <span className="text-lg font-semibold text-black whitespace-nowrap">NATIONAL CARDIOVASCULAR</span>
                                    <span className="text-sm text-black whitespace-nowrap">SUMMIT & AWARDS</span>
                                </div>

                                {/* Navigation Menu */}
                                <div className="border-t border-[#D4C4A8] mr-24">
                                    <nav className="flex justify-left items-center gap-3 text-[10px] font-medium text-[#4A4A4A] uppercase tracking-wide flex-wrap">
                                        {navItems.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className="hover:text-[#8B1538] transition-colors cursor-pointer py-1 whitespace-nowrap"
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Part - Icons */}
                    <div className="bg-[#E8D5B7] rounded-r-full px-6 py-[26.5px] shadow-lg flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
                            >
                                <Home className="w-7 h-7 text-[#4A4A4A] hover:text-white" />
                            </a>
                            <a
                                href="https://another-link.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
                            >
                                <RiMenu2Line className="w-7 h-7 text-[#4A4A4A] hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Navbar */}
            <div className="fixed top-4 left-4 right-4 z-50 hidden md:block lg:hidden">
                <div className="bg-[#E8D5B7] rounded-full px-4 py-3 shadow-lg">
                    <div className="flex items-center justify-between">
                        {/* Logo and Title */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="/VOH_logo_2.png"
                                alt="VOH Logo"
                                width={80}
                                height={22}
                                className="object-contain"
                            />
                            <div className="h-6 w-px bg-[#A21B43]"></div>
                            <div className="flex flex-col">
                                <h1 className="text-lg font-bold text-[#8B1538]">BEAT 2025</h1>
                                <span className="text-xs font-semibold text-black">NATIONAL CARDIOVASCULAR SUMMIT</span>
                            </div>
                        </div>

                        {/* Navigation and Icons */}
                        <div className="flex items-center gap-4">
                            <nav className="flex items-center gap-2 text-[9px] font-medium text-[#4A4A4A] uppercase tracking-wide">
                                {navItems.slice(0, 4).map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="hover:text-[#8B1538] transition-colors cursor-pointer py-1 px-1"
                                    >
                                        {item.label.length > 15 ? item.label.substring(0, 12) + '...' : item.label}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    className="hover:text-[#8B1538] transition-colors cursor-pointer py-1 px-1"
                                >
                                    MORE
                                </button>
                            </nav>
                            
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
                                >
                                    <Home className="w-5 h-5 text-[#4A4A4A] hover:text-white" />
                                </a>
                                <a
                                    href="https://another-link.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
                                >
                                    <RiMenu2Line className="w-5 h-5 text-[#4A4A4A] hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="fixed top-4 left-4 right-4 z-50 md:hidden">
                <div className="bg-[#E8D5B7] rounded-full px-4 py-3 shadow-lg">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="/VOH_logo_2.png"
                                alt="VOH Logo"
                                width={60}
                                height={16}
                                className="object-contain"
                            />
                            <div className="flex flex-col">
                                <h1 className="text-sm font-bold text-[#8B1538]">BEAT 2025</h1>
                                <span className="text-[10px] font-semibold text-black">CARDIOVASCULAR SUMMIT</span>
                            </div>
                        </div>

                        {/* Mobile Menu Button and Icons */}
                        <div className="flex items-center gap-2">
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
                            >
                                <Home className="w-5 h-5 text-[#4A4A4A] hover:text-white" />
                            </a>
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
                            >
                                <Menu className="w-5 h-5 text-[#4A4A4A] hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>
                    
                    {/* Menu Panel */}
                    <div className="absolute top-4 left-4 right-4 bg-[#E8D5B7] rounded-2xl shadow-xl max-h-[80vh] overflow-y-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-[#D4C4A8]">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/VOH_logo_2.png"
                                    alt="VOH Logo"
                                    width={60}
                                    height={16}
                                    className="object-contain"
                                />
                                <div>
                                    <h1 className="text-lg font-bold text-[#8B1538]">BEAT 2025</h1>
                                    <span className="text-sm font-semibold text-black">NATIONAL CARDIOVASCULAR</span>
                                    <br />
                                    <span className="text-xs text-black">SUMMIT & AWARDS</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5A5A5A] transition-colors"
                            >
                                <X className="w-5 h-5 text-[#4A4A4A] hover:text-white" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="p-4">
                            <div className="space-y-3">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="block w-full text-left px-3 py-2 text-sm font-medium text-[#4A4A4A] hover:text-[#8B1538] hover:bg-[#D4C4A8] rounded-lg transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            {/* Additional Links */}
                            <div className="mt-6 pt-4 border-t border-[#D4C4A8]">
                                <div className="flex items-center gap-4">
                                    <a
                                        href="https://another-link.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#4A4A4A] hover:text-[#8B1538] hover:bg-[#D4C4A8] rounded-lg transition-colors"
                                    >
                                        <RiMenu2Line className="w-4 h-4" />
                                        Menu
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar