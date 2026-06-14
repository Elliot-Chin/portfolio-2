import { ProjectOverviewCard } from "@/components/projects/ProjectOverviewCard"

export function ProjectOverviewCardsRow({ cards, columnsClass }) {
    return (
        <div className="mx-auto w-full max-w-[96rem]">
            <div className="-mx-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:-mx-0 sm:overflow-visible sm:px-0 sm:pb-0 sm:snap-none">
                <div className={`flex gap-4 sm:grid sm:gap-5 ${columnsClass}`}>
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
            </div>
        </div>
    )
}
