import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { education } from '../../constants';

const Education = () => {
    return (<section id='education' className='relative py-24 pb-24 px-[4vw] md:px-[5vw] lg:px-[12vw] font-sans bg-gradient-to-b from-[#0a0a0a] via-[#1a1238] to-[#0a0a0a] overflow-hidden clip-path-custom2'>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,69,236,0.08)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,69,236,0.05)_0%,transparent_50%)] animate-pulse"></div>
        <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl font-bold text-white bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300">EDUCATION</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">
                My education has been a journey of learning and development. Here are the details of my academic background
            </p>
        </div>
        <VerticalTimeline>
            {education.map((edu, index) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{
                        background: 'rgba(17, 24, 39, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        borderRadius: '16px',
                        color: '#fff'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.7)' }}
                    date={edu.date}
                    iconStyle={{
                        background: '#8245ec',
                        color: '#fff',
                        boxShadow: '0 0 0 4px #8245ec40',
                        transition: 'all 0.3s ease'
                    }}
                    icon={<MdSchool className="text-xl" />}
                    key={index}
                >                    <div className="space-y-3 sm:space-y-4 transition-all duration-300 hover:transform hover:scale-[1.02]">
                        <div className="flex flex-row gap-4 sm:gap-6 items-start">
                            <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg border-2 border-purple-500/30">
                                <img
                                    src={edu.img}
                                    alt={edu.school}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            <div className="flex-1 space-y-1 sm:space-y-2">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-purple-400 leading-tight">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="text-lg sm:text-xl text-gray-300 mt-0.5 sm:mt-1">
                                        {edu.school}
                                    </h4>
                                </div>
                                <p className="text-gray-400 text-xs sm:text-sm">{edu.date}</p>
                            </div>
                        </div>

                        <p className="text-purple-300 font-semibold text-sm sm:text-base">Grade: {edu.grade}</p>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{edu.desc}</p>
                    </div>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </section >
    )
}

export default Education
