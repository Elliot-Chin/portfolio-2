function makeSkillBadgeIcon(text, background = "#10233d", foreground = "#f8fafc") {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" role="img" aria-label="${text}"><rect width="18" height="18" rx="4" fill="${background}"/><text x="9" y="12" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="7.5" font-weight="700" fill="${foreground}">${text}</text></svg>`
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const resumeSummary =
    "Software developer with experience across cybersecurity, OT/industrial networking, infrastructure management, full-stack application development, and applied AI research support. Skilled in building technical solutions for networked and industrial environments, maintaining virtualized lab infrastructure, troubleshooting Windows/Linux systems, and supporting research and development for cybersecurity use cases and products. Experienced with industrial communication systems, network segmentation, packet analysis, real-time web application development, and exploratory AI workflows for network/security analysis. Interested in roles that combine cybersecurity, networking, software development, AI-enabled tooling, and system architecture."

export const resumeContactLinks = [
    { label: "Email", value: "contact@elliotc.dev", href: "mailto:contact@elliotc.dev", iconKey: "Email" },
    { label: "GitHub", value: "Elliot-Chin", href: "https://github.com/Elliot-Chin", iconKey: "GitHub" },
    { label: "LinkedIn", value: "elliot-chin", href: "https://www.linkedin.com/in/elliot-chin-90b4311a6", iconKey: "LinkedIn" },
    { label: "Portfolio", value: "elliotc.dev", href: "https://elliotc.dev", iconKey: "PublicOutlined" },
]

export const resumeHighlights = [
    "Cybersecurity",
    "Industrial Networking",
    "Full-Stack Development",
    "Virtualized Lab Infrastructure",
]

export const resumeExperience = [
    {
        title: "Junior Application Cybersecurity Specialist",
        company: "Siemens",
        location: "Canada",
        duration: "June 2023 - Current",
        bullets: [
            "Lead compatibility testing for SINEC Security Monitor across lab configurations, validating integration behavior, deployment scenarios, and product functionality in representative OT environments.",
            "Analyze industrial protocols including PROFINET, OPC UA, S7 communication, and IEC 104 using Wireshark and UAExpert.",
            "Develop Zeek packet-analysis plugins in C++ to inspect, parse, and log industrial/OT protocol traffic for cybersecurity monitoring and R&D use cases.",
            "Administer Proxmox-based virtualization infrastructure hosting R&D virtual machines, project infrastructure VMs, and remotely accessible jumpboxes.",
            "Maintain and manage an OT lab environment that simulates electric power substation and building automation networks using relays, IEDs, servers, switches, and rack-mounted industrial equipment.",
            "Configure and manage VLANs, network segmentation, switch connectivity, and lab infrastructure used for OT cybersecurity testing and development.",
            "Troubleshot lab infrastructure across Linux, Windows, Proxmox, Cisco switching, Cisco and Fortinet firewall environments, and industrial network equipment.",
            "Develop custom analysis workflows to compare observed network traffic against expected protocol behavior, generated Zeek logs, and cybersecurity monitoring use cases.",
            "Build and debug software tools and web applications using React, Next.js, Python, Flask, Docker, and Git, including SSM API integrations, internal team management tooling, and SSM protocol support work.",
        ],
    },
    {
        title: "Software Developer",
        company: "University of New Brunswick",
        location: "Canada",
        duration: "May 2022 - Dec 2022",
        bullets: [
            "Served as the sole full-stack developer for the Department of Electrical and Computer Engineering, working directly with the Department Head and Software Engineering Advisor to design, deliver, and maintain two internal academic-support tools.",
            "Developed a Java Swing desktop application with a Python backend to consolidate student academic records and generate CEAB audit-ready tier and ranking groups, giving stakeholders a clearer view of student standing and accreditation-related outcomes.",
            "Built an academic-advising planning tool that analyzed completed courses, grades, intended future courses, course prerequisites, and failed courses to generate a program-wide course matrix for individual students.",
            "Implemented advising recommendations that identified eligible courses, prerequisite gaps, required retakes, and suggested semester sequencing, helping advisors assess student progression and build realistic academic plans.",
            "Translated stakeholder requirements into technical designs through twice-weekly meetings, where progress, defects, proposed changes, and workflow needs were reviewed collaboratively.",
            "Used GitHub and GitHub Projects to manage source control, issues, enhancements, and release work through a Kanban-based, sprint-style workflow.",
            "Delivered a stakeholder-testable release every two weeks, incorporating feedback into subsequent iterations through new features, bug fixes, and usability improvements.",
            "Analyzed academic and accreditation data to identify process gaps and provide recommendations for future improvements to the department's advising and CEAB reporting workflows.",
        ],
    },
]

export const resumeCareerNodes = [
    {
        years: "2022",
        code: "01_DEV",
        title: "Software Developer",
        summary: "Full-stack delivery for advising and accreditation workflows at UNB.",
        accent: "muted",
    },
    {
        years: "2023",
        code: "02_OT",
        title: "OT Security",
        summary: "Joined Siemens to support OT lab infrastructure, compatibility testing, and product-adjacent engineering workflows.",
        accent: "muted",
    },
    {
        years: "2023 - Current",
        code: "03_SEC",
        title: "Cybersecurity",
        summary: "Focused on industrial protocol analysis, Zeek plugin development, OT lab operations, and secure product tooling.",
        accent: "primary",
    },
]

export const resumeSelectedProjects = [
    {
        title: "Industrial Protocol Analysis / Zeek Plugin Development",
        context: "Canada",
        path: "~/projects/industrial-protocol-analysis",
        command: "zeek-build --protocol opcua --lab ot-rnd",
        summary:
            "R&D work focused on understanding OPC UA behavior in industrial environments and translating that knowledge into protocol-aware monitoring for SINEC Security Monitor.",
        bullets: [
            "Researched OPC UA protocol behavior within an R&D lab environment using PLCs, generated OPC UA traffic, Wireshark, and UAExpert to simulate and understand normal and abnormal industrial communication scenarios.",
            "Developed a Zeek-based protocol-analysis plugin for SINEC Security Monitor to inspect and parse OPC UA traffic and generate event-specific logs for selected cybersecurity monitoring use cases.",
            "Defined attack procedures and generated test-data scenarios to validate how the plugin detected and logged protocol events, communication behavior, certificate handling, access-level checks, and write-response conditions.",
        ],
        tech: ["Zeek", "C++", "Wireshark", "PLCs", "OPC UA", "Industrial Networking", "SINEC Security Monitor"],
        image: "/projects/ipa/Logo.png",
    },
    {
        title: "Web Application Development / Expense Recorder",
        context: "Personal Project",
        path: "~/projects/expenses-recorder",
        command: "npm run build && flask --app api serve",
        summary:
            "Personal full-stack project used to learn how modern web applications are designed, built, and deployed across frontend and backend components.",
        bullets: [
            "Learned and applied React and Next.js for frontend development, Flask and Python for backend services, and REST API patterns for communication between client interfaces and server-side application logic.",
            "Developed a full-stack expense-recording application that allows users to record, organize, and review personal expense data through a web-based interface.",
            "Designed the application around a Next.js frontend and Flask backend, implementing API endpoints to process expense records and connect the user interface to persistent storage.",
            "Initially stored application data in a local PostgreSQL database, then migrated the project to Supabase to use a managed cloud-hosted PostgreSQL database and simplify data persistence.",
            "Built practical understanding of frontend state and form handling, backend request processing, database integration, API design, and the end-to-end flow of data within a web application.",
            "Expanded the project iteratively from a learning exercise into a larger usable tool, using each feature to strengthen understanding of full-stack architecture and deployment-oriented development practices.",
        ],
        tech: ["Next.js", "React", "Flask", "Python", "PostgreSQL", "Supabase", "REST APIs", "Full-Stack Development"],
        image: "/projects/exprec/resume-mockup-v2.png",
    },
]

export const resumeSkillGroups = [
    {
        title: "Programming / Web",
        items: ["JavaScript", "React", "Next.js", "Python", "Flask", "REST APIs", "HTML/CSS", "Tailwind CSS", "Material UI", "HeroUI"],
    },
    {
        title: "Data / Backend",
        items: ["Redis", "Backend event handling", "API design", "Real-time communication"],
    },
    {
        title: "Cybersecurity / Analysis",
        items: [
            "Wireshark",
            "Packet analysis",
            "Windows Event Viewer",
            "Audit policy review",
            "Authentication troubleshooting",
            "OpenSSL",
        ],
    },
    {
        title: "Industrial / OT",
        items: ["OPC UA", "PROFINET", "S7 communication", "IEC 104", "VLANs", "Trunk/access ports", "SIEM/SCADA systems"],
    },
    {
        title: "Infrastructure / Tools",
        items: [
            "Docker",
            "Linux",
            "Windows",
            "Proxmox",
            "Nginx",
            "Cisco switch troubleshooting",
            "Fortinet firewall diagnostics",
            "Git",
            "PowerShell",
            "Bash",
        ],
    },
    {
        title: "Languages",
        items: ["Mandarin", "English", "Cantonese", "Malay"],
    },
]

export const resumeSkillIconMap = {
    JavaScript: "https://cdn.simpleicons.org/javascript",
    React: "https://cdn.simpleicons.org/react",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
    Python: "https://cdn.simpleicons.org/python",
    Flask: "https://cdn.simpleicons.org/flask/ffffff",
    "REST APIs": "https://cdn.simpleicons.org/postman",
    "HTML/CSS": "https://cdn.simpleicons.org/html5",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
    "Material UI": "https://cdn.simpleicons.org/mui",
    HeroUI: "https://cdn.simpleicons.org/react",
    Redis: "https://cdn.simpleicons.org/redis",
    "Backend event handling": "https://cdn.simpleicons.org/nodedotjs",
    "API design": "https://cdn.simpleicons.org/swagger",
    "Real-time communication": "https://cdn.simpleicons.org/socketdotio",
    Wireshark: "https://cdn.simpleicons.org/wireshark",
    "Packet analysis": "https://cdn.simpleicons.org/wireshark",
    "Windows Event Viewer": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows11.svg",
    "Audit policy review": makeSkillBadgeIcon("AUD", "#475569", "#f8fafc"),
    "Authentication troubleshooting": makeSkillBadgeIcon("AUTH", "#1e293b", "#f8fafc"),
    OpenSSL: "https://cdn.simpleicons.org/openssl",
    "OPC UA": makeSkillBadgeIcon("OPC", "#0f766e", "#ecfeff"),
    PROFINET: makeSkillBadgeIcon("PN", "#1d4ed8", "#eff6ff"),
    "S7 communication": makeSkillBadgeIcon("S7", "#7c3aed", "#f5f3ff"),
    "IEC 104": makeSkillBadgeIcon("104", "#b45309", "#fffbeb"),
    VLANs: "https://cdn.simpleicons.org/cisco",
    "Trunk/access ports": "https://cdn.simpleicons.org/cisco",
    "SIEM/SCADA systems": makeSkillBadgeIcon("SOC", "#be123c", "#fff1f2"),
    Docker: "https://cdn.simpleicons.org/docker",
    Linux: "https://cdn.simpleicons.org/linux",
    Windows: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows11.svg",
    Proxmox: "https://cdn.simpleicons.org/proxmox",
    Nginx: "https://cdn.simpleicons.org/nginx",
    "Cisco switch troubleshooting": "https://cdn.simpleicons.org/cisco",
    "Fortinet firewall diagnostics": "https://cdn.simpleicons.org/fortinet",
    Git: "https://cdn.simpleicons.org/git",
    PowerShell: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powershell.svg",
    Bash: "https://cdn.simpleicons.org/gnubash",
    English: makeSkillBadgeIcon("EN", "#334155", "#f8fafc"),
    Mandarin: makeSkillBadgeIcon("ZH", "#991b1b", "#fef2f2"),
    Cantonese: makeSkillBadgeIcon("YUE", "#7c2d12", "#fff7ed"),
    Malay: makeSkillBadgeIcon("MS", "#065f46", "#ecfdf5"),
}

export const resumeEducation = {
    school: "University of New Brunswick",
    location: "Fredericton, NB, Canada",
    degree: "Bachelor of Science in Software Engineering",
    year: "2023",
    notes: ["CEAB-accredited program"],
}
