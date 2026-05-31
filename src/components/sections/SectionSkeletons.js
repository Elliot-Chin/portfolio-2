function SkeletonBlock({ className = "" }) {
    return <div className={`animate-pulse rounded-3xl bg-white/12 ${className}`.trim()} />
}

export function AvatarCanvasSkeleton({ className = "" }) {
    return <SkeletonBlock className={`h-full w-full rounded-[3rem] bg-white/10 ${className}`.trim()} />
}

export function HeroSectionOverlaySkeleton() {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <div className="mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-14">
                <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                    <div>
                        <SkeletonBlock className="h-9 w-80 rounded-full" />
                        <SkeletonBlock className="mt-8 h-16 w-full max-w-2xl rounded-xl sm:h-20" />
                        <SkeletonBlock className="mt-3 h-16 w-11/12 max-w-2xl rounded-xl sm:h-20" />
                        <SkeletonBlock className="mt-8 h-7 w-72 rounded-lg" />
                        <SkeletonBlock className="mt-8 h-5 w-full max-w-3xl rounded-lg" />
                        <SkeletonBlock className="mt-3 h-5 w-full max-w-3xl rounded-lg" />
                        <SkeletonBlock className="mt-3 h-5 w-10/12 max-w-2xl rounded-lg" />
                        <div className="mt-10 flex gap-4">
                            <SkeletonBlock className="h-14 w-56 rounded-none" />
                            <SkeletonBlock className="h-14 w-48 rounded-none" />
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:items-end lg:justify-end">
                        <SkeletonBlock className="h-[72vh] w-[28rem] max-h-[820px] min-h-[580px] rounded-[3rem] xl:w-[34rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function AboutIntroOverlaySkeleton() {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden px-7 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto grid min-h-[100svh] w-full max-w-[96rem] gap-5 lg:grid-cols-3">
                {[1, 2, 3].map((card) => (
                    <div key={card} className="border border-slate-200/8 bg-slate-950/34 px-7 py-7">
                        <div className="flex items-start justify-between">
                            <SkeletonBlock className="h-6 w-6 rounded-md" />
                            <SkeletonBlock className="h-4 w-14 rounded-sm" />
                        </div>
                        <SkeletonBlock className="mt-14 h-10 w-52 rounded-lg" />
                        <SkeletonBlock className="mt-6 h-5 w-full rounded-lg" />
                        <SkeletonBlock className="mt-3 h-5 w-11/12 rounded-lg" />
                        <SkeletonBlock className="mt-10 h-4 w-40 rounded-sm" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export function AboutIntroSectionSkeleton() {
    return (
        <section className="relative min-h-[100svh] sm:min-h-screen snap-start overflow-hidden px-7 py-16 sm:px-10 lg:px-14">
            <div className="mx-auto grid min-h-[100svh] w-full max-w-[96rem] gap-5 lg:grid-cols-3">
                {[1, 2, 3].map((card) => (
                    <div key={card} className="border border-slate-200/8 bg-slate-950/34 px-7 py-7">
                        <div className="flex items-start justify-between">
                            <SkeletonBlock className="h-6 w-6 rounded-md" />
                            <SkeletonBlock className="h-4 w-14 rounded-sm" />
                        </div>
                        <SkeletonBlock className="mt-14 h-10 w-52 rounded-lg" />
                        <SkeletonBlock className="mt-6 h-5 w-full rounded-lg" />
                        <SkeletonBlock className="mt-3 h-5 w-11/12 rounded-lg" />
                        <SkeletonBlock className="mt-10 h-4 w-40 rounded-sm" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export function AboutDetailsOverlaySkeleton() {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none px-4 py-10">
            <div className="mx-auto grid h-full w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(18rem,28rem)_1fr]">
                <div className="hidden justify-center md:flex">
                    <SkeletonBlock className="h-[55vh] w-full max-w-md rounded-[3rem] bg-white/10 lg:h-[70vh]" />
                </div>
                <div className="flex flex-col">
                    <SkeletonBlock className="h-10 w-56" />
                    <SkeletonBlock className="mt-5 h-5 w-full max-w-2xl" />
                    <SkeletonBlock className="mt-2 h-5 w-full max-w-2xl" />
                    <SkeletonBlock className="mt-5 h-5 w-11/12 max-w-2xl" />
                    <SkeletonBlock className="mt-2 h-5 w-10/12 max-w-xl" />
                    <SkeletonBlock className="mt-5 h-5 w-11/12 max-w-2xl" />
                    <div className="mt-8 flex gap-5">
                        <SkeletonBlock className="h-12 w-12 rounded-2xl" />
                        <SkeletonBlock className="h-12 w-12 rounded-2xl" />
                        <SkeletonBlock className="h-12 w-12 rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function HeroSectionSkeleton() {
    return (
        <section className="relative min-h-[100svh] sm:min-h-screen snap-start overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-[55svh] sm:inset-0 sm:h-full flex items-center justify-center px-6">
                <SkeletonBlock className="h-[44svh] w-full max-w-xl rounded-[3rem] bg-white/10" />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center px-4">
                <div className="flex w-full max-w-4xl flex-col items-center px-6 pt-20 text-center sm:pt-28">
                    <SkeletonBlock className="h-12 w-64 sm:h-14 sm:w-80" />
                    <SkeletonBlock className="mt-6 h-8 w-72 sm:h-10 sm:w-[34rem]" />
                    <SkeletonBlock className="mt-2 h-8 w-60 sm:h-10 sm:w-[28rem]" />
                    <div className="mt-8 flex w-full flex-wrap justify-center gap-3">
                        <SkeletonBlock className="h-11 w-40 rounded-full" />
                        <SkeletonBlock className="h-11 w-40 rounded-full" />
                        <SkeletonBlock className="h-11 w-40 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export function AboutDetailsSectionSkeleton() {
    return (
        <section className="min-h-screen snap-start px-4 py-10">
            <div className="mx-auto grid h-full w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(18rem,28rem)_1fr]">
                <div className="hidden justify-center md:flex">
                    <SkeletonBlock className="h-[55vh] w-full max-w-md rounded-[3rem] bg-white/10 lg:h-[70vh]" />
                </div>

                <div className="flex flex-col">
                    <SkeletonBlock className="h-10 w-56" />
                    <SkeletonBlock className="mt-5 h-5 w-full max-w-2xl" />
                    <SkeletonBlock className="mt-2 h-5 w-full max-w-2xl" />
                    <SkeletonBlock className="mt-5 h-5 w-11/12 max-w-2xl" />
                    <SkeletonBlock className="mt-2 h-5 w-10/12 max-w-xl" />
                    <SkeletonBlock className="mt-5 h-5 w-11/12 max-w-2xl" />
                    <div className="mt-8 flex gap-5">
                        <SkeletonBlock className="h-12 w-12 rounded-2xl" />
                        <SkeletonBlock className="h-12 w-12 rounded-2xl" />
                        <SkeletonBlock className="h-12 w-12 rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
