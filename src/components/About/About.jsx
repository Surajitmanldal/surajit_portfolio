import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/myphoto.png';

const About = () => {
    return (
        <section id='about' className='relative py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-12 md:mt-16 lg:mt-20 overflow-hidden'>
            {/* Background blobs */}
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center gap-8 md:gap-20 lg:gap-16'>
                {/* left-side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pr-4'>
                    {/* greeting */}
                    <div className='transform transition-all duration-500 hover:translate-x-2'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight
                            animate-[slideIn_0.5s_ease-out]
                            bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text'>
                            Hi, I am
                        </h1>
                        {/* name */}
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight
                            animate-[slideIn_0.5s_ease-out_0.2s_both]
                            bg-gradient-to-r from-[#8245ec] to-purple-400 text-transparent bg-clip-text">
                            Surajit Mandal
                        </h2>
                        {/* Skills Heading with Typing Effect */}
                        <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 leading-tight
                            animate-[slideIn_0.5s_ease-out_0.4s_both]">
                            <span className="text-white">I am a </span>
                            <span className="text-[#8245ec]">
                                <Typewriter
                                    words={[
                                        'Frontend Dev',
                                        'React Dev',
                                        'UI Designer',
                                        'BCA Student',
                                        'DSA Learner',
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h3>
                    </div>
                    {/* about me paragraph */}
                    <div className="relative max-w-lg">
                        <p className="relative text-base text-gray-400 mb-6 mt-6 leading-relaxed
                            animate-[fadeIn_0.5s_ease-out_0.6s_both]
                            border-l-2 border-[#8245ec] pl-4
                            hover:text-gray-300 transition-all duration-300
                            hover:scale-[1.02] hover:border-l-4">
                            Currently pursuing BCA with a passion for web development and DSA. I build responsive and dynamic interfaces using React, JavaScript, and modern web technologies.
                        </p>
                    </div>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1J828rfXApsnWeCUCulM4wvxerMgNJLmf/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block text-white py-3 px-8 rounded-full mt-3 text-lg font-bold 
                            transition-all duration-500 transform hover:scale-110 hover:rotate-2
                            animate-[fadeIn_0.5s_ease-out_0.8s_both]
                            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                            before:from-[#8245ec] before:to-purple-500 before:transition-all before:duration-500
                            before:hover:opacity-90 before:hover:scale-110 before:-z-10 before:blur-lg"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                        }}
                    >
                        DOWNLOAD Resume
                    </a>
                </div>

                {/* Right Side */}
                <div className="ml-10 md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative">
                        {/* Rotating circles */}
                        <div className="absolute inset-0 animate-spin-slow">
                            <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#8245ec] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 right-0 w-4 h-4 bg-purple-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-[#8245ec] rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-0 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <Tilt
                            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] rounded-full
                                animate-[fadeIn_0.5s_ease-out_0.4s_both]"
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            {/* Gradient border */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8245ec] to-purple-500 p-1 animate-spin-reverse-slower">
                                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#8245ec] to-purple-500 blur-xl opacity-50 animate-pulse"></div>
                            </div>
                            <img
                                src={profileImage}
                                alt="Surajit Mandal"
                                className="relative w-full h-full rounded-full object-cover 
                                    border-4 border-[#8245ec] 
                                    drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
