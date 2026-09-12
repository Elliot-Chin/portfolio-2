export const automatedMusiciansPageData = {
    researchCards: [
        { title: "Music Algorithms", bodyKey: "musicAlgorithmsDesc", iconKey: "GraphicEqOutlined" },
        { title: "Pattern Recognition", bodyKey: "patternExtractionDesc", iconKey: "PsychologyOutlined" },
        { title: "Composition Generator", bodyKey: "compositionGenDesc", iconKey: "LibraryMusicOutlined" },
    ],
    externalLinks: [
        { label: "YouTube_Demo", href: "https://www.youtube.com/watch?v=sYTcTymlJhc" },
        { label: "GitHub_Repo", href: "https://github.com/edwardchang7/engg4000" },
        { label: "CBC_Feature", href: "https://www.cbc.ca/news/canada/new-brunswick/unb-engineering-design-symposium-1.6411721" },
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
    content: {
        TLDR: "This senior-year engineering capstone project explored automated music generation through programmed music theory and pattern recognition. The work was divided into three key segments: musical algorithms, pattern recognition and extraction, and a music composition generator. Each segment built the foundation for the next, with the goal of autonomously creating musically coherent compositions.",
        musicAlgorithmsDesc: "In this initial phase, we conducted a deep-dive study of the algorithmic structure of music theory. We reviewed and implemented code models that mirrored this structure, analyzing music and setting the groundwork for creating new melodies through chords and triads, cadences, musical scales, rhythm, and time signatures.",
        patternExtractionDesc: "In the next phase, we chose sheet music instead of sound files to stay aligned with our emphasis on music theory. We encoded the sheet music into ABC format and fed hundreds of compositions into the system, which helped identify recurring patterns. This data served as a foundation for understanding common musical structures.",
        compositionGenDesc: "The final stage merged the identified musical patterns. Using the musical algorithm models developed earlier, we aimed to replicate the complex process of music composition. Integrating these patterns through our algorithms led to the creation of new, coherent songs and fulfilled the objective of automated music generation.",
        conclusion: "We generated unique music that caught the attention of a CBC News reporter during our presentation day at the 2022 UNB Engineering Symposium. The event was a significant platform for showcasing the project, and the reporter's interest made the experience even more exciting. The positive feedback we received strengthened our confidence and highlighted the project's potential at the intersection of music and technology.",
        finalThoughts: "The project was a fresh and challenging venture into the intersection of music and technology. It reconnected me with my early exposure to music theory while significantly testing the programming skills and knowledge I had developed through coursework. It pushed us into a continuous learning process and opened the door to future exploration in this domain.",
    },
    images: {
        algorithmShots: [
            {
                alt: "Music Algorithms - Chords",
                src: "/projects/am/chords.png",
                description: "Half steps (semitones) and whole steps (tones) in music notation.",
            },
            {
                alt: "Music Algorithms - Ionian Scale",
                src: "/projects/am/i-scales.png",
                description: "Ionian scale, also known as the major scale, showing its pattern of whole and half steps.",
            },
            {
                alt: "Music Algorithms - Aeolian Scale",
                src: "/projects/am/a-scales.png",
                description: "Aeolian scale, also known as the natural minor scale, showing its pattern of whole and half steps.",
            },
        ],
        patternShots: [
            {
                alt: "Pattern Recognition and Extraction - Sheet Music",
                src: "/projects/am/sheet-music.png",
                description: "The original sheet music uploaded to the system to be encoded into ABC format.",
            },
            {
                alt: "Pattern Recognition and Extraction - ABC Format",
                src: "/projects/am/abc-format.png",
                description: "ABC format of the sheet music, used by the system for pattern recognition.",
            },
        ],
        generatorShots: [
            {
                alt: "Music Composition Generator - Extrapolation Algorithm Pseudocode",
                src: "/projects/am/extrapolation-alg.png",
                description: "Pseudocode for the extrapolation algorithm used to merge patterns.",
            },
        ],
    },
}
