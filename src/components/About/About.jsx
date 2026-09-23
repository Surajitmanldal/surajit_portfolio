import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profileImage.png'

const About = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center overflow-hidden
            px-[7vw] md:px-[7vw] lg:px-[10vw] xl:px-[12vw]
            py-20 md:py-24 font-sans .clip-path-custom"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-[#8245ec]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 lg:gap-20">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="order-2 lg:order-1">

                        {/* Availability Badge */}
                        <div className="mb-6 flex justify-center lg:justify-start">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2
                                rounded-full border border-[#8245ec]/30
                                bg-[#8245ec]/5 backdrop-blur-sm
                                text-sm text-gray-300"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                                </span>

                                Available for opportunities
                            </div>
                        </div>

                        {/* Greeting */}
                        <p
                            className="text-gray-400 text-lg md:text-xl mb-2
                            text-center lg:text-left
                            animate-[fadeIn_0.5s_ease-out]"
                        >
                            Hi, I'm
                        </p>

                        {/* Name */}
                        <h1
                            className="text-5xl sm:text-6xl md:text-7xl
                            font-bold tracking-tight mb-5
                            text-center lg:text-left
                            bg-gradient-to-r from-white via-white to-gray-400
                            text-transparent bg-clip-text
                            animate-[slideIn_0.5s_ease-out]"
                        >
                            Surajit Mandal
                        </h1>

                        {/* Role */}
                        <div
                            className="flex flex-col sm:flex-row items-center
                            lg:items-start gap-2 sm:gap-3 mb-7
                            text-center lg:text-left"
                        >
                            <span className="text-xl md:text-2xl text-gray-300 font-medium">
                                I'm a
                            </span>

                            <span
                                className="text-xl md:text-2xl font-semibold
                                text-[#8245ec]"
                            >
                                <Typewriter
                                    words={[
                                        'Software Engineer',
                                        'Full Stack Developer',
                                        'Next.js Developer',
                                        'React & TypeScript Developer',
                                        'MERN Stack Developer',
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="w-20 h-1 bg-gradient-to-r from-[#8245ec] to-purple-500 rounded-full mb-7 mx-auto lg:mx-0" />

                        {/* Description */}
                        <p
                            className="max-w-2xl text-base md:text-lg
                            leading-8 text-gray-400
                            text-center lg:text-left
                            mb-8"
                        >
                            BCA student and Full Stack Developer focused on
                            building real-world web applications with
                            <span className="text-gray-200"> React, Next.js, TypeScript, </span>
                            and
                            <span className="text-gray-200"> Node.js. </span>
                            Experienced in developing responsive interfaces,
                            RESTful APIs, authentication systems, real-time
                            features, and cloud-based applications.
                        </p>

                        {/* Current Focus */}
                        <div
                            className="mb-9 p-5 rounded-2xl
                            border border-white/10
                            bg-white/[0.03] backdrop-blur-sm
                            hover:border-[#8245ec]/30
                            transition-all duration-300"
                        >
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                                Currently exploring
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Next.js',
                                    'TypeScript',
                                    'AWS',
                                    'AI Applications',
                                    'DSA',
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg
                                        text-sm text-gray-300
                                        border border-[#8245ec]/20
                                        bg-[#8245ec]/5
                                        hover:bg-[#8245ec]/10
                                        hover:border-[#8245ec]/40
                                        transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className="flex flex-wrap justify-center
                            lg:justify-start gap-4"
                        >
                            {/* Download CV */}
                            <a
                                href="https://drive.google.com/file/d/1VLiyOxiXwK7xhBVYS_OSFwgp0EkiOuem/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center
                                justify-center px-7 py-3.5
                                rounded-xl font-semibold text-white
                                overflow-hidden
                                bg-gradient-to-r from-[#8245ec] to-purple-500
                                shadow-lg shadow-[#8245ec]/20
                                hover:shadow-[#8245ec]/40
                                hover:-translate-y-1
                                transition-all duration-300"
                            >
                                <span className="relative z-10">
                                    Download CV
                                </span>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/Surajitmanldal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center
                                px-7 py-3.5 rounded-xl font-semibold
                                text-gray-200
                                border border-white/10
                                bg-white/[0.03]
                                hover:border-[#8245ec]/50
                                hover:bg-[#8245ec]/10
                                hover:-translate-y-1
                                transition-all duration-300"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* ================= RIGHT IMAGE ================= */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative">

                            {/* Outer Glow */}
                            <div
                                className="absolute inset-0 rounded-full
                                bg-[#8245ec]/20 blur-[80px]
                                scale-90"
                            />

                            {/* Rotating Orbit */}
                            <div
                                className="absolute -inset-8
                                rounded-full border border-[#8245ec]/20
                                animate-spin-slow"
                            >
                                <span
                                    className="absolute -top-1.5 left-1/2
                                    -translate-x-1/2
                                    w-3 h-3 rounded-full
                                    bg-[#8245ec]
                                    shadow-[0_0_15px_#8245ec]"
                                />

                                <span
                                    className="absolute top-1/2 -right-1.5
                                    -translate-y-1/2
                                    w-3 h-3 rounded-full
                                    bg-purple-500
                                    shadow-[0_0_15px_#a855f7]"
                                />

                                <span
                                    className="absolute -bottom-1.5 left-1/2
                                    -translate-x-1/2
                                    w-3 h-3 rounded-full
                                    bg-[#8245ec]
                                    shadow-[0_0_15px_#8245ec]"
                                />

                                <span
                                    className="absolute top-1/2 -left-1.5
                                    -translate-y-1/2
                                    w-3 h-3 rounded-full
                                    bg-purple-500
                                    shadow-[0_0_15px_#a855f7]"
                                />
                            </div>

                            {/* Profile Container */}
                            <Tilt
                                className="relative w-56 h-56
                                sm:w-72 sm:h-72
                                md:w-80 md:h-80
                                lg:w-[25rem] lg:h-[25rem]"
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                perspective={1000}
                                scale={1.03}
                                transitionSpeed={1000}
                                gyroscope={true}
                            >
                                {/* Gradient Border */}
                                <div
                                    className="absolute inset-0 rounded-full
                                    p-[3px]
                                    bg-gradient-to-br
                                    from-[#8245ec]
                                    via-purple-500
                                    to-[#8245ec]"
                                >
                                    {/* Image Background */}
                                    <div
                                        className="w-full h-full rounded-full
                                        bg-[#0b0b0f]
                                        p-2"
                                    >
                                        <img
                                            src={profileImage}
                                            alt="Surajit Mandal"
                                            className="w-full h-full
                                            rounded-full
                                            object-cover
                                            border border-white/10
                                            drop-shadow-[0_15px_40px_rgba(130,69,236,0.35)]"
                                        />
                                    </div>
                                </div>
                            </Tilt>

                            {/* Floating Tech Badge */}
                            {/* Floating Tech Badge */}
                            <div
                                className="absolute -bottom-5 -left-5
    px-4 py-3 rounded-xl
    border border-[#8245ec]/25
    bg-[#0d0d12]/55
    backdrop-blur-md
    shadow-xl"
                            >
                                <p className="text-xs text-gray-500 mb-1">
                                    Focus
                                </p>
                                <p className="text-sm font-semibold text-white">
                                    Next.js + TypeScript
                                </p>
                            </div>

                            {/* Floating AWS Badge */}
                            <div
                                className="absolute -top-5 -right-5
    px-4 py-3 rounded-xl
    border border-[#8245ec]/25
    bg-[#0d0d12]/55
    backdrop-blur-md
    shadow-xl"
                            >
                                <p className="text-xs text-gray-500 mb-1">
                                    Exploring
                                </p>
                                <p className="text-sm font-semibold text-white">
                                    AWS + AI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About