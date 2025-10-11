import { duration } from "@mui/material"


export const projects = [
    {
        title: "Expenses Recorder",
        imgSrc: '/projects/exprec/exprec-alt-logo.png',
        duration: '2022, June - Present',
        summary: 'I developed the Expense Tracker to manage my daily expenses. It lets me log expenditures, set budgets, and track overspending or savings. With customizable categories and visual reports, it provides insights into my spending, making financial management easy.',
        link: '/Expenses_Recorder',
    },
    {
        title: "Automated Musicians",
        imgSrc: '/projects/am/am-alt-logo.png',
        duration: '2021, September - 2022, April',
        summary: 'This capstone project aimed to develop an automated music generation system that can be broken down into three main sections: music theory, pattern recognition, and a composition generator.',
        link: '/Automated_Musicians',
    },
    {
        title: "Student Tracking System",
        imgSrc: '/projects/sts/sts-alt-logo.webp',
        duration: '2021, September - 2021, December',
        summary: 'In the \'Software Quality and Project Management\' course at UNB, I was part of a group project to develop a dashboard to streamline school advisors\' management of student and course data, leading to my recruitment by the professor to expand a similar tool for broader departmental use.',
        link: '/Student_Tracking_System',
    },
    {
        title: "More To Come...",
        imgSrc: '/projects/icons/cs.png',
        duration: '',
        summary: 'More projects being built ...',
    },
]


export const exp = {
    ExpLogoImg: {
        alt: 'Expenses Recorder',
        src: '/projects/exprec/Logo.png',
    },
    CMSChartImg: {
        alt: 'Expenses Recorder - Example Current Month Spending Chart',
        src: '/projects/exprec/exprec_cms.png',
        desc: 'A radar chart that displays an example of the current month\'s expenditures.'
    },
    PMSChartImg: {
        alt: 'Expenses Recorder - Past Month Spending Chart',
        src: '/projects/exprec/exprec_pms.png',
        desc: 'A bar chart that displays an example of all expenditures from past months.',
    },
    ExpViewImg: {
        alt: 'Expenses Recorder - Expenses Month Summary Example',
        src: '/projects/exprec/exprec_expview.png',
        desc: 'A snippet of the component that displays an example summary for the month of July, 2023.',
    },
    duration: '2021, September - Present',
    TLDR: "The Expense Tracker is a tool I developed for managing and recording my daily expenses efficiently. It allows me to log and categorize my expenditures, add monthly budgets to monitor my spending, and instantly see if I've overspent or have extra savings for any given month. With customizable categories, detailed reports, and visualizations, I gain valuable insights into my spending habits, helping me identify areas for potential savings. The user-friendly interface makes managing my finances intuitive and straightforward, making the Expense Tracker my personal financial assistant for achieving my savings goals with ease.",
    legacyVersion: "The idea for my Expense Tracker started in 2021 when I wanted to know my spendings. The first prototype was built in Java using Java's Swing UI library, with all information stored in files. Over time, I created additional prototypes, all utilizing Java's Swing UI library.<br /><br /> \
                    \
                    It had multiple panels, and each panel served a different purpose. The \"\"Entry Label panel\"\" was responsible for adding new expenses entries. The \"\"<span className=\"italic\">Stats Panel</span>\"\" displayed a summary of my spendings for the given month. I also have donut graphs that would visualize the amount spent for each category, and calculators to distribute expenses amoung me and my roommates at that time. The \"\"<span className=\"italic\">Report Gen. Panel</span>\"\" allowed me to generate monthly reports in the form of CSV files.",

    currentVersion: "The <i>New and Improved</i> version is built on Next JS, which is a JavaScript framework that allows me to easily build web applications. This current version contains similar features, as well as additional functionalities that could not be implemented in the legacy version.",
    dashboardDesc: "I can effortlessly see my expenses categorized, allowing me to quickly determine if I have spent over my budget in any area. A comprehensive graph displays all my past recorded spendings, enabling me to see my spending habits over the months at a glance. This chart also allows me to make detailed comparisons, helping me understand my financial trends and make better-informed decisions.",
    expViewDesc: "I can effortlessly view a summary of my expenses for each month, giving me a clear overview of my spending patterns. I have the ability to see each entry in detail and modify any values if they are incorrect, ensuring that my records are always accurate. Additionally, all charts update in real-time thanks to the use of React hooks, providing me with up-to-date visual insights into my financial activities.",
    budgetPageDesc: "I can seamlessly add or remove budgets, giving me complete control over my finances. Each budget contains sub-entries that contribute to the total amount for a given category, allowing me to break down my spending and manage my money more effectively. This detailed approach helps me stay on top of my expenses and ensures I can make informed financial decisions.",
    tripExpenditureDesc: "With this tool, I record trip expenses seperately, which helps me analyze my spending habits specifically during trips. This feature not only allows me to see where my money goes when I'm traveling but also helps in better financial planning for future trips. By understanding my trip-related expenses, I can budget more effectively and ensure that I stay within my financial limits while still enjoying my travels.",
    finalThoughts: "This project has taught me a lot about developing web applications, significantly enhancing my skills and confidence in this field. Through extensive research on coding and designing user interfaces and user experiences, I gained valuable insights and practical knowledge. It provided me with a solid foundation in how web apps work, enabling me to tackle similar projects at work with ease. Overall, this journey has been incredibly rewarding, equipping me with the essential tools and confidence to excel in web development!",
}


