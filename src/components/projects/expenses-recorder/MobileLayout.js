import MediaContent from "./MediaContent"
import NoMediaContent from "./NoMediaContent"

export default function MobileLayout({ sections, fadeIn, slideLeft, slideRight }) {
    return (
        <div className="pt-14 h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth">
            {(() => {
                let mediaIndex = -1
                return sections.map((s) => {
                    const hasMedia = !!s.media && s.images
                    if (hasMedia) mediaIndex += 1
                    const mediaOnLeft = s.mediaLeft ?? (hasMedia ? mediaIndex % 2 === 0 : null)
                    const keepImageFirst = s.key === "hero" // only first page keeps image first
                    return (
                        <section key={s.key} className="py-4 sm:py-6 flex items-center justify-center px-4">
                            <div className={["w-full max-w-6xl grid", hasMedia ? "gap-4" : "place-items-center"].join(" ")}>
                                {hasMedia ? (
                                    <MediaContent
                                        s={s}
                                        mediaOnLeft={mediaOnLeft}
                                        keepImageFirst={keepImageFirst}
                                        fadeIn={fadeIn}
                                        slideLeft={slideLeft}
                                        slideRight={slideRight}
                                    />
                                ) : (
                                    <NoMediaContent s={s} fadeIn={fadeIn} />
                                )}
                            </div>
                        </section>
                    )
                })
            })()}
        </div>
    )
}
