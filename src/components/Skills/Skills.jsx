import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt'
import BlurBlob from '../BlurBlob'
import Tooltip from '../Tooltip/Tooltip'

const getSkillDescription = (skillName) => {
    const descriptions = {
        // Frontend
        'React JS':
            'Building component-based interfaces with Hooks, Context API, reusable components, and modern React patterns',

        'Next.js':
            'Building full-stack applications with App Router, Server Components, API routes, dynamic routing, and modern rendering patterns',

        'TypeScript':
            'Type-safe JavaScript development with interfaces, types, generics, and typed React applications',

        'JavaScript':
            'ES6+, asynchronous programming, promises, DOM manipulation, APIs, and modern JavaScript practices',

        'Tailwind CSS':
            'Utility-first CSS for building responsive and modern user interfaces',

        'HTML':
            'Semantic HTML5, accessibility, forms, and modern markup standards',

        'CSS':
            'Responsive layouts, Flexbox, Grid, animations, transitions, and modern CSS',

        'Redux Toolkit':
            'State management for React applications using slices, async thunks, and RTK Query',

        // Backend
        'Node.js':
            'Server-side JavaScript runtime used for building scalable backend services and APIs',

        'Express.js':
            'Node.js framework for REST APIs, middleware, routing, authentication, and server-side logic',

        'REST API':
            'Designing APIs with HTTP methods, status codes, routing, validation, and structured responses',

        'Socket.io':
            'Real-time bidirectional communication for live updates and event-driven applications',

        'JWT':
            'Token-based authentication for securing APIs and protected routes',

        'bcrypt':
            'Secure password hashing for user authentication',

        'Multer':
            'Handling multipart form data and file uploads in Node.js applications',

        // Database
        'MongoDB':
            'NoSQL document database used for storing and managing application data',

        'PostgreSQL':
            'Relational database used for structured application data and SQL-based queries',

        'Prisma':
            'Type-safe ORM for working with relational databases from TypeScript applications',

        'Supabase':
            'Backend platform providing PostgreSQL database, authentication, and developer tools',

        'Cloudinary':
            'Cloud-based media storage and image management used for application uploads',

        'NextAuth':
            'Authentication solution for Next.js applications with session and credential-based authentication',

        // AWS
        'AWS':
            'Cloud platform used for deploying applications and building serverless and cloud-based systems',

        'EC2':
            'Cloud virtual servers used for hosting applications and configuring a WireGuard VPN server',

        'S3':
            'Object storage used for application uploads, documents, and cloud-based file storage',

        'Lambda':
            'Serverless compute service used to run backend functions without managing servers',

        'API Gateway':
            'Managed service for creating and exposing HTTP APIs that connect with backend services',

        'DynamoDB':
            'NoSQL database used for building scalable serverless applications',

        'Bedrock':
            'AWS service used to integrate foundation models into AI-powered applications',

        // Deployment
        'Vercel':
            'Deployment platform used for hosting Next.js and modern frontend applications',

        'Render':
            'Cloud platform used for deploying backend APIs and full-stack applications',

        'Netlify':
            'Deployment and hosting platform used for frontend applications',

        // Tools
        'Git':
            'Version control system for tracking changes and managing development workflows',

        'GitHub':
            'Platform for source code hosting, collaboration, version control, and project management',

        'VS Code':
            'Primary development environment with extensions and tooling for modern web development',

        'Razorpay':
            'Payment gateway integration used for handling online payments in web applications',

        'Leaflet':
            'JavaScript mapping library used for interactive maps and location-based features',

        'WireGuard':
            'Modern VPN protocol used to build and manage secure VPN connections',

        // Programming
        'Java':
            'Object-oriented programming, collections, exception handling, and DSA practice',

        'C':
            'Programming fundamentals, memory concepts, pointers, and procedural programming',

        'DSA':
            'Practicing data structures and algorithms in Java to improve problem-solving skills',
    }
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
                    I build full-stack web applications using React, Next.js, TypeScript,
                    Node.js, and modern cloud technologies. My experience includes
                    authentication, REST APIs, real-time applications, database systems,
                    AWS services, and AI-powered applications.
                </p>
            </div>

            {/* Skills categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
                {SkillsInfo.map((category, index) => (
                    <div
                        key={category.title}
                        className="relative group h-full"
                        style={{
                            animation: `fadeIn 0.6s ease-out forwards ${index * 0.12}s`,
                        }}
                    >
                        <Tilt
                            className="h-full"
                            tiltMaxAngleX={8}
                            tiltMaxAngleY={8}
                            perspective={1200}
                            scale={1.02}
                            transitionSpeed={1200}
                            gyroscope={true}
                        >
                            <div
                                className="
                        relative h-full overflow-hidden
                        rounded-3xl
                        border border-white/[0.08]
                        bg-gradient-to-br
                        from-white/[0.06]
                        via-[#111116]/80
                        to-[#0c0c10]/90
                        backdrop-blur-2xl
                        p-5 sm:p-6
                        transition-all duration-500

                        group-hover:border-[#8245ec]/40
                        group-hover:-translate-y-1

                        shadow-[0_10px_40px_rgba(0,0,0,0.2)]
                        group-hover:shadow-[0_20px_50px_rgba(130,69,236,0.15)]
                    "
                            >
                                {/* Decorative glow */}
                                <div
                                    className="
                            absolute -top-24 -right-24
                            w-48 h-48
                            rounded-full
                            bg-[#8245ec]/10
                            blur-3xl
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity duration-700
                            pointer-events-none
                        "
                                />

                                <div
                                    className="
                            absolute -bottom-20 -left-20
                            w-40 h-40
                            rounded-full
                            bg-purple-500/5
                            blur-3xl
                            pointer-events-none
                        "
                                />

                                {/* Top accent line */}
                                <div
                                    className="
                            absolute top-0 left-8 right-8
                            h-[1px]
                            bg-gradient-to-r
                            from-transparent
                            via-[#8245ec]/60
                            to-transparent
                            opacity-50
                            group-hover:opacity-100
                            transition-opacity duration-500
                        "
                                />

                                {/* Category Header */}
                                <div className="relative flex items-center gap-3 mb-6">
                                    {/* Icon / number */}
                                    <div
                                        className="
                                flex items-center justify-center
                                w-10 h-10
                                rounded-xl
                                border border-[#8245ec]/20
                                bg-[#8245ec]/10
                                text-[#a78bfa]
                                text-sm font-bold
                                shadow-[0_0_20px_rgba(130,69,236,0.1)]
                            "
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <div>
                                        <h3
                                            className="
                                    text-xl sm:text-2xl
                                    font-bold
                                    tracking-tight
                                    text-white
                                "
                                        >
                                            {category.title}
                                        </h3>

                                        <div
                                            className="
                                    mt-1 h-[2px] w-10
                                    rounded-full
                                    bg-gradient-to-r
                                    from-[#8245ec]
                                    to-purple-400
                                    group-hover:w-16
                                    transition-all duration-500
                                "
                                        />
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="relative grid grid-cols-2 gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Tooltip
                                            key={skill.name}
                                            content={getSkillDescription(skill.name)}
                                        >
                                            <div
                                                className="
                                        relative
                                        flex items-center
                                        gap-2.5
                                        min-w-0
                                        px-3 py-2.5
                                        rounded-xl

                                        border border-white/[0.07]
                                        bg-white/[0.025]
                                        backdrop-blur-sm

                                        cursor-pointer

                                        transition-all duration-300

                                        hover:bg-[#8245ec]/10
                                        hover:border-[#8245ec]/35
                                        hover:-translate-y-1
                                        hover:shadow-[0_8px_20px_rgba(130,69,236,0.12)]
                                    "
                                                style={{
                                                    animation: `slideIn 0.35s ease-out forwards ${index * 0.15 +
                                                        skillIndex * 0.06
                                                        }s`,
                                                }}
                                            >
                                                {/* Skill glow */}
                                                <div
                                                    className="
                                            absolute inset-0
                                            rounded-xl
                                            bg-[#8245ec]/5
                                            opacity-0
                                            hover:opacity-100
                                            transition-opacity duration-300
                                            pointer-events-none
                                        "
                                                />

                                                {/* Logo container */}
                                                <div
                                                    className="
                                            relative
                                            flex-shrink-0
                                            flex items-center justify-center
                                            w-8 h-8
                                            rounded-lg
                                            border border-white/[0.06]
                                            bg-black/20
                                            group-hover/skill:bg-[#8245ec]/10
                                            transition-all duration-300
                                        "
                                                >
                                                    <img
                                                        src={skill.logo}
                                                        alt={`${skill.name} logo`}
                                                        className="
                                                w-5 h-5
                                                object-contain
                                                transition-transform duration-300
                                                hover:scale-110
                                            "
                                                    />
                                                </div>

                                                {/* Skill name */}
                                                {skill.name.toLowerCase() === 'dsa' ? (
                                                    <a
                                                        href="https://leetcode.com/u/surajitmandal23/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="
                                                relative
                                                text-xs sm:text-sm
                                                font-medium
                                                text-gray-400
                                                truncate
                                                hover:text-[#a78bfa]
                                                transition-colors duration-300
                                            "
                                                    >
                                                        {skill.name}
                                                    </a>
                                                ) : (
                                                    <span
                                                        className="
                                                relative
                                                text-xs sm:text-sm
                                                font-medium
                                                text-gray-400
                                                truncate
                                                group-hover/skill:text-gray-200
                                                transition-colors duration-300
                                            "
                                                    >
                                                        {skill.name}
                                                    </span>
                                                )}
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>

                                {/* Bottom decorative gradient */}
                                <div
                                    className="
                            absolute bottom-0 left-1/2
                            -translate-x-1/2
                            w-1/2 h-[1px]
                            bg-gradient-to-r
                            from-transparent
                            via-[#8245ec]/30
                            to-transparent
                            group-hover:w-3/4
                            group-hover:via-[#8245ec]/60
                            transition-all duration-500
                        "
                                />
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
