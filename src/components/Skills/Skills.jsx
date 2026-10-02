import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiCloud, FiCode, FiDatabase, FiLayers, FiTerminal, FiTool } from 'react-icons/fi'
import { SkillsInfo } from '../../constants'
import BlurBlob from '../BlurBlob'
import Tooltip from '../Tooltip/Tooltip'

const categoryDetails = [
    { icon: FiCode, label: 'Interface craft', color: '#8b5cf6' },
    { icon: FiTerminal, label: 'Server systems', color: '#22c55e' },
    { icon: FiDatabase, label: 'Data & identity', color: '#38bdf8' },
    { icon: FiCloud, label: 'Scale & ship', color: '#f59e0b' },
    { icon: FiTool, label: 'Daily workflow', color: '#f472b6' },
    { icon: FiLayers, label: 'Core foundations', color: '#a78bfa' },
]

const descriptions = {
    'React JS': 'Component-driven interfaces with modern React patterns and reusable UI systems.',
    'Next.js': 'Full-stack React apps with App Router, server rendering, and API routes.',
    'TypeScript': 'Reliable, type-safe applications using interfaces, generics, and typed components.',
    'JavaScript': 'Modern ES6+, async workflows, browser APIs, and clean client-side logic.',
    'Tailwind CSS': 'Responsive visual systems built with composable utility-first CSS.',
    'HTML': 'Semantic, accessible markup and modern web standards.',
    'CSS': 'Responsive layouts, animation, transitions, Grid, and Flexbox.',
    'Redux Toolkit': 'Predictable application state with slices, async thunks, and RTK Query.',
    'Node.js': 'Scalable server-side applications and API services with JavaScript.',
    'Express.js': 'REST APIs, middleware, routing, validation, and server-side logic.',
    'REST API': 'Well-structured HTTP APIs with validation and meaningful responses.',
    'Socket.io': 'Real-time, event-driven experiences and live updates.',
    'JWT': 'Token-based authentication for protected applications and APIs.',
    'bcrypt': 'Secure password hashing for authentication flows.',
    'Multer': 'File and multipart form-data handling for Node.js services.',
    'MongoDB': 'Flexible document data modeling for application data.',
    'PostgreSQL': 'Structured relational data with SQL-backed workflows.',
    'Prisma': 'Type-safe database access for TypeScript applications.',
    'Supabase': 'PostgreSQL, authentication, and backend tooling in one platform.',
    'Cloudinary': 'Cloud media storage, transformation, and delivery.',
    'NextAuth': 'Secure, session-based authentication for Next.js apps.',
    'AWS': 'Cloud services for deployment and modern application architecture.',
    'EC2': 'Cloud virtual servers for hosting applications and services.',
    'S3': 'Durable object storage for uploads, files, and media.',
    'Lambda': 'Serverless functions without managing infrastructure.',
    'API Gateway': 'Managed HTTP API endpoints connected to backend services.',
    'DynamoDB': 'Scalable serverless NoSQL data storage.',
    'Bedrock': 'Foundation-model integration for AI-powered product features.',
    'Vercel': 'Fast deployment for modern web and Next.js applications.',
    'Render': 'Managed deployment for backend APIs and full-stack apps.',
    'Git': 'Version control for reliable development workflows.',
    'GitHub': 'Code hosting, collaboration, and project management.',
    'VS Code': 'A productive, extensible environment for modern development.',
    'Razorpay': 'Payment gateway integrations for web applications.',
    'Leaflet': 'Interactive mapping for location-aware experiences.',
    'WireGuard': 'Modern, secure VPN configuration and management.',
    'Java': 'Object-oriented programming and data-structures practice.',
    'C': 'Programming fundamentals, memory, pointers, and procedural logic.',
    'DSA': 'Data structures and algorithms for sharper problem-solving.',
}

const Skills = () => {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.12 })
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="skills" className="skills-section relative overflow-hidden px-5 py-24 text-white sm:px-8 md:px-[6vw] lg:px-[8vw] xl:px-[10vw]">
            <BlurBlob position={{ top: '13%', left: '-8%' }} size={{ width: '390px', height: '390px' }} variant="slow" />
            <BlurBlob position={{ top: '52%', left: '79%' }} size={{ width: '440px', height: '440px' }} variant="default" />
            <div className="skills-grid-pattern pointer-events-none absolute inset-0 opacity-40" />

            <div className={`relative mx-auto max-w-7xl ${isVisible ? 'skills-reveal' : 'skills-pending'}`}>
                <header className="mb-12 flex flex-col gap-6 border-b border-white/[0.09] pb-9 md:mb-14 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300"><span className="h-px w-9 bg-violet-400" />Technical toolkit</div>
                        <h2 className="text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">Built to turn ideas<span className="block bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-300 bg-clip-text text-transparent">into working products.</span></h2>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">A focused full-stack toolkit for crafting fast interfaces, dependable APIs, and cloud-ready experiences.</p>
                </header>

                <div className="mb-8 flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-slate-500"><span>{SkillsInfo.reduce((total, category) => total + category.skills.length, 0)} tools & technologies</span><span className="hidden sm:inline">Hover a tool to explore</span></div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {SkillsInfo.map((category, index) => {
                        const detail = categoryDetails[index]
                        const CategoryIcon = detail.icon
                        return <article key={category.title} className="skills-category group relative" style={{ '--category-color': detail.color, '--reveal-delay': `${index * 90}ms` }}>
                            <div className="skills-category-glow pointer-events-none absolute -inset-px rounded-[1.6rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="relative h-full rounded-[1.55rem] border border-white/[0.09] bg-[#0b0b14]/85 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-1 group-hover:border-white/[0.18] sm:p-6">
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                <div className="mb-7 flex items-start justify-between"><div className="flex items-center gap-3.5"><div className="skills-category-icon flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.045]"><CategoryIcon size={20} aria-hidden="true" /></div><div><p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{detail.label}</p><h3 className="text-xl font-semibold tracking-tight text-white">{category.title}</h3></div></div><span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-slate-400">{String(category.skills.length).padStart(2, '0')}</span></div>
                                <div className="grid grid-cols-2 gap-2.5">
                                    {category.skills.map((skill) => {
                                        const item = <div className="skills-item group/item relative flex min-w-0 items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2.5 py-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.075]"><div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-black/25 p-1.5 ring-1 ring-inset ring-white/[0.06] transition duration-300 group-hover/item:scale-110">
                                            <img src={skill.logo} alt="" className="h-full w-full object-contain" loading="lazy" /></div><span className="truncate text-xs font-medium text-slate-300 transition-colors group-hover/item:text-white sm:text-sm">{skill.name}</span><FiArrowUpRight className="ml-auto hidden flex-none text-[var(--category-color)] opacity-0 transition duration-300 group-hover/item:opacity-100 sm:block" size={14} aria-hidden="true" /></div>
                                        return <Tooltip key={skill.name} content={descriptions[skill.name] || `${skill.name} is part of my development toolkit.`}>{skill.name === 'DSA' ? <a href="https://leetcode.com/u/surajitmandal23/" target="_blank" rel="noopener noreferrer" aria-label="View DSA profile on LeetCode">{item}</a> : item}</Tooltip>
                                    })}
                                </div>
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills
