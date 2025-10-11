import { AccountTreeOutlined, ApiOutlined, CodeOutlined, ConstructionOutlined, SettingsOutlined, SpeakerNotesOutlined, } from "@mui/icons-material"
import { duration } from "@mui/material"
import { animate } from "framer-motion"

export const jobs = [{
    title: 'Application Cybersecurity Specialist',
    duration: '2023, June - Present',
    location: 'Siemens Canada - NB, Canada',
    description: "As a Jr. Application Cybersecurity Specialist at Siemens, I am actively engaged in various projects. My roles range from testing software for the Sinec Security Monitor (SSM), a network security monitoring tool, to serving as a full stack developer, enhancing and maintaining a dashboard used by our clients. \
    <br><br> \
    In addition to my usual responsibilities, Siemens strongly encourages continuous learning to stay up to date with current trends and technologies. They provide a dedicated platform where all employees can access learning materials that are not only related to our current roles but also covering a variety of other topics that captures our interest.",
}]

export const skills = [
    {
        icon: <SettingsOutlined className="text-2xl  " />,
        category: 'Technical',
        skills: ['React', 'Django', 'Flask', 'Pandas', 'Numpy', 'Matplotlib', 'Machine Learning', 'SQLite', 'SQAlchemy', 'Quality Assurance'],
        animate: 'spin',
    },
    {
        icon: <CodeOutlined className="text-2xl " />,
        category: 'Developmental Languages',
        skills: ['Python', 'Java', 'JavaScript', 'CSS', 'HTML', 'C', 'SQL', 'Racket', 'MatLab', 'Bash'],
    },
    {
        icon: <ApiOutlined className="text-2xl " />,
        category: 'Third-Party APIs',
        skills: ['MongoDB', 'Circle CI', 'TuyaIoT', 'Discord', 'NextJS', 'Angular'],
        animate: 'spin',
    },
    {
        icon: <AccountTreeOutlined className="text-2xl" />,
        category: 'Project Management',
        skills: ['Github', 'Agile', 'Trello', 'Google Drive', 'OneDrive'],
    },
    {
        icon: <ConstructionOutlined className="text-2xl" />,
        category: 'Tools',
        skills: ['VS Code', 'VS Codium', 'GCC', 'GIMP', 'Discord', 'Linux', 'Mac OS', 'Windows'],
    },
    {
        icon: <SpeakerNotesOutlined className="text-2xl" />,
        category: 'Languages',
        skills: ['English', 'Mandarin', 'Cantonese', 'Malay'],
    },
]

export const projects = [
    {
        title: 'Expenses Recorder',
        duration: 'Feb 2023 - Present',
        summary: 'This tool helps me meticulously record and track my expenses, giving me a comprehensive overview of my overall spending on a monthly and yearly basis. I can easily monitor my financial habits and see how well I stick to my budget plans.<br/><br/>With this tool, I gain valuable insights into my spending patterns, helping me make informed decisions to better manage my finances and achieve my financial goals.',
        link: '/projects/Expenses_Recorder',
    },
    {
        title: 'ScoreHub',
        duration: 'September 2025 - Present',
        summary: 'Game-Scorer is a real-time multiplayer web application designed to make tracking scores in card and party games effortless. It replaces messy paper score sheets with an interactive, synchronized scoreboard that updates live across all players’ devices, letting everyone stay focused on the game instead of the math.<br /><br /> Built with Flask - SocketIO, Redis, and Next.js, it features smooth real- time syncing, reconnect logic, and a clean interface optimized for both desktop and mobile.Game - Scorer blends utility with polish — fast, intuitive, and made for the chaotic fun of game nights.',
link: '/projects/score_hub',
    }
]