export const am = {
    amLogoImg: {
        alt: 'Automated Musicians Banner',
        src: '/projects/am/Logo.png',
    },
    duration: '2021, September - 2022, April',
    ytLink: 'https://www.youtube.com/watch?v=sYTcTymlJhc',
    ghLink: 'https://github.com/edwardchang7/engg4000',
    cbcLink: 'https://www.cbc.ca/news/canada/new-brunswick/unb-engineering-design-symposium-1.6411721',
    cbcLogoImg: '/projects/am/CBC_logo.svg',
    TLDR: 'This project, conducted during our senior year engineering capstone, aimed to explore automated music generation through programmed music theory and pattern recognition. Divided into three key segments: Musical Algorithms, Pattern Recognition and Extraction, and Music Composition Generator, we sought to develop a system capable of autonomously crafting musically coherent compositions, with each segment building the foundation for the next.',
    ytVideoID: 'sYTcTymlJhc',
    languages: [
        {
            label: "Python [100%]",
            value: 100,
        },
    ],
    musicAlgorithmsDesc: 'In this initial phase, a deep-dive research was conducted to understand the algorithmic essence in music theory. Various code models mirroring this algorithmic nature were studied, analyzing music and setting the groundwork for the creation of new melodies, such as Chords and Triads, Cadences, Musical Scales, Rythm and Time Signatures.',
    patternExtractionDesc: 'Moving on to the next section, we chose sheet music instead of sound files, in line with our main emphasis on music theory. We encoded the sheet music into \'.ABC\' format, and fed hundreds of compositions into our system, which aided in identifying recurring patterns. This data served as a fundamental resource for grasping common musical structures.',
    compositionGenDesc: 'The final stage of our project was the merging of the identified musical patterns. Utilizing our earlier developed musical algorithm models, we aimed to replicate the complex process of music composition. The integration of these patterns through our algorithms led to the creation of new, coherent songs, thus fulfilling our objective of automated music generation.',
    conclusion: 'We were able to generate unique music, which notably caught the attention of a CBC News reporter during our presentation day at the 2022 UNB Engineering Symposium. The event, which was a significant platform to showcase our project, turned more exhilarating as the reporter, amidst the attendees, took a keen interest in our work. The positive feedback we received from everyone present not only bolstered our confidence but also highlighted the impact and the potential our project holds in the intriguing intersection of music and technology.',
    finalThoughts: 'The project marked a fresh and challenging venture into the intersection of music and technology, reigniting my early acquaintance with music theory while significantly testing our programming skills and knowledge acquired from courses. It propelled us into a continuous learning journey, and opened new potential future explorations in this domain.',
    hStepImg: {
        alt: 'Music Algorithms - Chords',
        src: '/projects/am/chords.png',
        description: 'half steps (semitones) [H] and whole steps (tones) [W] in music notation.'
    },
    iScaleImg: {
        alt: 'Music Algorithms - Ionian Scale',
        src: '/projects/am/i-scales.png',
        description: 'Ionian Scale - also known as the major scale, showing its pattern of W and H steps.',
    },
    aScaleImg: {
        alt: 'Music Algorithms - Aeolian Scale',
        src: '/projects/am/a-scales.png',
        description: 'Aeolian Scale - also known as the natural minor scale, showing its pattern of W and H steps.',
    },
    sheetMusicImg: {
        alt: 'Pattern Recognition and Extraction - Sheet Music',
        src: '/projects/am/sheet-music.png',
        description: 'The original sheet music that is uploaded to our system to be encoded into ABC format.',
        size: 'w-5/6',
        lg_size: 'w-1/3',
    },
    abcFormatImg: {
        alt: 'Pattern Recognition and Extraction - ABC Format',
        src: '/projects/am/abc-format.png',
        description: 'ABC format of the sheet music, used by the system for pattern recognition.',
        size: 'w-5/6',
        lg_size: 'w-1/3',
    },
    pseudocodeImg: {
        alt: 'Music Composition Generator - Extrapolation Algorithm Pseudocode',
        src: '/projects/am/extrapolation-alg.png',
        description: 'Pseudocode of the extrapolation algorithm used for merging patterns.',
        size: 'w-5/6',
        lg_size: 'w-1/2',
    }
}

