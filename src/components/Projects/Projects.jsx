import React from 'react'
import { projects } from '../../constants'

const Projects = () => {
    // Show only the projects you want to feature.
    // Change these IDs according to your constants.js / constants.ts
    const featuredProjects = projects.slice(0, 3)

    return (
        <section
            id="projects"
            className="
                relative py-24 px-[5vw] lg:px-[10vw]
                font-sans
                bg-[#08080c]
                overflow-hidden
            "
        >
            {/* Background Glow */}
            <div
                className="
                    absolute top-20 left-1/2 -translate-x-1/2
                    w-[500px] h-[300px]
                    bg-[#8245ec]/10
                    blur-[120px]
                    rounded-full
                    pointer-events-none
                "
            />

            <div
                className="
                    absolute top-[40%] -left-40
                    w-72 h-72
                    bg-purple-600/5
                    blur-[100px]
                    rounded-full
                    pointer-events-none
                "
            />

            {/* Section Header */}
            <div className="relative z-10 text-center mb-16 md:mb-20">
                <span
                    className="
                        inline-flex items-center gap-2
                        px-4 py-2 mb-5
                        rounded-full
                        border border-[#8245ec]/20
                        bg-[#8245ec]/5
                        text-[#a78bfa]
                        text-xs sm:text-sm
                        font-medium
                    "
                >
                    <span className="w-2 h-2 rounded-full bg-[#8245ec] animate-pulse" />
                    Featured Work
                </span>

                <h2
                    className="
                        text-4xl sm:text-5xl md:text-6xl
                        font-bold
                        text-white
                        tracking-tight
                    "
                >
                    My Projects
                </h2>

                <div
                    className="
                        w-20 h-[3px]
                        bg-gradient-to-r
                        from-purple-600
                        via-[#8245ec]
                        to-purple-400
                        mx-auto mt-5
                        rounded-full
                    "
                />

                <p
                    className="
                        text-gray-400
                        mt-6
                        text-sm sm:text-base md:text-lg
                        max-w-2xl
                        mx-auto
                        leading-relaxed
                    "
                >
                    A selection of full-stack applications I have designed
                    and built using modern web technologies.
                </p>
            </div>

            {/* Projects */}
            <div className="relative z-10 max-w-6xl mx-auto space-y-10">
                {featuredProjects.map((project, index) => (
                    <article
                        key={project.id}
                        className="
                            group relative
                            overflow-hidden
                            rounded-[28px]
                            border border-white/[0.08]
                            bg-gradient-to-br
                            from-white/[0.055]
                            via-[#111116]/90
                            to-[#09090d]
                            backdrop-blur-xl
                            transition-all duration-500
                            hover:border-[#8245ec]/35
                            hover:shadow-[0_25px_80px_rgba(130,69,236,0.12)]
                        "
                        style={{
                            animation: `fadeIn 0.7s ease-out forwards ${index * 0.15}s`,
                        }}
                    >
                        {/* Top Accent */}
                        <div
                            className="
                                absolute top-0 left-[10%] right-[10%]
                                h-[1px]
                                bg-gradient-to-r
                                from-transparent
                                via-[#8245ec]/60
                                to-transparent
                                opacity-60
                                group-hover:opacity-100
                                transition-opacity duration-500
                            "
                        />

                        {/* Glow */}
                        <div
                            className="
                                absolute -top-32 -right-32
                                w-72 h-72
                                rounded-full
                                bg-[#8245ec]/10
                                blur-[100px]
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity duration-700
                                pointer-events-none
                            "
                        />

                        <div className="grid lg:grid-cols-2 min-h-[420px]">

                            {/* Project Preview */}
                            <div
                                className={`
                                    relative
                                    min-h-[280px] lg:min-h-full
                                    overflow-hidden
                                    ${index % 2 !== 0 ? 'lg:order-2' : ''}
                                `}
                            >
                                {/* Image/Video */}
                                <div className="absolute inset-0 p-4 sm:p-6">
                                    <div
                                        className="
                                            relative
                                            w-full h-full
                                            min-h-[250px]
                                            overflow-hidden
                                            rounded-2xl
                                            border border-white/[0.08]
                                            bg-black/30
                                        "
                                    >
                                        <video
                                            src={project.image}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="
                                                w-full h-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                group-hover:scale-[1.04]
                                            "
                                        />

                                        {/* Image Overlay */}
                                        <div
                                            className="
                                                absolute inset-0
                                                bg-gradient-to-t
                                                from-black/70
                                                via-black/10
                                                to-transparent
                                            "
                                        />

                                        {/* Project Number */}
                                        <div
                                            className="
                                                absolute top-4 left-4
                                                w-11 h-11
                                                rounded-xl
                                                flex items-center justify-center
                                                border border-white/10
                                                bg-black/40
                                                backdrop-blur-md
                                                text-white
                                                text-sm
                                                font-bold
                                            "
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        {/* Preview Label */}
                                        <div
                                            className="
                                                absolute bottom-4 left-4
                                                px-3 py-1.5
                                                rounded-lg
                                                bg-black/50
                                                backdrop-blur-md
                                                border border-white/10
                                                text-xs
                                                text-gray-300
                                            "
                                        >
                                            Project Preview
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div
                                className={`
                                    relative
                                    flex flex-col
                                    justify-center
                                    p-6 sm:p-8 lg:p-10
                                    ${index % 2 !== 0 ? 'lg:order-1' : ''}
                                `}
                            >
                                {/* Category */}
                                <div className="flex items-center gap-3 mb-5">
                                    <span
                                        className="
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]
                                            text-[#a78bfa]
                                        "
                                    >
                                        Full Stack Project
                                    </span>

                                    <div className="h-px w-10 bg-[#8245ec]/40" />
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                                        text-2xl sm:text-3xl md:text-4xl
                                        font-bold
                                        text-white
                                        tracking-tight
                                        group-hover:text-[#c4b5fd]
                                        transition-colors duration-300
                                    "
                                >
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        mt-5
                                        text-gray-400
                                        text-sm sm:text-base
                                        leading-7
                                        max-w-xl
                                    "
                                >
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tags.slice(0, 6).map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="
                                                px-3 py-1.5
                                                rounded-lg
                                                border border-white/[0.08]
                                                bg-white/[0.035]
                                                text-xs sm:text-sm
                                                text-gray-300
                                                transition-all duration-300
                                                hover:border-[#8245ec]/30
                                                hover:bg-[#8245ec]/10
                                                hover:text-purple-200
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 mt-8">
                                    <a
                                        href={project.webapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group/button
                                            inline-flex
                                            items-center
                                            justify-center
                                            gap-2
                                            px-5 py-2.5
                                            rounded-xl
                                            bg-gradient-to-r
                                            from-purple-600
                                            to-[#8245ec]
                                            text-white
                                            text-sm
                                            font-semibold
                                            border border-purple-400/20
                                            shadow-[0_8px_25px_rgba(130,69,236,0.2)]
                                            hover:shadow-[0_12px_35px_rgba(130,69,236,0.35)]
                                            hover:-translate-y-0.5
                                            transition-all duration-300
                                        "
                                    >
                                        View Live
                                        <span
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover/button:translate-x-1
                                            "
                                        >
                                            ↗
                                        </span>
                                    </a>
                                    {project.id == 0 ? <button></button> : <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            justify-center
                                            gap-2
                                            px-5 py-2.5
                                            rounded-xl
                                            bg-white/[0.04]
                                            text-gray-300
                                            text-sm
                                            font-semibold
                                            border border-white/[0.09]
                                            hover:bg-white/[0.08]
                                            hover:border-[#8245ec]/30
                                            hover:text-white
                                            hover:-translate-y-0.5
                                            transition-all duration-300
                                        "
                                    >
                                        GitHub
                                        <span>↗</span>
                                    </a>}

                                </div>

                                {/* Bottom Project Number */}
                                <div
                                    className="
                                        absolute
                                        bottom-5 right-7
                                        text-6xl
                                        font-black
                                        text-white/[0.025]
                                        select-none
                                        pointer-events-none
                                    "
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 flex justify-center mt-14">
                <a
                    href="https://github.com/Surajitmanldal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center gap-2
                        px-6 py-3
                        rounded-xl
                        border border-[#8245ec]/25
                        bg-[#8245ec]/5
                        text-purple-300
                        text-sm font-semibold
                        hover:bg-[#8245ec]/10
                        hover:border-[#8245ec]/40
                        hover:text-white
                        transition-all duration-300
                    "
                >
                    View More Projects
                    <span>↗</span>
                </a>
            </div>
        </section>
    )
}

export default Projects