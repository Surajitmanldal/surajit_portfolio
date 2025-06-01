// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import leetcodeLogo from './assets/tech_logo/leetcode.png'


// Education Section Logo's
import bsaLogo from './assets/education_logo/bsa_logo.png';
import schoolLogo from './assets/education_logo/school.jpeg'

// Project Section Logo's
import survisVideo from './assets/work_logo/survisVideo.mp4'
import cryptoVideo from './assets/work_logo/cryptoVideo.mp4'
import carVideo from './assets/work_logo/carVideo.mp4'
import dictionaryVideo from './assets/work_logo/dictionaryVideo.mp4'
import qrcodeVideo from './assets/work_logo/qrcodeVideo.mp4'
import musicVideo from './assets/work_logo/musicVideo.mp4'

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Languages & Programming',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'DSA', logo: leetcodeLogo }
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
        ],
    },
];

export const education = [
    {
        id: 0,
        img: bsaLogo,
        school: "Vidyasagar University, west bengal",
        date: "Agaust 2024 - Present",
        grade: "Pending",
        desc: "I am currently pursuing a Bachelor of Computer Applications (BCA) from Vidyasagar University. This program provides a strong foundation in computer science, programming, data structures, software development, and web technologies. Through this course, I am gaining practical skills in languages like Java, C, and JavaScript, and learning about the fundamentals of operating systems, database management, and networking. Vidyasagar University’s curriculum also encourages critical thinking, problem-solving, and project-based learning, helping me build a solid base for a future career in the IT industry.",
        degree: "Bachelor of Computer Applications - BCA",
    },
    {
        id: 1,
        img: schoolLogo,
        school: "Gobra I.N.K.M High School East Mediniput, West Bengal",
        date: "Apr 2023 - March 2024",
        grade: "81.5%",
        desc: "I completed my class 12 education from Gobra I.N.M.K High School, East Mediniput, under the WBCHSE board, where I studied History, Political Science, and English (Arts) with Computer Science.",
        degree: "WBCHSE(XII) - Arts with Computer Application",
    },
    {
        id: 2,
        img: schoolLogo,
        school: "Gobra I.N.K.M High School East Mediniput, West Bengal",
        date: "Jan 2021 - March 2022",
        grade: "56.6%",
        desc: "I completed my class 10 education Gobra I.N.M.K High School, East Mediniput, under the WBCSE board, where I studied Math,Physical Science,Geography,History,Life Science,Bengali & English.",
        degree: "WBCSE(X), Secondary Certificate",
    },
];

export const projects = [
    {
        id: 0,
        title: "🤖 Survis AI – Your Smart Chat Companion",
        description:
            "Survis AI is an intelligent chatbot built using the Gemini API that enables real-time, human-like conversations. Designed for both assistance and casual interaction, Survis AI processes user input and responds with contextually relevant answers. The project demonstrates how large language models can be integrated into a modern web interface to build interactive and responsive applications.",
        image: survisVideo,
        tags: ["HTML5", "CSS3", "JavaScript", "React JS", "Redux Toolkit", "Gemini API"],
        github: "https://github.com/Surajitmanldal/Survis-AI",
        webapp: "https://survisai.netlify.app/",
    },
    {
        id: 1,
        title: "💹 Crypto Info Web App (React)",
        description:
            "A sleek and modern cryptocurrency web application built with React, featuring real-time crypto market data, dynamic routing, responsive design, and elegant animations. Perfect for learning frontend development, API integration, and clean UI architecture.",
        image: cryptoVideo,
        tags: ["React JS", "React Router DOM (v6+)", "Crypto API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/Surajitmanldal/Crypto-place",
        webapp: "https://crypto-place-alw8.vercel.app/",
    },
    {
        id: 2,
        title: "🚗 Car Rental Website",
        description:
            "A simple and visually appealing Car Rental website built using HTML, CSS, and JavaScript. This project showcases a smooth, animated UI where users can explore rental car options, view features, and interact with a clean responsive layout — ideal for beginners in frontend development.",
        image: carVideo,
        tags: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Responsive Design", "Mobile-Friendly"],
        github: "https://github.com/Surajitmanldal/Car-Rental",
        webapp: "https://car-rental-applications.netlify.app/",
    },
    {
        id: 3,
        title: "Dictionary App",
        description:
            "This is a simple and interactive Dictionary web application built using HTML, CSS, and JavaScript. Users can search for any English word to get its meaning, pronunciation, part of speech, and example usage. The app fetches real-time data from a dictionary API and displays it in a clean and user-friendly interface. It also includes additional features like text-to-speech pronunciation and responsive design for a smooth experience across all devices.",
        image: dictionaryVideo,
        tags: ["HTML5", "CSS3", "Fetch API", "Java Script", "Responsive Design", "Theme Toggle"],
        github: "https://github.com/Surajitmanldal/Dictionary-App",
        webapp: "https://dictionaryappbysurajit.netlify.app/",
    },
    {
        id: 4,
        title: "QR Code-Generator",
        description:
            "This is a simple and responsive QR Code Generator web application built using HTML, CSS, and JavaScript. Users can enter any text or URL, and the app will instantly generate a corresponding QR code",
        image: qrcodeVideo,
        tags: ["JavaScript", "HTML5", "CSS", "Fetch API", "Responsive Design", "Event Handling"],
        github: "https://github.com/Surajitmanldal/QR-Code-Generator",
        webapp: "https://qr-code-generator-by-surajit.netlify.app/",
    },
    {
        id: 5,
        title: "Music Web-Application",
        description:
            "A sleek and responsive Music Player Web App built using HTML, CSS, and JavaScript that allows users to play, pause, skip, and control music playback from a curated playlist. Designed with a focus on clean UI and smooth user experience, it mimics the functionality of basic music streaming apps.",
        image: musicVideo,
        tags: ["HTML", "CSS", "JavaScript", "Music controllar"],
        github: "https://github.com/Surajitmanldal/Music",
        webapp: "https://sura2242s.github.io/myMusic/",
    },

];  