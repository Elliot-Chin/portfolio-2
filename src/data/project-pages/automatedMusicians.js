export const automatedMusiciansPageData = {
    researchCards: [
        { title: "Music Algorithms", body: "musicAlgorithmsDesc", iconKey: "GraphicEqOutlined" },
        { title: "Pattern Recognition", body: "patternExtractionDesc", iconKey: "PsychologyOutlined" },
        { title: "Composition Generator", body: "compositionGenDesc", iconKey: "LibraryMusicOutlined" },
    ],
    externalLinkSources: [
        { label: "YouTube_Demo", key: "ytLink" },
        { label: "GitHub_Repo", key: "ghLink" },
        { label: "CBC_Feature", key: "cbcLink" },
    ],
    heroSignals: [
        "Music theory rules were encoded first so later pattern extraction had a structured base to operate on.",
        "Pattern recognition stages focused on identifying recurring note relationships that could be reused compositionally.",
        "The generation pipeline explored how algorithmic structure could produce coherent musical output instead of random sequences.",
    ],
    projectContext: [
        "This project was conducted during senior-year engineering capstone work and focused on automated music generation through programmed music theory, pattern recognition, and composition automation.",
        "The system was structured in stages so that music-theory modeling supported pattern extraction, and the extracted structures then fed the composition generator.",
    ],
    metadataRows: [
        { label: "Duration:", value: "2021-2022" },
        { label: "Domain:", value: "Music AI", accent: "text-amber-300" },
        { label: "Delivery:", value: "Capstone Project" },
        { label: "Coverage:", value: "Theory / Extraction / Generation" },
    ],
    shell: {
        slug: "~/projects/automated-musicians",
        meta: "Engineering capstone / 2021-2022",
        eyebrow: "Capstone / music systems / pattern analysis",
        title: "Automated Musicians",
        command: "compile motifs --extract-patterns --generate-score",
    },
}
