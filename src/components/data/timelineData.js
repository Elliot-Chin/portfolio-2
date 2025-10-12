// ----------------- DATA -----------------

const titles = [
    `<span class="!text-green-800">Still Debugging Life.</span>`,
    `<span class="!text-green-800">Currently in Maintenance Mode.</span>`,
    `<span class="!text-green-800">Still writing commits to this Timeline.</span>`
];

export const timeline = [
    {
        id: "born-1997",
        year: 1997, title: '<span class="!text-amber-950">An</span> <span class="!text-red-800">Origin Story</span>',
        desc: "A new process booted, and I existed.",
        type: "born",
        tech: ["Human OS", "Existance 101"]
    },
    {
        id: "2006-ctrlz",
        year: 2004, title: '<span class="!text-amber-950">Discovered</span> <span class="!text-red-800">CTRL+Z</span>',
        desc: "Unlocked god-mode for bad decisions. Peak achieved early.",
        type: "lore",
        tech: ["Keyboard", "CTRL + *"]
    },
    {
        id: "2010-highschool",
        year: 2010,
        title: '<span class="!text-amber-950">Started</span> <span class="!text-red-800">High School',
        desc: "New uniform, new friends, and my first real deadlines. Learned to juggle classes, clubs, and canteen curry puffs.",
        type: "lore",
        tech: ["MS PowerPoint", "Procrastination", "Group Projects"],
    },
    {
        id: "2016-html",
        year: 2016,
        title: '<span class="!text-amber-950">Discovery Phase</span> — <span class="!text-red-800">First HTML',
        desc: "Built a site with HTML and CSS <marquee> and thought it was art. It was.",
        type: "lore",
        tech: ["HTML", "CSS"]
    },
    {
        id: "2017-UNB",
        year: 2017,
        title: '<span class="!text-amber-950">Next Steps</span> — <span class="!text-red-800">University</span>',
        desc: "Upgraded from High School Edition to University Pro.<br>Installed caffeine dependency, discovered version control (for both code and sleep).",
        type: "lore",
        tech: ["Java", "Stack Overflow", "Late Nights", "Group Projects"]
    },
    {
        id: "2019-unb-ra",
        year: 2019,
        start: 2019,
        end: 2020,
        title: `<span class="!text-amber-950">UNB Residence</span> — <span class="!text-red-800">Residence Assistant</span>`,
        desc: "Part mentor, part firefighter, part event planner — full-time chaos coordinator.",
        type: "job",
        logo: "https://cdn.worldvectorlogo.com/logos/unb-1.svg",
        details: [
            "Supported and guided resident students to create a safe, inclusive, and welcoming community.",
            "Enforced university policies, mediated conflicts, and responded to emergencies calmly and effectively.",
            "Planned and executed social and educational programs that built community and encouraged personal growth.",
            "Collaborated with residence staff and university personnel to maintain smooth operations and positive living experiences.",
            "Practiced empathy, leadership, and quick problem-solving in every late-night knock on the door.",
        ],
        tech: ["Leadership", "Conflict Resolution", "Event Planning", "Crisis Management", "Community Building"],
    },
    {
        id: "2020-unb-its",
        year: 2020,
        start: 2020,
        end: 2020,
        title: '<span class="!text-amber-950">UNB ITS</span> — <span class="!text-red-800">Student Consultant</span>',
        desc: "Keeping campus tech alive and printers from spontaneous rebellion.",
        type: "job",
        logo: "https://cdn.worldvectorlogo.com/logos/unb-1.svg",
        details: [
            "Maintained and troubleshooted lab printers to keep them operational 24/7.",
            "Performed system diagnostics, repairs, and flush-and-fill operations on campus machines.",
            "Configured new faculty and staff systems, ensuring software and settings were user-ready.",
            "Applied technical proficiency and problem-solving skills to support a large academic environment.",
        ],
        tech: ["System Configuration", "Diagnostics", "Tech Support", "Problem Solving"],
    },
    {
        id: "2021-unb-research",
        year: 2021,
        start: 2021,
        end: 2022,
        title: '<span class="!text-amber-950">Side Quest</span> — <span class="!text-red-800">UNB Research Assistant',
        desc: "Ran physics simulations so graduate students could make prettier graphs (and science).",
        type: "job",
        logo: "https://cdn.worldvectorlogo.com/logos/unb-1.svg",
        details: [
            "Learned and operated COMSOL Multiphysics to run simulations supporting graduate research projects.",
            "Collaborated closely with Dr. Ignaszak’s research group to generate high-quality visual data for publication.",
            "Taught lab members how to use COMSOL effectively, ensuring knowledge transfer and self-sufficiency.",
            "Troubleshot and resolved computer and software issues within the lab environment.",
            "Reported progress during weekly meetings and continuously improved technical and analytical skills.",
        ],
        tech: ["COMSOL", "Continuous Learning", "Collaboration", "Problem Solving", "Communication"],
    },
    {
        id: "2022-unb-ta",
        year: 2022,
        start: 2022,
        end: 2022,
        title: '<span class="!text-amber-950">UNB</span> — <span class="!text-red-800">Teaching Assistant',
        desc: "Debugged code and confusion in equal measure.",
        type: "job",
        logo: "https://cdn.worldvectorlogo.com/logos/unb-1.svg",
        details: [
            "Assisted students during lab sessions by answering questions and guiding them through programming assignments.",
            "Held additional office hours to support students needing extra time or clarification outside of lab hours.",
            "Reinforced understanding of Python concepts while helping others learn — teaching by debugging.",
            "Developed strong interpersonal communication and problem-solving skills in a fast-paced academic environment.",
            "Contributed to a supportive and engaging learning experience for undergraduate students.",
        ],
        tech: ["Python", "Interpersonal Communication", "Problem Solving", "Mentorship", "Education Support"],
    },
    {
        id: "2022-unb-ecesd",
        year: 2022,
        start: 2022,
        end: 2022,
        title: '<span class="!text-amber-950">UNB ENGG</span> — <span class="!text-red-800">Software Developer',
        desc: "Built tools so useful the department forgot life before them.",
        type: "job",
        logo: "https://cdn.worldvectorlogo.com/logos/unb-1.svg",
        details: [
            "Served as the sole full-stack developer for the Department of Electrical and Computer Engineering.",
            "Developed two department-wide automated tools for academic advising and CEAB accreditation purposes.",
            "Built both tools using Java Swing and Python, ensuring flexible and maintainable architectures.",
            "Met regularly with faculty stakeholders to gather feedback, present progress, and align on evolving requirements.",
            "Delivered reliable, scalable solutions that streamlined departmental workflows and reduced manual work.",
        ],
        tech: ["Python", "Java Swing", "Automation", "Full-Stack Development", "Communication"],
    },

    {
        id: "2023-siemens",
        year: 2023,
        start: 2023,
        current: true,
        title: '<span class="!text-amber-950">SIEMENS</span> — <br><span class="!text-red-800">Junior Application Cybersecurity Specialist</span>',
        desc: "Bridging cybersecurity and automation — keeping the machines honest 🔒⚙️",
        type: "job",
        logo: "https://cdn.worldvectorlogo.com/logos/siemens.svg",
        details: [
            "Developed internal tooling that automated security compliance and vulnerability reporting.",
            "Built scripts and dashboards that monitor app health, patch status, and access control integrity.",
            "Collaborated across teams to secure apps and CI/CD workflows.",
            "Tuned network policies and app configs for secure deployments across complex environments."
        ],
        tech: ["Python", "Flask", "Docker", "CI/CD", "Ansible", "Linux", "Networking"]
    },


    /* ---------------- Projects ---------------- */

    {
        id: "2024-expenses-recorder",
        year: 2024,
        title: '<span class="!text-amber-950">Project</span> — <span class="!text-red-800">Expenses Recorder</span>',
        desc: "Where budgets meet common sense — simple, predictable, and actually nice to use.",
        type: "project",
        link: "/projects/Expenses_Recorder",
        details: [
            "Tracks budgets and sub-budgets that roll over month to month.",
            "Auto-populates new month budgets with your last setup — no manual rebuilds.",
            "Flask serving clean JSON straight to the Next.js dashboard.",
            "UI focuses on clarity: every cent, every category, zero clutter."
        ],
        tech: ["Next.js", "Flask", "PostgreSQL", "Tailwind"]
    },

    {
        id: "2022-automated-musicians",
        year: 2022,
        title: '<span class="!text-amber-950">Project</span> — <span class="!text-red-800">Automated Musicians</span>',
        desc: "Where music meets algorithms — a creative blend of theory, pattern recognition, and composition automation.",
        type: "project",
        link: "/projects/Automated_Musicians",
        details: [
            "Analyzes sheet music patterns and converts them into structured ABC notation.",
            "Implements algorithmic composition — generating new melodies based on learned musical structures.",
            "Built modularly: data extraction, pattern recognition, and generation pipelines are all isolated for testing.",
            "Presented at UNB as a capstone project, later featured on CBC Radio for its innovation in AI-driven music.",
            "Team project built with collaboration across data analysis, algorithm design, and full-stack development."
        ],
        tech: ["Python", "NumPy", "Pandas", "Full-Stack Development"]
    },
    {
        id: "2025-scorehub",
        year: 2025,
        title: '<span class="!text-amber-950">Project<span> — <span class="!text-red-800">ScoreHub',
        desc: "Multiplayer chaos manager disguised as a score tracker.",
        type: "project",
        link: "/projects/Score_Hub",
        details: [
            "Real-time rooms with sockets, edge cases, and polite disconnects.",
            "Score calculators for niche card games (zero rage-quits… mostly).",
            "UI that feels like a chill friend tapping the scoreboard for you."
        ],
        tech: ["Next.js", "Flask", "Full-Stack Development", "Web App"]
    },
    {
        id: 'future plans',
        year: `${new Date().getFullYear()}+`,
        title: titles[Math.floor(Math.random() * titles.length)],
        desc: "No syntax errors so far. Only warnings.",
        logo: "/projects/icons/cs.png",
        type: "lore",
    },
]
