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
        id: "2026-industrial-protocol-analysis",
        year: 2026,
        title: '<span class="!text-amber-950">Project</span> — <span class="!text-red-800">Industrial Protocol Analysis</span>',
        desc: "Zeek plugin development for Siemens SINEC Security Monitor, an OT security monitoring platform for passive, continuous visibility into industrial assets, threats, and network intrusions during production.",
        type: "project",
        link: "/projects/Industrial_Protocol_Analysis",
        logo: "/projects/ipa/Logo.png",
        metadata: {
            updated: "2026",
            uptime: "99.270%",
            risk: "MED",
            version: "v3.0.1",
            branch: "DEVELOPMENT",
        },
        details: [
            "Researched OPC UA protocol behavior within an R&D lab environment using PLCs, generated OPC UA traffic, Wireshark, and UAExpert to simulate and understand normal and abnormal industrial communication scenarios.",
            "Developed a Zeek-based plugin for Siemens SINEC Security Monitor to inspect and parse OPC UA traffic and generate event-specific logs for selected OT cybersecurity monitoring use cases.",
            "Implemented custom behavior checks and detection logic around protocol events, communication behavior, certificate handling, access-level validation, and write-response conditions.",
            "Defined attack procedures and generated test-data scenarios to validate how the plugin detected and logged targeted OPC UA activity in support of monitoring and detection engineering."
        ],
        tech: ["Zeek", "C++", "OPC UA", "Wireshark", "PLCs", "OT Security"],
        deploy: "industrial_protocol_analysis"
    },
    {
        id: "2025-expenses-recorder",
        year: 2025,
        title: '<span class="!text-amber-950">Project</span> — <span class="!text-red-800">Expenses Recorder</span>',
        desc: "Where budgets meet common sense — simple, predictable, and actually nice to use.",
        type: "project",
        link: "/projects/Expenses_Recorder",
        logo: "/projects/exprec/Logo.png",
        metadata: {
            updated: "2025",
            uptime: "99.999%",
            risk: "LOW",
            version: "v2.1.4-LTS",
            branch: "MAIN",
        },
        details: [
            "Tracks budgets and sub-budgets that roll over month to month.",
            "Auto-populates new month budgets with your last setup — no manual rebuilds.",
            "Flask serving clean JSON straight to the Next.js dashboard.",
            "UI focuses on clarity: every cent, every category, zero clutter."
        ],
        tech: ["Next.js", "Flask", "PostgreSQL", "Tailwind"],
        deploy: "expenses_recorder"
    },

    {
        id: "2024-AI4Security",
        year: 2024,
        title: '<span class="!text-amber-950">Project</span> â€” <span class="!text-red-800">AI4Security Research</span>',
        desc: "Internal Siemens research into whether AI could analyze industrial PCAP data using both open-source cybersecurity-tuned models and Azure fine-tuning to help distinguish benign versus potentially malicious network behavior.",
        type: "project",
        link: "/projects/AI4Security",
        logo: "/projects/ai4security/cover-shield.png",
        metadata: {
            updated: "2024",
            risk: "MED",
            version: "v1.0.0-RESEARCH",
            branch: "RND",
        },
        details: [
            "Analyzed industrial packet captures with a co-op student to see whether AI could reduce manual PCAP review effort in OT environments.",
            "Evaluated open-source models that had already been fine-tuned for cybersecurity tasks, alongside Azure-hosted models trained on structured JSON examples derived from packet analysis.",
            "Compared fine-tuning against one-shot, multi-shot, and chain-of-thought prompting, finding that prompt-based methods handled variation better but still lacked detection-grade accuracy.",
            "Shifted toward NetFlow-style context and an agentic validation loop where one model generated expected traffic structure and another checked it before accepting the analysis."
        ],
        tech: ["LLMs", "Azure OpenAI", "PCAP Analysis", "DNP3", "Modbus", "OT Security"],
        deploy: "ai4security-research"
    },

    {
        id: "2024-rat-project-proposal",
        year: 2024,
        title: '<span class="!text-amber-950">Project</span> â€” <span class="!text-red-800">Resource Allocation Tool</span>',
        desc: "A proposal to turn an Excel-based employee time-allocation tracker into a web application so managers could see team capacity more clearly and judge whether additional projects could be taken on. The effort ended after phase one when a management change removed the need for continued development.",
        type: "project",
        link: "/projects/Resource_Allocation_Tool",
        logo: "/projects/rat-proposal/logo.png",
        metadata: {
            updated: "2024",
            risk: "MED",
            version: "v1.0.0-PROPOSAL",
            branch: "PLANNING",
        },
        details: [
            "Defined a phased roadmap for replacing a spreadsheet-based employee time-allocation process with a dedicated internal web application.",
            "Proposed a stack built on Next.js, Flask, PostgreSQL, and Docker to support dashboards, uploads, and maintainable service boundaries.",
            "Included authentication, dashboard, and upload workflow planning to clarify how users, system logic, and the database would interact.",
            "Centered the value proposition on transparency, collaboration, access control, integration potential, and better version governance than Excel.",
            "The project was cancelled after phase one delivery because a change in management meant the organization no longer needed to continue the tool."
        ],
        tech: ["Next.js", "Flask", "PostgreSQL", "Docker", "RBAC", "Internal Tooling"],
        deploy: "resource-allocation-tool"

    },
    {
        id: "2024-northbound-api",
        year: 2024,
        title: '<span class="!text-amber-950">Project</span> â€” <span class="!text-red-800">Northbound API</span>',
        desc: "A proof-of-concept Northbound API interface for Siemens SINEC Security Monitor so processed security data and asset information could be extracted, displayed in an external dashboard, or forwarded into other downstream workflows.",
        type: "project",
        link: "/projects/Northbound_API",
        logo: "/projects/northbound-api/logo.png",
        metadata: {
            updated: "2024",
            risk: "LOW",
            version: "v1.3.0-POC",
            branch: "RND",
        },
        details: [
            "Defined and developed API interfaces inside SINEC Security Monitor to expose processed data for external consumption.",
            "Built a stakeholder-facing proof of concept showing how extracted information could be surfaced outside the core product.",
            "Developed a companion dashboard using Next.js and Flask to demonstrate data retrieval, visualization, and workflow integration.",
            "Used the interfaces to retrieve processed data and interact with the SSM database for asset information, security events, and alerts."
        ],
        tech: ["Next.js", "Flask", "API Design", "Dashboard Development", "Cybersecurity", "Internal Tooling"],
        deploy: "northbound-api"
    },

    {
        id: "2023-automated-musicians",
        year: 2023,
        title: '<span class="!text-amber-950">Project</span> — <span class="!text-red-800">Automated Musicians</span>',
        desc: "Where music meets algorithms — a creative blend of theory, pattern recognition, and composition automation.",
        type: "project",
        link: "/projects/Automated_Musicians",
        logo: "/projects/am/Logo.png",
        metadata: {
            updated: "2023",
            uptime: "98.410%",
            risk: "LOW",
            version: "v1.8.2-STABLE",
            branch: "LEGACY",
        },
        details: [
            "Analyzes sheet music patterns and converts them into structured ABC notation.",
            "Implements algorithmic composition — generating new melodies based on learned musical structures.",
            "Built modularly: data extraction, pattern recognition, and generation pipelines are all isolated for testing.",
            "Presented at UNB as a capstone project, later featured on CBC Radio for its innovation in AI-driven music.",
            "Team project built with collaboration across data analysis, algorithm design, and full-stack development."
        ],
        tech: ["Python", "NumPy", "Pandas", "Full-Stack Development"],
        deploy: "automated_musicians"
    },
    // {
    //     id: "2025-scorehub",
    //     year: 2025,
    //     title: '<span class="!text-amber-950">Project<span> — <span class="!text-red-800">ScoreHub',
    //     desc: "Multiplayer chaos manager disguised as a score tracker.",
    //     type: "project",
    //     link: "/projects/Score_Hub",
    //     details: [
    //         "Real-time rooms with sockets, edge cases, and polite disconnects.",
    //         "Score calculators for niche card games (zero rage-quits… mostly).",
    //         "UI that feels like a chill friend tapping the scoreboard for you."
    //     ],
    //     tech: ["Next.js", "Flask", "Full-Stack Development", "Web App"]
    // },
    {
        id: 'future plans',
        year: `${new Date().getFullYear()}+`,
        title: titles[Math.floor(Math.random() * titles.length)],
        desc: "No syntax errors so far. Only warnings.",
        logo: "/projects/icons/cs.png",
        type: "lore",
    },
]

