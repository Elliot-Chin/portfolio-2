import { ProjectOverviewCard } from "@/components/projects/ProjectOverviewCard"
import { HorizontalScrollRail } from "@/components/ui/HorizontalScrollRail"

export function ProjectOverviewCardsRow({ cards, columnsClass }) {
    return (
        <div className="mx-auto w-full max-w-[96rem]">
            <HorizontalScrollRail
                className="lg:static"
                railClassName="-mx-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory lg:-mx-0 lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none"
                scrollStep={360}
            >
                <div className={`flex gap-4 lg:grid lg:gap-5 ${columnsClass}`}>
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
            </HorizontalScrollRail>
        </div>
    )
}
