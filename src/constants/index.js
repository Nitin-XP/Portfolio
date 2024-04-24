import {
    archit,
    backend,
    colconai,
    creator,
    css,
    git,
    html,
    javascript,
    meta,
    mobile,
    mongodb,
    mysql,
    nodejs,
    portfolio,
    priyanka,
    pythonLogo,
    reactjs,
    redux,
    shopify,
    siddharth,
    starbucks,
    tailwind,
    tesla,
    threejs,
    web,
    workinprogress
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: pythonLogo,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },

];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Nitin demonstrates a proactive attitude towards learning new technologies, readily adapting and ramping up on unfamiliar concepts and tools.",
        name: "Siddharth Ahuja",
        designation: "Software Engineer II",
        company: "Microsoft",
        image: siddharth,
    },
    {
        testimonial:
            "I'm impressed by Nitin's ability not only to discuss potential ideas but also to offer practical solutions on how to implement them.",
        name: "Priyanka Srivastava",
        designation: "Software Engineer",
        company: "Microsoft",
        image: priyanka,
    },
    {
        testimonial:
            "Nitin recognizes the significance of decomposing problems into sub-problems and follows a bottom-up approach to systematically address and solve them.",
        name: "Archit Jain",
        designation: "Business Intelligence Engineer",
        company: "Amazon",
        image: archit,
    },
];

const projects = [
    {
        name: "Portfolio",
        description:
            "Developed a portfolio website using React, Tailwind CSS, and Three.js with dynamic animations and responsive design to showcase skills effectively.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "emailJs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "threejs",
                color: "blue-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/",
    },
    {
        name: "COLCON AI",
        description:
            "Developing AI-powered code language converter: Seamlessly translates code between programming languages with advanced natural language processing.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "AI APIs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: colconai,
        source_code_link: "https://colcon-ai.netlify.app/",
    },
    {
        name: "Trading Analysis",
        description:
            "Creating a platform for traders to share and view analysis, fostering a collaborative community with interactive charts and real-time market updates.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: workinprogress,
        source_code_link: "https://github.com/Nitin-XP",
    },
];

export { experiences, projects, services, technologies, testimonials };
