export const northboundApiPageData = {
    hero: {
        title: "Northbound API",
        slug: "~/projects/sinec-security-monitor/northbound-api",
        eyebrow: "Siemens / SINEC Security Monitor / API interfaces / dashboard POC",
        duration: "Proof of concept / internal platform extension",
        year: "2025",
        TLDR:
            "A proof-of-concept effort to develop Northbound API interfaces within Siemens SINEC Security Monitor so processed information could be extracted, shown in an external dashboard, or passed into other downstream process pipelines.",
        command: "expose northbound-api --source ssm --output dashboard,pipeline",
        contextOne:
            "SINEC Security Monitor is Siemens' OT cybersecurity platform for passive monitoring of industrial environments, providing visibility into assets, communication behavior, threats, alerts, and broader network activity without interfering with production operations.",
        contextTwo:
            "The goal of this project was to prove that selected processed information from that environment could be made available through clean API interfaces, allowing the data to leave the core product boundary and be consumed by other dashboards or workflow systems.",
        contextThree:
            "As part of the proof of concept, I also developed a companion dashboard using Next.js and Flask to demonstrate how the extracted information could be queried, displayed, and combined with asset information, security events, and alert data pulled through the API layer and supporting database interactions.",
        conclusion:
            "The POC showed that SINEC Security Monitor data could be exposed through a practical Northbound API layer and immediately reused in external views or integration paths, turning internal processed data into something more portable and operationally useful.",
        finalThoughts:
            "This project strengthened API design, internal platform integration, dashboard prototyping, and data-flow thinking around how security telemetry should move between systems instead of staying trapped in a single interface.",
    },
    overviewCards: [
        {
            title: "API Exposure",
            body: "Develop API interfaces inside SINEC Security Monitor so processed data can be queried by systems outside the primary application surface.",
            iconKey: "ApiOutlined",
        },
        {
            title: "Dashboard POC",
            body: "Build an external dashboard to prove the extracted information is usable, navigable, and valuable once it leaves the original product context.",
            iconKey: "DashboardOutlined",
        },
        {
            title: "Pipeline Reuse",
            body: "Design the concept around portability so the same data can support downstream analytics, reporting, or additional security workflows.",
            iconKey: "HubOutlined",
        },
    ],
    metadataItems: [
        { label: "Type:", value: "Internal POC / Platform Extension" },
        { label: "Product:", value: "SINEC Security Monitor" },
        { label: "Frontend:", value: "Next.js" },
        { label: "Backend:", value: "Flask" },
        { label: "Focus:", value: "API Interfaces / Data Extraction / Dashboarding" },
        { label: "Outputs:", value: "Assets / Security Events / Alerts" },
    ],
    implementationCards: [
        {
            title: "Northbound Interface Design",
            body: "Define how processed SSM information should be exposed so external consumers can retrieve structured results without needing direct knowledge of the product internals.",
            command: "map processed telemetry -> external API contracts",
            iconKey: "ApiOutlined",
        },
        {
            title: "Data Access Layer",
            body: "Use the API interfaces and supporting database interactions to retrieve asset information, security events, alerts, and other processed records needed for the demonstration workflow.",
            command: "query APIs + collect supporting asset/event records",
            iconKey: "StorageOutlined",
        },
        {
            title: "External Visualization",
            body: "Build a Next.js and Flask dashboard proof of concept that turns the extracted data into a separate operational view for stakeholders.",
            command: "render dashboard -> validate external usability",
            iconKey: "QueryStatsOutlined",
        },
    ],
    outcomeCards: [
        {
            title: "Stakeholder Demonstration",
            body: "A working POC build was prepared to show stakeholders that processed SSM data could be surfaced outside the main product in a usable way.",
            iconKey: "OpenInNewOutlined",
        },
        {
            title: "Integration Direction",
            body: "The concept established a practical path for moving data into other dashboards or process pipelines instead of limiting visibility to a single interface.",
            iconKey: "HubOutlined",
        },
        {
            title: "Security Context Preservation",
            body: "Even when displayed externally, the extracted information kept its operational value by preserving links to assets, alerts, and security event context.",
            iconKey: "SecurityOutlined",
        },
    ],
    dataRoute: [
        {
            label: "Source",
            body: "Processed SSM data, asset records, security events, and alert context.",
        },
        {
            label: "Interface",
            body: "Northbound APIs provide structured access for systems outside the main product view.",
        },
        {
            label: "Consumers",
            body: "External dashboards and downstream process pipelines that need actionable security context.",
        },
    ],
}
