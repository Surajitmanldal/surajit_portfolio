import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <footer className='relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1238] py-12 px-[4vw] md:px-[7vw] lg:px-[12vw]'>
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                <div className="absolute -top-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* Brand */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Surajit Mandal
                    </h2>
                    <p className="mt-2 text-gray-400 text-sm mx-auto">
                        Transforming ideas into reality through creative and efficient web development solutions.
                    </p>
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-4 mb-8">
                    {[
                        { name: "About", id: "about" },
                        { name: "Skills", id: "skills" },
                        { name: "Education", id: "education" },
                        { name: "Projects", id: "projects" },
                        { name: "Contact", id: "contact" }
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className="px-4 py-2 text-sm text-gray-300 hover:text-purple-400 
                                transition-all duration-300 hover:scale-110"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Social links */}
                <div className="py-8 border-t border-gray-800">
                    <div className="flex justify-center gap-6">
                        {[
                            { icon: <FaGithub className="w-5 h-5" />, link: "https://github.com/Surajitmanldal", label: "GitHub" },
                            { icon: <FaLinkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/surajit-mandal-b7148a306/", label: "LinkedIn" },
                            { icon: <FaFacebook className="w-5 h-5" />, link: "https://www.facebook.com/profile.php?id=61552204808073", label: "Facebook" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="text-gray-400 hover:text-purple-400 transform hover:scale-125 
                                    transition-all duration-300 hover:shadow-[0_0_10px_rgba(130,69,236,0.3)]"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Surajit Mandal. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
