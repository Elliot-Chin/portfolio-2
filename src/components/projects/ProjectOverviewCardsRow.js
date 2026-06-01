import { ProjectOverviewCard } from "@/components/projects/ProjectOverviewCard"

export function ProjectOverviewCardsRow({ cards, columnsClass }) {
    return (
        <div className={`mx-auto grid w-full max-w-[96rem] gap-5 ${columnsClass}`}>
            {cards.map(({ title, body, Icon }) => (
                <ProjectOverviewCard
                    key={title}
                    title={title}
                    body={body}
                    Icon={Icon}
                    active
                />
            ))}
        </div>
    )
}
