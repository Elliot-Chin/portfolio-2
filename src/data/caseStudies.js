import { expensesRecorderPageData } from "./project-pages/expensesRecorder"
import { tripSchedulerPageData } from "./project-pages/tripScheduler"
import { automatedMusiciansPageData } from "./project-pages/automatedMusicians"
import { ai4securityProject } from "./project-pages/ai4security"

const section = (id, title, text, extra = {}) => ({ id, title, text, ...extra })
const challenge = (title, problem, approach, result) => ({ title, problem, approach, result })
const shots = items => items.map(item => ({ src: item.image || item.src, title: item.title || item.alt, caption: item.description }))

const projectCovers = {
    "industrial-protocol-analysis": "/projects/ipa/Logo.png",
    "expense-recorder": "/projects/exprec/Logo.png",
    "northbound-api": "/projects/northbound-api/logo.png",
    "trip-scheduler": "/projects/trip-scheduler/cover.png",
    "ai4security": "/projects/ai4security/cover-shield.png",
    "automated-musicians": "/projects/am/Logo.png",
    "resource-allocation-tool": "/projects/rat-proposal/logo.png",
}
export const caseStudies = [
    {
        slug: "industrial-protocol-analysis", legacy: "Industrial_Protocol_Analysis", category: "Industrial cybersecurity",
        title: "Industrial Protocol Analysis & Zeek Plugin Development", shortTitle: "Industrial Protocol Analysis",
        tagline: "Protocol-aware security monitoring for industrial networks.",
        summary: "Turning OPC UA traffic from real industrial systems into structured security events for Siemens SINEC Security Monitor.",
        role: "Software developer / cybersecurity", domain: "OT security", timeline: "2024–2026", type: "Professional R&D",
        stack: ["Zeek", "C++", "OPC UA", "Wireshark", "UAExpert", "PLCs"],
        contribution: "I researched OPC UA traffic, developed the C++ Zeek plugin, mapped protocol behavior to events, and defined test scenarios for monitoring and detection validation.",
        heroFlow: ["PLC / OPC UA server", "Network capture", "Zeek OPC UA analyzer", "Security events & logs", "SINEC Security Monitor"],
        heroCaption: "From industrial communication to security telemetry: the monitoring pipeline.",
        signals: ["Real PLC traffic", "State-aware parsing", "Event-specific telemetry"],
        sections: [
            section("overview", "Overview", "Industrial communication carries context that a generic packet view cannot explain. This work extended Zeek-based monitoring with an OPC UA analyzer, connecting low-level traffic to security-relevant behavior inside SINEC Security Monitor."),
            section("problem", "The problem", "Capturing traffic was only the starting point. Useful monitoring needed to identify the service being used, the target of an operation, its response, and the conditions that made it relevant to security. The analyzer also had to interpret communication from real PLCs rather than assume every message matched a simplified example."),
            section("analysis", "Protocol analysis", "I used Wireshark, UAExpert, and generated PLC traffic to study message boundaries, secure-channel setup, service identifiers, request handles, node targets, and response status codes.", {
                details: [
                    ["Message structure", "Transport framing and service fields establish what a message represents."],
                    ["Request / response behavior", "Handles and status conditions link an observed action to its result."],
                    ["Security context", "Certificate handling, access levels, and write responses shape the monitoring questions."],
                ],
                flow: ["Ethernet / TCP", "OPC UA message", "Parsed fields", "Zeek event", "Security log"],
            }),
            section("architecture", "Analyzer architecture", "The C++ plugin parses OPC UA traffic within Zeek, maintains the context needed to associate protocol activity, and emits events that monitoring logic can turn into useful logs.", {
                flow: ["Network traffic", "Protocol parser", "Analyzer state", "Zeek events", "Monitoring logic"],
                decisions: [
                    ["Extend the existing monitoring stack", "A Zeek plugin places protocol understanding inside the existing SINEC workflow rather than creating a separate packet-review tool."],
                    ["Log behavior, not just fields", "Event-specific output answers monitoring questions about services, targets, access, and response conditions."],
                ],
            }),
            section("testing", "Testing environment", "The R&D environment combined real PLC communication with an engineering workstation, UAExpert, Wireshark, Zeek, and SINEC Security Monitor. I defined attack procedures and generated test data to compare protocol behavior with the events and logs produced by the plugin.", {
                flow: ["UAExpert workstation", "Industrial network / PLC", "Wireshark captures", "Zeek + SINEC validation"],
            }),
            section("challenges", "Technical challenges", null, { challenges: [
                challenge("Understanding real protocol behavior", "Specification-level fields need to be understood in actual device conversations.", "Compare generated PLC traffic with packet inspection and UAExpert sessions.", "Ground the parser and event mappings in observed industrial communication."),
                challenge("Preserving conversation context", "A response alone does not explain the earlier operation it belongs to.", "Track requests, service mappings, and response conditions in analyzer state.", "Associate protocol actions with outcomes in the emitted events."),
                challenge("Making telemetry useful", "A dump of decoded fields is difficult to use for targeted monitoring.", "Shape logs around certificate handling, access validation, and write behavior.", "Produce event-specific output for SINEC monitoring and detection logic."),
            ] }),
            section("result", "Result", "The resulting plugin interprets OPC UA activity and produces structured telemetry for SINEC Security Monitor. It connects packet-level protocol analysis with higher-level OT security visibility."),
            section("lessons", "Lessons learned", null, { bullets: ["Real device traffic is essential for validating protocol assumptions.", "State and event design matter as much as decoding individual fields.", "Security telemetry is useful when it preserves the context behind an action."] }),
        ],
        links: [{ label: "Zeek documentation", href: "https://docs.zeek.org/" }, { label: "OPC UA specification", href: "https://reference.opcfoundation.org/" }],
    },
    {
        slug: "expense-recorder", legacy: "Expenses_Recorder", category: "Full-stack development", title: "Expense Recorder", shortTitle: "Expense Recorder",
        tagline: "A connected workflow for transactions, budgets, and financial review.",
        summary: "A personal finance application connecting everyday recordkeeping with budgets, savings, recurring bills, and monthly reporting.",
        role: "Full-stack developer", domain: "Personal finance", timeline: "2025 — ongoing", type: "Personal project",
        stack: ["Next.js", "React", "Flask", "Python", "PostgreSQL", "Supabase"],
        image: "/projects/exprec/exprec_dashboard.png", heroCaption: "The dashboard brings monthly spending, budget comparison, and savings progress together.",
        contribution: "I built the frontend, Flask API, database integration, and reporting workflows, expanding the application from expense entry into a broader monthly finance tool.",
        sections: [
            section("overview", "Overview", "The application connects income and expense records with planning and review. Budgets, savings goals, recurring bills, credit accounts, and trip groups share a monthly workflow instead of living in separate trackers."),
            section("workflow", "User workflow", "The core workflow moves from entering financial activity to reviewing its effect on the month. Dashboards and PDF reports provide different views of the same recorded information.", { flow: ["Record activity", "Submit to API", "Store records", "Review totals", "Export report"] }),
            section("architecture", "Application architecture", "Next.js provides the user interface, Flask handles backend requests, and PostgreSQL stores structured financial data. The project moved from a local database to Supabase-hosted PostgreSQL; Supabase also supports authentication.", {
                flow: ["Browser / Next.js", "REST API", "Flask / Python", "PostgreSQL / Supabase"],
                decisions: [["Separate interface and services", "The frontend can focus on entry and review while Flask handles data processing behind an API boundary."], ["Keep financial records relational", "PostgreSQL supports the relationships between monthly records, categories, budgets, and linked activity."]],
            }),
            section("data", "Data model", "Transactions belong to monthly records and categories. Budgets provide planning context, while recurring bills and trip groups connect related activity. This is a conceptual view of the workflow, rather than a database schema export.", { flow: ["User / monthly record", "Transactions", "Categories & budgets", "Bills / trip groups"] }),
            section("api", "API design", "The Next.js client sends requests to Flask services that process expense records and connect the interface to persistent storage. Keeping that boundary explicit makes the path from a form to a saved record easier to understand and debug."),
            section("interface", "Interface & reporting", "The dashboard provides an overview; category breakdowns and report views support a closer review. Screenshots show different parts of the financial workflow.", { gallery: shots(expensesRecorderPageData.gallery) }),
            section("challenges", "Technical challenges", null, { challenges: [
                challenge("Connecting recurring activity", "Bills and linked expenses need to stay consistent within the monthly record.", "Treat related activity as part of the same workflow rather than isolated entry forms.", "Support recurring obligations alongside everyday recordkeeping."),
                challenge("Growing beyond expense entry", "Budgets, savings, credit, and trips introduce different relationships and review needs.", "Organize the application around monthly records with shared reporting surfaces.", "Bring operational entry and analytical review into one application."),
                challenge("Changing persistence environments", "The initial local PostgreSQL setup needed a managed hosting path.", "Migrate the database integration to Supabase-hosted PostgreSQL.", "Retain relational storage while adding managed data and authentication services."),
            ] }),
            section("result", "Result & lessons", "The tool evolved into a usable personal finance platform with budgeting, recurring obligations, savings, credit tracking, trip spending, PDF reports, and audit logging.", { bullets: ["Model related financial activity before adding more screens.", "An explicit API boundary makes the end-to-end data path easier to reason about.", "Entry and review need different interfaces, even when they share the same records."] }),
        ],
    },
    {
        slug: "northbound-api", legacy: "Northbound_API", category: "Security platform integration", title: "Northbound API", shortTitle: "Northbound API",
        tagline: "Making processed security data useful beyond the product boundary.", summary: "A Siemens proof of concept exposing SINEC Security Monitor data to external dashboards and downstream workflows.",
        role: "API & dashboard developer", domain: "OT security integrations", timeline: "2025", type: "Professional proof of concept",
        stack: ["Next.js", "Flask", "API design", "SINEC Security Monitor"],
        heroFlow: ["SINEC processed data", "Northbound API", "Flask consumer", "External dashboard"], heroCaption: "The proof of concept demonstrates how security context can move between systems.",
        contribution: "I defined and developed API interfaces inside SINEC Security Monitor and built a companion Next.js / Flask dashboard to demonstrate external data consumption.",
        sections: [
            section("overview", "Overview", "SINEC Security Monitor already processes assets, security events, and alerts. This proof of concept explored how selected information could be reused outside its primary application interface."),
            section("problem", "The problem", "A product interface is not the only place security information is useful. External dashboards and downstream workflows need structured access to processed data without depending on the internal presentation layer."),
            section("architecture", "Engineering approach", "I mapped the information needed by external consumers, defined the interface, retrieved data through the APIs and supporting database interactions, and displayed it in a separate dashboard.", { flow: ["Assets / events / alerts", "API contracts", "Data access", "Dashboard / downstream workflow"], decisions: [["Demonstrate a complete data path", "A working dashboard makes the API's usability visible to stakeholders rather than leaving the proof of concept at an endpoint definition."], ["Preserve security context", "Asset, event, and alert relationships remain meaningful when data is presented outside the core product."]] }),
            section("challenges", "Technical challenges", null, { challenges: [
                challenge("Crossing the product boundary", "External consumers should not need to understand internal product details.", "Expose selected processed information through structured interfaces.", "Give consumers a practical retrieval path."),
                challenge("Proving usability", "Data extraction alone does not demonstrate an integration workflow.", "Build a Next.js and Flask dashboard using the exposed data.", "Prepare a stakeholder-facing proof of concept."),
            ] }),
            section("result", "Result", "The working proof of concept showed that processed SINEC information could be queried and surfaced in an external operational view, establishing a direction for dashboard and pipeline integration."),
            section("lessons", "Lessons learned", null, { bullets: ["API design starts with what an external consumer needs to understand.", "A small end-to-end demonstration is a useful way to validate an integration idea.", "Security data loses value if its asset and event context is stripped away."] }),
        ],
    },
    {
        slug: "trip-scheduler", legacy: "Trip_Scheduler", category: "Collaborative planning", title: "TripScheduler", shortTitle: "TripScheduler",
        tagline: "From a colour-coded spreadsheet to a shared travel planner.", summary: "Keeping daily plans, travel companions, maps, and trip expenses together—from the original Excel schedule to an online planner.",
        role: "Planner & application creator", domain: "Travel planning", timeline: "2026 — ongoing", type: "Personal project",
        stack: ["Excel", "Web application", "Calendar & itinerary views"], image: "/projects/trip-scheduler/online-dashboard-demo.png",
        heroCaption: "The online trip collection. Trip and place names in these examples are fictional.",
        contribution: "I created the original spreadsheet schedules and developed the online planner around the same daily-planning workflow, with shared trips and companion discussion.",
        sections: [
            section("overview", "Overview", "The project began with a practical need: make a holiday easier to plan. A colour-coded Excel schedule brought travel, stays, meals, and activities into a clear daily view."),
            section("problem", "The problem", "As plans grew, the schedule needed a place for travel companions, discussion, maps, and expenses. Keeping those details alongside each trip makes it easier for everyone to understand the plan."),
            section("approach", "Planning approach", "The online tool keeps the familiar visual schedule while adding a trip collection and shared planning. Calendar and list views offer two ways to read the same itinerary.", { flow: ["Trip collection", "Daily itinerary", "Companions & discussion", "Maps / expenses / download"], decisions: [["Keep the daily view familiar", "The spreadsheet already made the shape of a day easy to understand; that remains central to the online planner."], ["Offer a simpler list", "A list itinerary is useful for checking the next activity without reading the entire calendar."]] }),
            section("screens", "From spreadsheet to website", "Examples of the original planning approach and the online version. Click any image for a larger view.", { galleryGroups: [{ title: "The original Excel planner", items: shots(tripSchedulerPageData.gallery.slice(0,2)) }, { title: "The online planner", items: shots(tripSchedulerPageData.gallery.slice(2)) }] }),
            section("challenges", "Design challenges", null, { challenges: [
                challenge("Keeping a busy day readable", "Travel, meals, stays, and activities compete for attention.", "Retain a clear daily schedule and provide a list view alongside it.", "Make the same plan readable in two formats."),
                challenge("Bringing people into the plan", "A personal spreadsheet leaves conversations and decisions elsewhere.", "Keep companions and discussion alongside the trip.", "Give the group a shared place to plan."),
            ] }),
            section("result", "Result & lessons", "TripScheduler brings upcoming and past trips, daily schedules, companions, maps, expenses, and a downloadable itinerary into one place.", { bullets: ["Start with the parts of an existing workflow that already work well.", "A shared plan needs the conversation as well as the schedule.", "Different reading views can make the same information more useful."] }),
        ],
    },
    {
        slug: "ai4security", legacy: "AI4Security", category: "Applied security research", title: "AI4Security Research", shortTitle: "AI4Security",
        tagline: "Testing where AI helps security analysis—and where it falls short.", summary: "Research into alert enrichment and AI-assisted industrial traffic analysis using structured context, fine-tuning, prompting, and validation loops.",
        role: "Research collaborator", domain: "AI / OT cybersecurity", timeline: "2024", type: "Research · on hold",
        stack: ["LLMs", "Azure", "PCAP analysis", "Modbus", "PostgreSQL"],
        heroFlow: ["PCAP / asset context", "Structured input", "Model analysis", "Validation / review"], heroCaption: "A research workflow: structure the evidence before asking a model to reason about it.",
        contribution: "I worked with a co-op student on model evaluation, packet-data preparation, alert enrichment, and the design of a validation loop for AI-generated analysis.",
        sections: [
            section("overview", "Overview", "The research had two tracks: enriching security alerts with asset and CVE context, and analyzing industrial PCAPs from the 2023 UNB CIC Modbus dataset. The question was whether AI could support useful security analysis rather than simply generate plausible explanations."),
            section("problem", "The problem", "Raw packet bytes require exact interpretation. Models struggled with byte counting and hex-level reasoning, while narrow training examples did not generalize reliably to varied traffic. Convincing output was not sufficient evidence of correct analysis."),
            section("approach", "Engineering approach", "We evaluated open-source cybersecurity-tuned models, prepared structured JSON for Azure fine-tuning, and compared prompting approaches. Traffic was reformatted into higher-level protocol and NetFlow-style context to give models a clearer basis for reasoning.", { flow: ["CIC Modbus PCAP", "Protocol / flow context", "Model comparison", "Output validation"], details: ai4securityProject.anomalyApproaches.map(item => [item.title.replace(/^Approach \d: /, ""), item.body]) }),
            section("enrichment", "Alert enrichment", "Dummy asset records in PostgreSQL were combined with CVE information so an LLM could explain potential vulnerabilities in the context of an asset. This explored an assistive workflow rather than an autonomous detection decision.", { gallery: shots([ai4securityProject.enrichmentShots[2], ai4securityProject.dataShots[0]]) }),
            section("challenges", "Technical challenges", null, { challenges: [
                challenge("Exact packet interpretation", "Models were unreliable at byte counting and raw hex interpretation.", "Preprocess traffic into structured protocol and flow context.", "Shift the task toward reasoning over meaningful evidence."),
                challenge("Handling variation", "Fine-tuning worked best on narrow, repeatable traffic structures.", "Compare prompt-based reasoning with fine-tuned models.", "Observe greater flexibility, but insufficient detection-grade accuracy."),
                challenge("Controlling invalid output", "A single model response could be plausible but wrong.", "Design a baseline-generation and validation loop with rejection and correction.", "Identify a more controlled direction for future research."),
            ] }),
            section("result", "Result", "The models were not reliable enough to serve as a standalone threat-detection engine. Structured inputs and validation loops were more promising than direct raw-byte reasoning. The project was put on hold after the co-op term ended."),
            section("lessons", "Lessons learned", null, { bullets: ["Input representation strongly influences the usefulness of AI analysis.", "Flexible reasoning and reliable detection are different requirements.", "Validation must be part of the workflow, not an assumption about the model."] }),
        ], links: ai4securityProject.externalLinks.map(item => ({ label: item.label === "CIC_Modbus_Dataset" ? "CIC Modbus dataset" : "Model research", href: item.href })),
    },
    {
        slug: "automated-musicians", legacy: "Automated_Musicians", category: "Algorithmic composition", title: "Automated Musicians", shortTitle: "Automated Musicians",
        tagline: "Music theory, pattern extraction, and a composition pipeline.", summary: "An engineering capstone exploring how encoded music theory and patterns from sheet music can generate new compositions.",
        role: "Capstone team contributor", domain: "Music / algorithms", timeline: "2021–2022", type: "Team capstone",
        stack: ["Python", "NumPy", "Pandas", "ABC notation"], image: "/projects/am/sheet-music.png", heroCaption: "Sheet music was the input to a structured, notation-based composition workflow.",
        contribution: "As part of the capstone team, I contributed to implementing music-theory models, extracting recurring patterns, and combining those patterns into a composition workflow.",
        sections: [
            section("overview", "Overview", "The team explored automated music generation through programmed music theory and pattern recognition. The system was divided into three stages so each step supplied structured information to the next."),
            section("problem", "The problem", "Random notes are not enough to produce a coherent composition. The system needed representations of scales, rhythm, chords, and recurring musical relationships before it could generate meaningful sequences."),
            section("approach", "Engineering approach", "We chose sheet music rather than sound files to stay aligned with the music-theory focus. Compositions were encoded in ABC notation, recurring patterns were extracted, and the generator combined them within the modeled musical structure.", { flow: ["Sheet music", "ABC notation", "Pattern extraction", "Theory-guided composition"], decisions: [["Use symbolic input", "ABC notation makes notes and relationships directly available to the algorithm without first solving audio transcription."], ["Separate the stages", "Theory modeling, extraction, and generation each have a distinct purpose and an explicit handoff."]] }),
            section("patterns", "Pattern extraction & generation", "Hundreds of compositions provided data for finding common musical structures. The composition stage merged extracted patterns using the theory models developed earlier.", { gallery: shots([...automatedMusiciansPageData.images.patternShots, ...automatedMusiciansPageData.images.generatorShots]) }),
            section("challenges", "Technical challenges", null, { challenges: [
                challenge("Encoding musical rules", "A composition algorithm needs more than a list of pitches.", "Model scales, chords, rhythm, cadences, and time signatures.", "Provide structure for extraction and generation."),
                challenge("Combining patterns coherently", "Useful fragments do not automatically form a complete song.", "Integrate recurring patterns through the musical algorithm models.", "Generate new compositions from learned structures."),
            ] }),
            section("result", "Result & lessons", "The team generated unique music and presented the project at the 2022 UNB Engineering Symposium, where it attracted CBC coverage.", { bullets: ["Domain rules give algorithms a stronger foundation than unconstrained generation.", "Representation choices determine which patterns are easy to extract.", "A staged pipeline makes a complex creative process easier to reason about."] }),
        ], links: automatedMusiciansPageData.externalLinks.map(item => ({ label: ({YouTube_Demo:"Watch demo", GitHub_Repo:"Source code", CBC_Feature:"CBC feature"})[item.label], href: item.href })),
    },
    {
        slug: "resource-allocation-tool", legacy: "Resource_Allocation_Tool", category: "Internal tooling & planning", title: "Resource Allocation Tool", shortTitle: "Resource Allocation Tool",
        tagline: "A phased proposal for replacing spreadsheet-based capacity planning.", summary: "An internal web-tool proposal to make employee allocation and team capacity visible to managers. Delivery stopped after phase one.",
        role: "Tool planning & phase-one delivery", domain: "Resource planning", timeline: "2024", type: "Proposal · discontinued",
        stack: ["Next.js", "Flask", "PostgreSQL", "Docker", "RBAC"],
        heroFlow: ["Allocation data", "Uploads / shared records", "Manager dashboard", "Capacity decisions"], heroCaption: "The proposed planning workflow. Later rollout phases were not completed.",
        contribution: "I defined a phased migration from Excel, planned the application and access model, and worked on the initial foundation and management dashboard in phase one.",
        sections: [
            section("overview", "Overview", "The original Excel tracker helped managers understand employee allocation and whether the team could take on additional projects. The proposal moved that workflow toward a shared web application."),
            section("problem", "The problem", "As more stakeholders used the spreadsheet, version drift, collaboration limits, and weak change visibility made it harder to keep a reliable view of capacity. The goal was clearer planning and governance, not simply replacing Excel with a newer technology."),
            section("approach", "Phased engineering approach", "The proposal separated an initial foundation from broader user workflows and project-specific planning.", { details: [["Phase 1 · initial delivery", "Login, database design, uploads, and a management dashboard for utilization and hours allocation."], ["Phase 2 · proposed", "Employee pages, project creation, user management, role-based access, and profile editing."], ["Phase 3 · proposed", "A project-specific planning dashboard complementing manager and employee views."]], flow: ["Next.js dashboard", "Flask services", "PostgreSQL records", "Docker services"], decisions: [["Deliver in phases", "Tie each phase to a concrete planning workflow rather than attempting the whole operational surface at once."], ["Plan governed access", "User roles and ownership were requirements for a shared internal tool, rather than additions after the dashboard."]] }),
            section("challenges", "Planning challenges", null, { challenges: [
                challenge("Moving beyond one spreadsheet", "A shared tool needs consistent records and clearer ownership.", "Plan uploads, structured data, access control, and dashboard views together.", "Define a migration path that addresses workflow and governance."),
                challenge("Changing business priorities", "A management change removed the need to continue development.", "Keep the delivered phase distinct from proposed later phases.", "Stop after phase one without representing the roadmap as a completed product."),
            ] }),
            section("result", "Result", "The effort ended after phase one when management changed and the organization no longer needed the tool. The remaining employee, access-management, and project-planning phases stayed on the roadmap."),
            section("lessons", "Lessons learned", null, { bullets: ["Internal tools need a continuing business owner as well as a technical plan.", "A phased scope makes partial delivery and changing priorities easier to evaluate.", "Workflow, permissions, and data governance belong in the initial design."] }),
        ],
    },
].map(project => ({ ...project, cover: projectCovers[project.slug] }))
export const getCaseStudy = slug => caseStudies.find(project => project.slug === slug)
