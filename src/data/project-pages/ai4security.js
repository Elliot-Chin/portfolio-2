export const ai4securityProject = {
    hero: {
        title: "AI4Security Research",
        slug: "~/projects/ai4security-research",
        eyebrow: "AI security research / alert enrichment / CIC Modbus PCAP analysis / agentic AI",
        duration: "Internal Siemens research project",
        year: "2024",
        TLDR:
            "An internal Siemens research project with two main tracks: an LLM-based alert-enrichment workflow backed by asset and CVE context, and AI-assisted traffic analysis using PCAPs from the 2023 UNB CIC Modbus dataset.",
        command: "evaluate ai-security-workflows --tracks alert-enrichment,cic-modbus-analysis",
        contextOne:
            "I worked on this project with a co-op student to investigate where AI could actually help security analysis rather than just generate convincing text. One track focused on alert enrichment, where we combined dummy asset records stored in PostgreSQL with current CVE information so an LLM could explain why a system might be vulnerable and relate that risk back to the asset under investigation.",
        contextTwo:
            "The second track focused on packet analysis using PCAPs from the 2023 UNB CIC Modbus dataset. We evaluated open-source models already fine-tuned for cybersecurity, prepared structured JSON training data for Azure fine-tuning, and reformatted the dataset traffic into higher-level flow and prompt representations to test whether the models could distinguish benign from anomalous behavior more reliably.",
        conclusion:
            "The main takeaway was that LLMs were not reliable enough for exact byte counting or raw hex interpretation on their own, but they became more useful when the input was transformed into structured protocol or flow context and placed inside a validated analysis loop.",
        finalThoughts:
            "The project was put on hold after the co-op term ended, but it clarified where AI fits best in security analysis: narrow fine-tuned workflows can work on consistent traffic structures, while prompt-based and agentic approaches are better for variation when paired with preprocessing, structure, and validation rather than treated as a standalone detection engine.",
    },
    researchCards: [
        {
            title: "PCAP + Protocol Research",
            body: "Analyzed packet captures from the 2023 UNB CIC Modbus dataset to understand which fields, byte patterns, and protocol structures mattered for AI-assisted threat analysis.",
            iconKey: "InsightsOutlined",
        },
        {
            title: "LLM Fine-Tuning + Prompting",
            body: "Evaluated open-source models that were already fine-tuned for cybersecurity, prepared structured JSON training data for Azure fine-tuning, and compared those paths against one-shot, multi-shot, and chain-of-thought prompting for packet reasoning.",
            iconKey: "SecurityOutlined",
        },
        {
            title: "Agentic Validation Loop",
            body: "Designed a workflow where AI agents could generate expected traffic frames or behavioral baselines, compare them against observed traffic, and pass invalid outputs back through a correction step instead of relying on a single-pass classifier.",
            iconKey: "PsychologyOutlined",
        },
    ],
    metadataItems: [
        { label: "Domain:", value: "OT Cybersecurity / AI Research" },
        { label: "Primary Themes:", value: "PCAP Analysis / Industrial Protocols / Threat Detection" },
        { label: "Model Sources:", value: "Open-Source Cybersecurity-Tuned Models + Azure Fine-Tuned Models" },
        { label: "Methods:", value: "Fine-Tuning / One-Shot / Multi-Shot / Chain-of-Thought / Agentic Loops" },
        { label: "Dataset:", value: "2023 UNB CIC Modbus" },
        { label: "Data Context:", value: "Dataset PCAPs / Structured JSON / NetFlow-Style Traffic Views" },
    ],
    openSourceWorkflow: [
        {
            title: "Hex-Level Parsing",
            body: "Started with raw packet bytes from PCAPs and mapped out which byte sequences, packet fields, and protocol segments should be inspected, skipped, or preserved as context for the model.",
            command: "pcap -> hex -> packet structure -> labeled fields",
            iconKey: "HubOutlined",
        },
        {
            title: "Structured Training Data",
            body: "Converted packet-analysis findings into structured JSON for Azure fine-tuning while also benchmarking open-source cybersecurity-tuned models against the same packet-analysis problem.",
            command: "pcap review -> json examples + cyber models -> compare outputs",
            iconKey: "StorageOutlined",
        },
        {
            title: "Higher-Level Traffic Context",
            body: "Shifted from direct hex reasoning toward NetFlow-style and protocol-aware summaries so the model could reason over communication patterns, metadata, and expected behavior rather than only raw bytes.",
            command: "pcap -> flow context -> behavioral reasoning",
            iconKey: "AutoAwesomeOutlined",
        },
    ],
    anomalyApproaches: [
        {
            title: "Approach 1: Fine-Tuning on Structured PCAP Data",
            metric: "Best on narrow, repeatable traffic",
            body: "Fine-tuned models performed efficiently when the incoming PCAP closely matched the traffic structure seen in the training examples, but the approach degraded when the packet patterns varied from the baseline.",
        },
        {
            title: "Approach 2: Prompt-Based Reasoning",
            metric: "More flexible, still not detection-grade",
            body: "One-shot, multi-shot, and chain-of-thought prompting handled variation better than fine-tuning alone, but the outputs were still not accurate enough to be trusted as a reliable threat-detection workflow.",
        },
        {
            title: "Approach 3: Agentic Baseline + Validation",
            metric: "Most promising direction for control",
            body: "A more agentic pipeline showed better potential by having models generate expected frames or baselines, compare them with observed traffic, and use a feedback loop to reject and regenerate invalid analyses.",
        },
    ],
    externalLinks: [
        { label: "HF_Models", href: "https://huggingface.co/models?pipeline_tag=text-generation&other=cybersecurity" },
        { label: "CIC_Modbus_Dataset", href: "https://www.unb.ca/cic/datasets/modbus-2023.html" },
    ],
    enrichmentShots: [
        {
            src: "/projects/ai4security/hf-model-search.png",
            alt: "Hugging Face cybersecurity model search",
            description: "Model discovery phase for narrowing cybersecurity-domain candidates on Hugging Face.",
        },
        {
            src: "/projects/ai4security/local-model-load.png",
            alt: "Local model loading code",
            description: "Example of loading a quantized open-source cybersecurity model for local inference.",
        },
        {
            src: "/projects/ai4security/alert-response-sample.png",
            alt: "Alert enrichment response sample",
            description: "Sample model output summarizing a security alert and associated vulnerability context.",
        },
    ],
    dataShots: [
        {
            src: "/projects/ai4security/modbus-netflow-json.png",
            alt: "UNB CIC Modbus flow record",
            description: "Example flow record derived from a PCAP in the 2023 UNB CIC Modbus dataset, preserving protocol, byte, timing, and endpoint fields for downstream analysis.",
        },
        {
            src: "/projects/ai4security/netflow-prompt-format.png",
            alt: "NetFlow prompt format",
            description: "Structured prompt format built from the 2023 UNB CIC Modbus flow data so the model could reason over traffic context instead of raw packet bytes alone.",
        },
        {
            src: "/projects/ai4security/raw-netflow-record.png",
            alt: "Raw Modbus NetFlow record",
            description: "Another prompt-ready flow example from the 2023 UNB CIC Modbus dataset showing the higher-level traffic representation we used for anomaly classification experiments.",
        },
    ],
}
