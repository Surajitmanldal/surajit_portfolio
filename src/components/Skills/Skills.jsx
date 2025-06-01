import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt'
import BlurBlob from '../BlurBlob'
import Tooltip from '../Tooltip/Tooltip'

const getSkillDescription = (skillName) => {
    const descriptions = {
        'HTML': 'Semantic HTML5, Accessibility best practices, and modern markup standards',
        'CSS': 'Modern CSS3, Flexbox, Grid, Animations, and Responsive Design',
        'JavaScript': 'ES6+, DOM manipulation, Async/Await, and modern JavaScript practices',
        'React JS': 'React Hooks, Context API, Component lifecycles, and State Management',
        'Tailwind CSS': 'Utility-first CSS framework for rapid UI development',
        'Git': 'Version control, branching strategies, and collaborative development',
        'GitHub': 'Project hosting, CI/CD, and collaborative development platform',
        'Java': 'Object-Oriented Programming, Collections Framework, and Core Java concepts',
        'DSA': 'Click to view my LeetCode profile - Solving DSA problems in Java',
        'VS Code': 'Preferred IDE with productivity-enhancing extensions',
        'Redux': 'State management for complex React applications',
        'Bootstrap': 'Responsive front-end component library',
        'C': 'Learning foundational programming and memory concepts',
        'Vercel': 'Deploying fast and scalable React applications',
        'Netlify': 'Hosting static websites with CI/CD and custom domains'
    };
    return descriptions[skillName] || `${skillName} - Essential tool in my development stack`;
};

const Skills = () => {
    return (
        <section id='skills' className="relative py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans text-white overflow-hidden clip-path-custom clip-path-hover">
            {/* Background blobs */}
            <BlurBlob
                position={{ top: "30%", left: "10%" }}
                size={{ width: "400px", height: "400px" }}
                variant="slow"
            />
            <BlurBlob
                position={{ top: "60%", left: "85%" }}
                size={{ width: "500px", height: "500px" }}
                variant="default"
            />

            {/* Section Title */}
            <div className='relative text-center mb-12 animate-[fadeIn_0.5s_ease-out]'>
                <h2 className='text-4xl sm:text-5xl font-bold mb-3 
                    bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text'>
                    Skills
                </h2>
                <div className='w-24 h-1 bg-gradient-to-r from-[#8245ec] to-purple-500 mx-auto mt-2 rounded-full'></div>
                <p className='relative text-gray-400 mt-6 font-medium text-lg max-w-3xl mx-auto leading-relaxed
                    animate-[slideIn_0.5s_ease-out_0.2s_both]'>
                    I am a passionate and curious learner currently pursuing a BCA degree, with a strong interest in
                    front-end web development. My focus is on building responsive and interactive user interfaces
                    using HTML, CSS, JavaScript, and React.
                </p>
            </div>

            {/* Skills categories */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
                {SkillsInfo.map((category, index) => (
                    <div key={category.title}
                        className='relative group'
                        style={{
                            animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`
                        }}
                    >
                        <Tilt
                            className="h-full"
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                            scale={1.02}
                            transitionSpeed={1500}
                            gyroscope={true}
                        >
                            <div className='h-full bg-gradient-to-b from-gray-900/80 to-gray-900/60
                                backdrop-blur-xl px-4 sm:px-6 py-6 rounded-2xl
                                border border-gray-700/30
                                group-hover:border-[#8245ec]/30 transition-all duration-500
                                shadow-[0_0_20px_1px_rgba(130,69,236,0.1)]
                                group-hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.2)]'>

                                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center
                                    bg-gradient-to-r from-[#8245ec] to-purple-400 text-transparent bg-clip-text">
                                    {category.title}
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Tooltip key={skill.name} content={getSkillDescription(skill.name)}>
                                            <div
                                                className="relative flex items-center justify-start space-x-2 
                                                    bg-gray-800/30 backdrop-blur-sm
                                                    border border-gray-700/30 hover:border-[#8245ec]/30
                                                    rounded-2xl py-2 px-3 group/skill
                                                    transform transition-all duration-300 hover:scale-105
                                                    hover:shadow-[0_0_15px_rgba(130,69,236,0.2)]
                                                    min-w-0 cursor-pointer"
                                                style={{
                                                    animation: `slideIn 0.3s ease-out forwards ${index * 0.2 + skillIndex * 0.1}s`
                                                }}
                                            >
                                                <img
                                                    src={skill.logo}
                                                    alt={`${skill.name} logo`}
                                                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0
                                                        transform transition-transform duration-300
                                                        group-hover/skill:scale-110"
                                                />
                                                {skill.name.toLowerCase() === 'dsa' ? (
                                                    <a
                                                        href="https://leetcode.com/u/surajitmandal23/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs sm:text-sm text-gray-300 group-hover/skill:text-white
                                                            transition-colors duration-300 truncate hover:text-[#8245ec]"
                                                    >
                                                        {skill.name}
                                                    </a>
                                                ) : (
                                                    <span className="text-xs sm:text-sm text-gray-300 group-hover/skill:text-white
                                                        transition-colors duration-300 truncate">
                                                        {skill.name}
                                                    </span>
                                                )}
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>

            {/* Custom Shape Divider */}
        </section>
    )
}

export default Skills
