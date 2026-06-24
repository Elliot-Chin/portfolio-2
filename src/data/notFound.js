export const notFoundContent = {
    seo: {
        title: "404 | Elliot Chin",
        description: "Page not found on elliotc.dev.",
        path: "/404",
    },
    badge: "Route_Failure_Detected",
    title: "404_SIGNAL_LOST",
    syslog: "Requested endpoint could not be resolved",
    summary:
        "The requested page is not present in this network map. The destination may have been moved, renamed, or never deployed at this route.",
    cards: [
        {
            title: "Trace Result",
            body: "No matching resource returned by the current route table.",
            iconKey: "ErrorOutlineOutlined",
        },
        {
            title: "Recovery Options",
            body: "Return to the portfolio root or pivot to projects, resume, or contact.",
        },
    ],
    actions: [
        { label: "Return_Home", href: "/", variant: "primary" },
        { label: "Open_Projects", href: "/projects", variant: "secondary" },
        { label: "Contact_Node", href: "/contact", variant: "secondary" },
    ],
    consoleTitle: "Recovery_Session.exe",
}
