export const resourceAllocationToolPageData = {
    hero: {
        title: "Resource Allocation Tool",
        slug: "~/projects/resource-allocation-tool",
        eyebrow: "planning dashboard / internal tooling / resource allocation / role-based access",
        duration: "Project proposal / internal web-app concept",
        year: "2024",
        TLDR:
            "A proposal to replace an Excel-based employee time-allocation tracker with a multi-user web application so managers could clearly see team capacity, allocation levels, and whether there was room to take on additional project work.",
        command: "migrate allocation-planning --from excel --to nextjs-flask-postgres",
        contextOne:
            "The original tool was an Excel-based tracker used to manage employee time allocation so managers could visually understand who had available capacity and whether the team could absorb more projects. As the workflow grew, the spreadsheet approach became harder to manage reliably.",
        contextTwo:
            "The proposed solution was to turn that spreadsheet workflow into a web-based Resource Allocation Tool with management dashboards, upload workflows, employee and project planning views, and role-based access controls while leaving room for phased expansion.",
        outcome:
            "The project was cancelled after phase one delivery when management changed and the organization no longer saw a need to continue tool development.",
        conclusion:
            "The proposal framed the migration as a usability, governance, and scalability improvement rather than just a technology refresh, with each rollout phase tied to a concrete planning workflow. In practice, the work stopped after phase one because a management change removed the business need to continue the tool.",
        finalThoughts:
            "Even though the project did not continue beyond phase one, it still reflects a solid internal-tooling approach: identify the workflow pain, scope the rollout in manageable phases, and align the stack and access model with how the team actually operates.",
    },
    overviewCards: [
        {
            title: "Why Replace Excel",
            body: "The proposal focused on the limits of using Excel for employee time-allocation tracking once multiple stakeholders needed reliable visibility into team capacity and future project load.",
            iconKey: "InsightsOutlined",
        },
        {
            title: "Phased Delivery",
            body: "The rollout was split into three implementation phases so the manager dashboard, operational features, and project-specific planning views could be introduced in a controlled way.",
            iconKey: "ViewTimelineOutlined",
        },
        {
            title: "Governed Access",
            body: "Role-based access control and user management were treated as first-class requirements so the tool could support both stakeholders and broader team usage safely.",
            iconKey: "LockOutlined",
        },
    ],
    metadataItems: [
        { label: "Type:", value: "Internal Web Application Proposal" },
        { label: "Primary Goal:", value: "Replace Excel-based planning workflow" },
        { label: "Frontend:", value: "Next.js" },
        { label: "Backend:", value: "Flask" },
        { label: "Database:", value: "PostgreSQL" },
        { label: "Hosting:", value: "Docker" },
    ],
    phaseCards: [
        {
            title: "Phase 1",
            body: "Establish the initial system foundation: login, database design, dataset uploads, and a management dashboard for employee utilization, project planning, and hours allocation overview.",
            command: "bootstrap auth + uploads + management dashboard",
        },
        {
            title: "Phase 2",
            body: "Expand the operational surface with employee pages, project and employee creation, user management, RBAC, and profile editing so the tool supports broader team usage.",
            command: "add planning workflows + user management + RBAC",
        },
        {
            title: "Phase 3",
            body: "Introduce a project-specific planning dashboard so planning can be explored from the project perspective, not only through management or employee views.",
            command: "add project-specific dashboard and planning views",
        },
    ],
    stackCards: [
        {
            title: "Next.js Frontend",
            body: "Selected for faster page loads and a cleaner dashboard experience through server-side rendering and modern app structure.",
            iconKey: "GridViewOutlined",
        },
        {
            title: "Flask Backend",
            body: "Used as a lightweight Python backend to keep implementation fast while still supporting authentication, upload flows, and dashboard APIs.",
            iconKey: "SchemaOutlined",
        },
        {
            title: "PostgreSQL + Docker",
            body: "PostgreSQL handled structured planning data, while Docker isolated each service for a cleaner deployment and operations story.",
            iconKey: "StorageOutlined",
        },
    ],
    managerView: {
        question: "Can the team take on more project work without overloading current employees?",
        cards: [
            {
                label: "What Managers Needed",
                body: "A fast way to see employee allocation, forecast upcoming load, and judge remaining delivery capacity.",
            },
            {
                label: "Why Excel Broke Down",
                body: "Version drift, limited change visibility, weak collaboration, and no reliable path for structured scaling.",
            },
            {
                label: "Proposed Shift",
                body: "Move planning into a shared web tool with dashboard visibility, uploads, access control, and clearer operational ownership.",
            },
        ],
    },
}
