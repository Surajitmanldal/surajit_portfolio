import React, { use, useEffect, useState } from 'react'
import { FiMenu, FiX, } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "contact" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled
            ? "bg-[#050414]/60 backdrop-blur-lg shadow-xl border border-white/10 rounded-md"
            : "bg-transparent"
            }`}>
            <div className='text-white py-5 flex justify-between items-center'>
                {/* Logo */}
                <div className='text-lg font-semibold cursor-pointer group transition-all duration-300 hover:scale-105' onClick={() => handleMenuItemClick('about')}>
                    <span className='text-[#B245ec] font-bold group-hover:animate-pulse'>&lt;</span>
                    <span className='text-white group-hover:text-[#8245ec] transition-colors duration-300'>Surajit</span>
                    <span className='text-[#B245ec] group-hover:animate-pulse'>/</span>
                    <span className='text-white group-hover:text-[#8245ec] transition-colors duration-300'>Mandal</span>
                    <span className='text-[#B245ec] font-bold group-hover:animate-pulse'>&gt;</span>
                </div>

                {/* Desktop menu */}
                <ul className={`hidden md:flex space-x-8 text-gray-300`}>
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={`relative group ${activeTab === item.id ? 'text-[#8245ec]' : ""
                                }`}
                        >
                            <button
                                onClick={() => handleMenuItemClick(item.id)}
                                className='cursor-pointer transition-all duration-300 hover:text-[#8245ec] py-2 group-hover:scale-105'
                            >
                                {item.label}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-[#8245ec] transition-all duration-300
                                        ${activeTab === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                ></span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://github.com/Surajitmanldal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 hover:scale-110 hover:rotate-6"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/surajit-mandal-b7148a306/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#8245ec] transition-all duration-300 hover:scale-110 hover:-rotate-6"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

                {/* Mobile menu */}
                <div className='md:hidden'>
                    {isOpen ? (
                        <FiX className='text-3xl text-[#8245ec] cursor-pointer hover:scale-110 transition-transform duration-300'
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <FiMenu className='text-3xl text-[#8245ec] cursor-pointer hover:scale-110 transition-transform duration-300'
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>
            </div>
            {/* mobile menu items */}
            {isOpen && (
                <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 
                    bg-gradient-to-b from-[#050414]/30 via-[#050414]/50 to-[#050414]/30
                    backdrop-filter backdrop-blur-xl z-50 
                    rounded-2xl shadow-[0_0_15px_rgba(130,69,236,0.2)]
                    border border-gray-700/30
                    md:hidden animate-fadeIn
                    before:absolute before:inset-0 before:rounded-2xl
                    before:bg-gradient-to-r before:from-[#8245ec]/10 before:to-purple-500/10
                    before:opacity-50 before:-z-10'>
                    <div className="relative">
                        <ul className='flex flex-col items-center space-y-4 py-6 text-gray-300'>
                            {menuItems.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={`w-full text-center transition-all duration-300 ease-in-out transform hover:scale-105 
                                        ${activeTab === item.id ? "text-[#8245ec]" : ""}`}
                                    style={{
                                        animation: `slideIn 0.3s ease-out forwards ${index * 0.1}s`,
                                        opacity: 0
                                    }}
                                >
                                    <button
                                        onClick={() => handleMenuItemClick(item.id)}
                                        className="w-full px-6 py-2 relative overflow-hidden group
                                            hover:text-white transition-all duration-300"
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#8245ec]/20 to-purple-500/20 
                                            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    </button>
                                </li>
                            ))}
                            <div className="flex space-x-6 mt-6 pt-4 border-t border-gray-700/30 w-4/5 justify-center
                                backdrop-blur-sm bg-white/5 rounded-lg"
                                style={{
                                    animation: 'slideIn 0.3s ease-out forwards 0.5s',
                                    opacity: 0
                                }}
                            >
                                <a
                                    href="https://github.com/Surajitmanldal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#8245ec] transform hover:scale-110 transition-all duration-300"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/surajit-mandal-b7148a306/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#8245ec] transform hover:scale-110 transition-all duration-300"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            )
            }
        </nav>
    )
}

export default Navbar
