function makeSkillBadgeIcon(text, background = "#10233d", foreground = "#f8fafc") {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" role="img" aria-label="${text}"><rect width="18" height="18" rx="4" fill="${background}"/><text x="9" y="12" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="7.5" font-weight="700" fill="${foreground}">${text}</text></svg>`
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const resumeSummary =
    "Software developer with experience across cybersecurity, OT and industrial networking, infrastructure management, full-stack application development, and applied AI research support. Skilled in building technical solutions for networked and industrial environments, maintaining virtualized lab infrastructure, troubleshooting Windows and Linux systems, and supporting research and development for cybersecurity use cases and products. Experienced with industrial communication systems, network segmentation, packet analysis, real-time web application development, and exploratory AI workflows for network and security analysis. Interested in roles that combine cybersecurity, networking, software development, AI-enabled tooling, and system architecture."

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
        title: "Jr Application Cybersecurity Specialist",
        company: "Siemens",
        location: "Canada",
        duration: "June 2023 - Current",
        bullets: [
            "Lead compatibility testing for SINEC Security Monitor across representative OT lab configurations and deployment scenarios.",
            "Analyze industrial protocols including PROFINET, OPC UA, S7 communication, and IEC 104 with Wireshark and UAExpert.",
            "Develop Zeek packet-analysis plugins in C++ to inspect, parse, and log industrial and OT traffic for cybersecurity monitoring and R&D use cases.",
            "Administer Proxmox virtualization hosting R&D virtual machines, project infrastructure VMs, and remotely accessible jumpboxes.",
            "Maintain an OT lab simulating electric power substation and building automation networks with relays, IEDs, servers, switches, and rack-mounted industrial equipment.",
            "Configure VLANs, segmentation, switch connectivity, and OT lab infrastructure used for cybersecurity testing and development.",
            "Troubleshoot Linux, Windows, Proxmox, Cisco switching, Cisco and Fortinet firewall environments, and industrial network equipment.",
            "Build and debug tools and web applications using React, Next.js, Python, Flask, Docker, and Git, including SSM API integrations and protocol support work.",
        ],
    },
    {
        title: "Software Developer",
        company: "University of New Brunswick",
        location: "Canada",
        duration: "May 2022 - Dec 2022",
        bullets: [
            "Led the full-stack development effort for the Department of Electrical and Computer Engineering.",
            "Gathered requirements from academic stakeholders for a department-wide tool supporting academic advising and CEAB accreditation workflows.",
            "Designed and implemented maintainable software solutions that could scale with advising, curriculum, and accreditation needs.",
            "Analyzed academic and accreditation-related data to identify improvement areas and support future development recommendations.",
            "Provided progress updates in remote and in-person meetings with collaborators and stakeholders.",
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
        code: "02_JR",
        title: "Jr. Software Developer",
        summary: "Joined Siemens and worked on internal tooling, application support, and product-adjacent engineering workflows.",
        accent: "muted",
    },
    {
        years: "2025 - Current",
        code: "03_SEC",
        title: "Jr. Cybersecurity Application Specialist",
        summary: "Focused on OT lab operations, industrial protocol analysis, Zeek plugin development, and secure product tooling.",
        accent: "primary",
    },
]

export const resumeSelectedProjects = [
    {
        title: "Industrial Protocol Analysis / Zeek Plugin Development",
        context: "Canada",
        command: "zeek-build --protocol opcua --lab ot-rnd",
        summary:
            "R&D work focused on understanding OPC UA behavior in industrial environments and translating that knowledge into protocol-aware monitoring for SINEC Security Monitor.",
        bullets: [
            "Researched OPC UA protocol behavior in an R&D lab using PLCs, Wireshark, and UAExpert to simulate normal and abnormal communication scenarios.",
            "Developed a Zeek-based protocol analysis plugin for SINEC Security Monitor to inspect and parse OPC UA traffic and emit event-specific logs.",
            "Defined attack procedures and generated test data to validate detection, certificate handling, access-level checks, and write-response conditions.",
        ],
        tech: ["Zeek", "C++", "Wireshark", "PLCs", "OPC UA", "Industrial Networking", "SINEC Security Monitor"],
        image: "/projects/ipa/Logo.png",
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
        items: ["Wireshark", "Packet analysis", "Windows Event Viewer", "OpenSSL"],
    },
    {
        title: "Industrial / OT",
        items: ["OPC UA", "PROFINET", "S7 communication", "IEC 104", "VLANs", "Trunk and access ports", "SIEM/SCADA systems"],
    },
    {
        title: "Infrastructure / Tools",
        items: ["Docker", "Linux", "Windows", "Proxmox", "Nginx", "Cisco switch", "Fortinet firewall", "Git", "PowerShell", "Bash"],
    },
    {
        title: "Languages",
        items: ["English", "Mandarin", "Cantonese", "Malay"],
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
    OpenSSL: "https://cdn.simpleicons.org/openssl",
    "OPC UA": makeSkillBadgeIcon("OPC", "#0f766e", "#ecfeff"),
    PROFINET: makeSkillBadgeIcon("PN", "#1d4ed8", "#eff6ff"),
    "S7 communication": makeSkillBadgeIcon("S7", "#7c3aed", "#f5f3ff"),
    "IEC 104": makeSkillBadgeIcon("104", "#b45309", "#fffbeb"),
    VLANs: "https://cdn.simpleicons.org/cisco",
    "Trunk and access ports": "https://cdn.simpleicons.org/cisco",
    "SIEM/SCADA systems": makeSkillBadgeIcon("SOC", "#be123c", "#fff1f2"),
    Docker: "https://cdn.simpleicons.org/docker",
    Linux: "https://cdn.simpleicons.org/linux",
    Windows: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows11.svg",
    Proxmox: "https://cdn.simpleicons.org/proxmox",
    Nginx: "https://cdn.simpleicons.org/nginx",
    "Cisco switch": "https://cdn.simpleicons.org/cisco",
    "Fortinet firewall": "https://cdn.simpleicons.org/fortinet",
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
