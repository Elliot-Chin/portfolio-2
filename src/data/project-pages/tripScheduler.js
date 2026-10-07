export const tripSchedulerPageData = {
    hero: {
        slug: "~/projects/trip-scheduler", meta: "Active personal project / 2026",
        eyebrow: "Personal tooling / travel planning", title: "TripScheduler",
        summary: "A travel planner that keeps the whole trip in one place: where to go, what to do, and who’s coming along. It started as a collection of Excel schedules and grew into a website where travel companions can plan together.",
        command: "deploy trip_scheduler --inspect",
    },
    featureCards: [
        { title: "Plan Each Day", body: "See travel, places to stay, meals, and activities together so you know what the day looks like.", iconKey: "TimelineOutlined" },
        { title: "Travel Together", body: "Invite companions and discuss ideas in the same place as the trip plan.", iconKey: "GroupsOutlined" },
        { title: "Keep Trips Organised", body: "Find your next adventure or look back at a past trip without searching through separate files.", iconKey: "ExploreOutlined" },
        { title: "Take the Plan Along", body: "Read the itinerary as a calendar or a simple list, and download a copy for the journey.", iconKey: "EventNoteOutlined" },
    ],
    systemSnapshot: [
        { label: "The Idea", value: "Less juggling, more travelling", body: "Give everyone a clear picture of the trip before they leave." },
        { label: "Where It Started", value: "An Excel travel planner", body: "Colour-coded schedules helped organise road trips, holidays, and places to explore." },
        { label: "Where It Is Today", value: "A shared online planner", body: "Bring the schedule and the people travelling together into one place." },
    ],
    documentedNotes: ["Keep upcoming and past trips together.", "See each day’s plans at a glance.", "Invite companions and talk through ideas.", "Keep maps and trip expenses alongside the itinerary."],
    metadataRows: [
        { label: "Status", value: "Active", accent: "text-amber-300" },
        { label: "Project Type", value: "Personal tool" },
        { label: "Started With", value: "Excel" },
        { label: "Now", value: "Online planner" },
    ],
    capabilityPills: ["Daily Plans", "Travel Companions", "Trip Collection", "Maps", "Expenses", "Discussions", "Downloadable Itinerary"],
    operationsNotes: ["Designed around real trips and the practical details that come with them.", "Keeps the familiar visual schedule while making it easier to plan with other people."],
    gallery: [
        { title: "The Original Trip Planner", image: "/projects/trip-scheduler/excel-cape-breton-2024.png", description: "A short trip planned in Excel, with colours separating travel, meals, stays, and things to do. Names shown are fictional." },
        { title: "Planning a Longer Holiday", image: "/projects/trip-scheduler/excel-toronto-christmas-2025.png", description: "The same approach used for a longer holiday, keeping each day easy to follow. Names shown are fictional." },
        { title: "All Your Trips", image: "/projects/trip-scheduler/online-dashboard-demo.png", description: "One place to find upcoming adventures and revisit past journeys. Names shown are fictional." },
        { title: "A Day at a Glance", image: "/projects/trip-scheduler/online-itinerary-demo.png", description: "See how travel and activities fit into the day. Names shown are fictional." },
        { title: "An Easy-to-Read Itinerary", image: "/projects/trip-scheduler/online-list-demo.png", description: "A simple list of the day’s plans, ready to check as you go. Names shown are fictional." },
    ],
    conclusion: "TripScheduler grew from a practical way to organise personal holidays into a shared place for planning them. It brings the details of a journey together so everyone can see the plan and spend less time piecing it together.",
    finalThoughts: "The original spreadsheet showed how useful a clear daily plan could be. Bringing that idea online makes it easier to include travel companions, keep ideas together, and return to the trips worth remembering.",
}
