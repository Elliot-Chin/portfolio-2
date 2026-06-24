export const expensesRecorderPageData = {
    hero: {
        slug: "~/projects/expenses-recorder",
        meta: "Active personal finance tool",
        eyebrow: "Personal tooling / finance workflow",
        title: "Expenses Recorder",
        summary:
            "A full-stack personal finance application for tracking income, expenses, savings goals, recurring bills, credit accounts, budgets, trips, and monthly financial performance, with dashboards, audit logging, and polished PDF reporting.",
        command: "deploy expenses_recorder --inspect",
    },
    featureCards: [
        {
            title: "Financial Tracking",
            body: "Tracks income, expenses, savings activity, recurring bills, credit accounts, and trip spending inside one monthly finance workflow.",
            iconKey: "AutoGraphOutlined",
        },
        {
            title: "Budget Control",
            body: "Manages budgets, sub-budgets, and carried-forward monthly allocations so category planning does not need to be rebuilt from scratch.",
            iconKey: "TimelineOutlined",
        },
        {
            title: "Reporting Layer",
            body: "Aggregates monthly data into dashboards, summaries, and polished PDF reports with breakdowns, charts, and savings progress.",
            iconKey: "StorageOutlined",
        },
        {
            title: "Audit + Platform",
            body: "Includes audit-event logging and uses Supabase authentication with a Next.js frontend and Flask backend for structured access and monitoring.",
            iconKey: "PrecisionManufacturingOutlined",
        },
    ],
    gallery: [
        {
            title: "Dashboard",
            image: "/projects/exprec/exprec_dashboard.png",
            description: "Main dashboard view for reviewing categorized spending and month-level summaries.",
        },
        {
            title: "Spending Breakdown",
            image: "/projects/exprec/exprec_spending-breakdown.png",
            description: "Category-focused spending visualization used to compare how budget areas are performing.",
        },
        {
            title: "Report View",
            image: "/projects/exprec/exprec_report.png",
            description: "Report-focused output for reviewing recorded expenses in a more structured summary format.",
        },
        {
            title: "Trip Groups",
            image: "/projects/exprec/exprec_trip-groups.png",
            description: "Separate trip expenditure tracking used to analyze travel-specific spending patterns.",
        },
    ],
    documentedNotes: [
        "Tracks monthly income and expenses by category while comparing spending against defined budget targets.",
        "Supports budgets, sub-budgets, savings goals, contribution history, and rollover allocations between months.",
        "Handles recurring bills, installment-style payments, credit account balances, and linked bill expenses.",
        "Generates monthly summaries and PDF reports with executive-style overviews, charts, and savings progress.",
    ],
    metadataRows: [
        { label: "Status", value: "Active", accent: "text-amber-300" },
        { label: "Frontend", value: "Next.js" },
        { label: "Backend", value: "Flask" },
        { label: "Auth / Data", value: "Supabase" },
        { label: "Reports", value: "Monthly PDF" },
    ],
    capabilityPills: ["Income Logs", "Budgeting", "Savings Goals", "Recurring Bills", "Credit Tracking", "Trip Groups", "PDF Reports", "Audit Trail"],
    operationsNotes: [
        "Monthly records are treated as both an operational ledger and an analytical review surface for financial behavior over time.",
        "Recurring bills and linked expenses reduce manual entry while keeping bill-related activity synchronized in the monthly record.",
        "Audit and session event logging provide a stronger recordkeeping layer than a simple personal expense tracker.",
    ],
    conclusion:
        "Expenses Recorder evolved from a straightforward budgeting tool into a broader financial tracking platform that combines day-to-day recordkeeping with higher-level review. By tying together transaction logging, budgeting, recurring obligations, savings behavior, credit monitoring, trip tracking, and monthly reporting, the project supports both operational finance management and reflective analysis over time.",
    finalThoughts:
        "What makes the project stronger than a basic expense tracker is the way it connects financial activity to structure and accountability. Features like synced recurring bills, grouped trip spending, PDF reporting, and audit logging turn the system into something that is useful not only for entering data, but for understanding patterns, reviewing decisions, and maintaining a more complete personal financial record.",
    systemSnapshot: [
        {
            label: "Runtime",
            value: "Next.js + Flask + Supabase",
            body: "Full-stack personal finance workflow with authentication, budgeting, reporting, and audit-aware data handling.",
        },
        {
            label: "Core Scope",
            value: "Budgets / Savings / Bills / Credit",
            body: "Monthly records connect transaction logging with planning, recurring obligations, and review-oriented summaries.",
        },
        {
            label: "Output Layer",
            value: "Dashboard + PDF Reporting",
            body: "The system supports both day-to-day entry and higher-level monthly review with exported reporting and visual breakdowns.",
        },
    ],
}
