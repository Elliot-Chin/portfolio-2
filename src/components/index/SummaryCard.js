import { Button } from '@nextui-org/react'
import { ReactTyped } from 'react-typed'

export const SummaryCard = ({ summary, button, bg, className = "" }) => {
    return (
        <div
            className={[
                "glass flex",
                // transparent on mobile/tablet, keep card look on desktop
                "max-lg:bg-transparent max-lg:shadow-none",
                "lg:bg-opacity-20",
                className,
            ].join(" ")}
        >
            <div className="flex flex-col w-full p-2 h-[80vh]">
                <div className="flex justify-between px-3">
                    <ReactTyped
                        startWhenVisible
                        strings={["About Me"]}
                        typeSpeed={40}
                        className="text-[#1F1F1F] bg-transparent text-4xl font-bold capitalize font-montserrat"
                        showCursor={false}
                    />
                    {button && (
                        <Button
                            size="md"
                            radius="lg"
                            variant="flat"
                            color="warning"
                            className="font-oswald text-lg dark:text-white text-slate-950"
                        >
                            {button}
                        </Button>
                    )}
                </div>

                {/* Make the text area fill remaining height and scroll internally */}
                <textarea
                    disabled
                    rows={20}
                    className="mt-2 p-3 resize-none text-[#1F1F1F] font-bold bg-transparent text-lg font-raleway
                       flex-1 min-h-0 overflow-y-auto"
                    value={summary}
                />
            </div>
        </div>
    )
}
