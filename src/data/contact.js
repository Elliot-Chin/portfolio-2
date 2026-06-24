export const contactPageContent = {
    seo: {
        title: "Contact | Elliot Chin",
        description: "Contact Elliot Chin for OT cybersecurity, software development, industrial networking, and applied AI opportunities.",
        path: "/contact",
    },
    badge: "Encryption_Active",
    title: "CONTACT_NODE",
    introLines: [
        "Secure end-to-end messaging protocol initialized.",
        "Please input your transmission parameters below.",
    ],
    metaTitle: "Transmission Routes",
    transmissionRoutes: [
        { label: "Primary:", value: "EmailJS", accent: "text-amber-300" },
        { label: "Direct:", value: "contact@elliotc.dev", accent: "text-slate-100" },
        { label: "Status:", value: "Secure", accent: "text-amber-300" },
    ],
    routeButtons: [
        { label: "Copy_Email", action: "copy", iconKey: "ContentCopyOutlined" },
        { label: "Open_Mail", href: "mailto:contact@elliotc.dev", iconKey: "EmailOutlined" },
        { label: "LinkedIn", href: "linkedin", iconKey: null },
        { label: "GitHub", href: "github", iconKey: null },
    ],
    fieldLabels: {
        name: "01.Identity_Label",
        email: "02.Return_Path",
        message: "03.Payload_Content",
    },
    placeholders: {
        name: "NAME_OR_ALIAS",
        email: "ENCRYPTED_EMAIL",
        message: "ENTER_MESSAGE_STRING...",
    },
}