export const sts = {
    stsLogoImg: {
        alt: 'Automated Musicians Banner',
        height: 512,
        src: '/projects/sts/Logo.png',
        width: 512,
    },
    duration: '2021, September - 2021, December',
    projectRepo: 'https://github.com/Elliot-Chin/StudentTrackingSystem-1',
    TLDR: "During the 'Software Quality and Project Management' course at UNB, I engaged in a project to streamline school advisors' management of student and course data. The task entailed processing text files into analytics, presented on a dashboard and evaluated through user testing by the class and professor. Utilizing agile scrum, we held pre-class standups for progress reporting and pair programming for feature development, culminating in a robust solution with a full CI/CD pipeline, live hosting, and comprehensive test coverage. This facilitative dashboard led to my recruitment by the professor to expand a similar tool for broader departmental use, transitioning from a class project to a larger-scale initiative.",

    languages: [
        {
            label: "Python [85.9%]",
            value: 85.9,
        },
        {
            label: "HTML [10.6%]",
            value: 10.6,
        },
        {
            label: "CSS [3.5%]",
            value: 3.5,
        },
    ],

    projectOutlineDesc: "The University of New Brunswick's engineering faculty needs a web-based system to monitor student progress, schedules, and enrollments using raw data from student files. Three user types will use this system: Program Advisors for creating personalized student audits and schedules, Program Coordinators for generating various student group reports and rankings, and Accreditation Coordinators for producing accreditation-related reports. Although multiple engineering programs will use the application, only one program coordinator will have access to upload the raw data. With sufficient security, students could also use the system for unofficial progress audits.",
    initPhaseDesc: "In the initial phase of our project, I was new to the realm of web development and the frameworks that were to be employed. Despite my initial unfamiliarity, I was able to contribute to the development of database models essential for data storage. This foundational work was crucial as it laid the groundwork for the more advanced functionalities that were to follow. We decided to use Django as the framework since we were planning on using Python for the backend, and Django is adept at creating web apps using Python, setting a solid foundation for the subsequent phases of the project.",
    progressDesc: "As the project progressed, we unanimously chose to switch the user interface to React, anticipating a more interactive and user-centric experience. At this point, we had achieved several system requirements. Our initial demonstration went well, highlighting the basic functionalities we had accomplished. This milestone reflected our escalating proficiency and the potency of our collaborative efforts.",
    finalStretchDesc: "As the semester neared its end, we were on the brink of meeting all the outlined requirements. The system had now become adept at producing significant information for advisors, a functionality that was pivotal to the project's goals. The considerable progress we achieved was a testament to the team's hard work and unwavering commitment.",
    finalThoughts: "Reflecting on this endeavor, it was a rewarding and enjoyable project. The camaraderie and collective effort of a remarkable team made the journey worthwhile. Everyone was eager to share their knowledge, bridging the skill gap, and fostering a culture of mutual growth and accomplishment. Through this project, we not only built a functional system but also forged lasting relationships and acquired invaluable skills that would serve us well in our future endeavors.",
}





export const ECAvatarLink = 'https://media.licdn.com/dms/image/D5603AQGd9kzqFjrfmw/profile-displayphoto-shrink_200_200/0/1710538487473?e=2147483647&v=beta&t=Y8wQXmO8Hle0rFhdqg-lCYLG2Zwslu2Dv9RSQ3-oaKA'