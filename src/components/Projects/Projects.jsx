import React, { useState } from 'react'
import { projects } from '../../constants'
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModel = (project) => {
        setSelectedProject(project);
    }

    const handleCloseModal = () => {
        setSelectedProject(null);
    }
    return (<section id='projects' className='relative py-10 pb-24 px-[4vw] md:px-[5vw] lg:px-[12vw] font-sans bg-gradient-to-b from-[#0a0a0a] via-[#1a1238] to-[#0a0a0a] overflow-hidden clip-path-custom3'>
        {/* section title */}
        <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl font-bold text-white bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300">PROJECTS</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">
                A showcase of the projects I have worked on, highlighting my skills
                and experience in various technologies
            </p>
        </div>        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className="group bg-gray-900/60 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/30 
                    hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,69,236,0.2)] cursor-pointer"
                    style={{
                        animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`
                    }}
                    onClick={() => handleOpenModel(project)}
                >
                    <div className="relative overflow-hidden h-48">
                        <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 
                                    rounded-full border border-purple-500/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>        {/* Modal Container */}
        {selectedProject && (
            <div className="fixed inset-x-0 top-[80px] bottom-0 z-999 flex items-start justify-center p-4 overflow-y-auto animate-[fadeIn_0.3s_ease-out]"
                style={{
                    backdropFilter: 'blur(8px)',
                    background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)'
                }}
                onClick={handleCloseModal}
            >
                <div
                    className="relative bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl 
                        shadow-[0_0_50px_rgba(130,69,236,0.15)] lg:w-[80%] w-[85%] max-w-2xl my-8
                        border border-purple-500/10 animate-[slideIn_0.3s_ease-out]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-3 right-3 z-[999] w-8 h-8 rounded-full 
                            flex items-center justify-center text-2xl
                            text-gray-400 hover:text-purple-400 
                            border border-gray-700/50 hover:border-purple-500/30
                            hover:bg-purple-500/10 hover:scale-110 hover:rotate-90 
                            transition-all duration-300 "
                        aria-label="Close modal"
                    >
                        ×
                    </button>

                    {/* Purple glow effects */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>

                    <div className="p-6">
                        <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                            {selectedProject.title}
                        </h3>

                        <div className="w-full flex justify-center relative group mb-6">
                            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <video
                                src={selectedProject.image} className="w-full h-[180px] md:h-[220px] object-contain rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.3)]
                                    transition-transform duration-500 group-hover:scale-105"
                                autoPlay
                                loop
                                muted
                                playsInline

                            />
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {selectedProject.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 
                                            rounded-full border border-purple-500/20 hover:bg-purple-500/20 
                                            transition-colors duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-2">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 group relative overflow-hidden bg-gray-800/80 
                                        text-gray-300 px-4 py-2.5 rounded-xl text-sm font-semibold text-center
                                        transition-all duration-300 hover:shadow-[0_0_20px_rgba(130,69,236,0.2)]
                                        border border-gray-700/50 hover:border-purple-500/30"
                                >
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                        View Code
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/20 
                                        translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    </div>
                                </a>
                                <a
                                    href={selectedProject.webapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-500
                                        text-white px-4 py-2.5 rounded-xl text-sm font-semibold text-center
                                        transition-all duration-300 hover:shadow-[0_0_20px_rgba(130,69,236,0.3)]
                                        border border-purple-500/30 hover:border-purple-400/50"
                                >
                                    <span className="relative z-10">
                                        View Live
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 
                                        translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </section>
    )
}

export default Projects
