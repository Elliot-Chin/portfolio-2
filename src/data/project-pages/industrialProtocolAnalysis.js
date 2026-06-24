export const industrialProtocolAnalysisPageData = {
    hero: {
        title: "SINEC Security Monitor OPC UA Plugin",
        slug: "~/projects/sinec-security-monitor/opcua-plugin",
        eyebrow: "Siemens / SINEC Security Monitor / Zeek / OPC UA",
        duration: "Research & development",
        year: "2024-2026",
        TLDR:
            "Development of a Zeek-based plugin for Siemens SINEC Security Monitor to inspect OPC UA traffic, generate event-specific logs, and support OT-focused detection logic for industrial network monitoring.",
        command: "build zeek-plugin --target sinec_security_monitor --protocol opcua",
        contextOne:
            "SINEC Security Monitor is Siemens' platform for passive, continuous OT security monitoring during production, giving visibility into industrial assets, communication topologies, potential threats, and network intrusions without disrupting operations.",
        contextTwo:
            "Within that environment, the work focused on researching OPC UA behavior in an R&D lab using PLCs, generated traffic, Wireshark, and UAExpert, then translating those findings into a Zeek-based plugin that could parse protocol activity and emit logs useful for OT monitoring and detection engineering.",
        conclusion:
            "The result is a protocol-aware monitoring component that connects low-level OPC UA traffic with higher-level OT security visibility inside Siemens' SINEC Security Monitor workflow.",
        finalThoughts:
            "This work deepened protocol analysis, Zeek plugin development, OT lab validation, and detection engineering skills while producing a practical foundation for custom OPC UA monitoring in industrial environments.",
    },
    researchCards: [
        {
            title: "Protocol Decoding",
            body: "Break down OPC UA traffic into structured protocol fields such as secure channel setup, service requests, service responses, access behavior, node targets, and status conditions.",
            iconKey: "DataObjectOutlined",
        },
        {
            title: "Plugin Integration",
            body: "Develop the Zeek-based plugin so decoded OPC UA behavior can be surfaced inside Siemens SINEC Security Monitor as event-specific telemetry for industrial security monitoring.",
            iconKey: "SchemaOutlined",
        },
        {
            title: "Detection Logic",
            body: "Implement custom checks around service behavior, certificate handling, access-level validation, and write-response conditions so the plugin can support targeted OT detection use cases.",
            iconKey: "SecurityOutlined",
        },
    ],
    developmentSteps: [
        {
            title: "Packet Capture Review",
            body: "Review generated OPC UA traffic in Wireshark and UAExpert sessions to identify message boundaries, secure-channel behavior, service types, and protocol fields worth elevating into monitoring telemetry.",
            command: "wireshark + uaexpert + plc traffic generation",
            iconKey: "TerminalOutlined",
        },
        {
            title: "Plugin Buildout",
            body: "Build the Zeek-based plugin structure in C++, define the parser flow, and prepare the analyzer to inspect OPC UA traffic inside the SINEC Security Monitor pipeline.",
            command: "plugin registration -> parsing -> event hooks",
            iconKey: "MemoryOutlined",
        },
        {
            title: "Behavior Mapping",
            body: "Track protocol state so requests, responses, service mappings, status conditions, and communication behavior can be associated correctly and turned into meaningful events.",
            command: "request -> service -> validation -> response",
            iconKey: "AccountTreeOutlined",
        },
        {
            title: "Detection Validation",
            body: "Define attack procedures and generate test-data scenarios to validate how the plugin logs protocol events, certificate handling, access-level checks, and suspicious write behavior.",
            command: "test scenarios -> log review -> detection tuning",
            iconKey: "BugReportOutlined",
        },
    ],
    metadataItems: [
        { label: "Domain:", value: "OT / Industrial Cybersecurity" },
        { label: "Protocol:", value: "OPC UA" },
        { label: "Platform:", value: "SINEC Security Monitor / Zeek" },
        { label: "Language:", value: "C++" },
        { label: "Focus:", value: "Parsing / Logging / Detection Logic" },
    ],
    technicalFocus: [
        {
            title: "OPC UA Message Structure",
            body: "The plugin work starts with understanding OPC UA transport framing, secure channel negotiation, service identifiers, request handles, response status codes, and how these appear in actual PLC communication.",
        },
        {
            title: "SINEC Monitoring Integration",
            body: "The analyzer is built so decoded protocol behavior can be surfaced in Siemens SINEC Security Monitor as structured, OT-relevant telemetry rather than raw packet data alone.",
        },
        {
            title: "Behavior-Aware Analysis",
            body: "Because OPC UA relies on request and response flows, the plugin needs enough state to associate responses with earlier actions and distinguish ordinary industrial behavior from unusual or security-relevant activity.",
        },
        {
            title: "Detection-Oriented Output",
            body: "Rather than only dumping decoded fields, the output is shaped around monitoring questions: what service was used, what node was targeted, what validation condition was triggered, whether the write or access behavior succeeded, and whether the sequence looks suspicious.",
        },
    ],
    externalLinks: [
        { label: "Zeek_Docs", href: "https://docs.zeek.org/" },
        { label: "OPC_UA_Spec", href: "https://reference.opcfoundation.org/" },
    ],
}
