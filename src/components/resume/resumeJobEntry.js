import {
    AddOutlined,
    CalendarMonth,
    GpsFixed,
    PersonOutline,
    RemoveOutlined,
} from "@mui/icons-material"
import { Button, Divider } from "@nextui-org/react"
import { useRouter } from "next/router"

export default function ResumeJobEntry({ toggle, bool, title, jobs, setLoading }) {
    const router = useRouter()

    return (
        <>
            <div
                className="w-full mt-1 flex items-center select-none cursor-pointer"
                onClick={() => toggle((p) => !p)}
            >
                <span className="font-montserrat text-2xl lg:text-4xl text-amber-950
          ">
                    {title || "<TITLE>"}
                </span>
                <div className="mx-3 h-[2px] flex-1 bg-gradient-to-r from-amber-500  via-yellow-400 to-amber-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-300 rounded-full" />
                <div>
                    {bool ? (
                        <RemoveOutlined className="text-red-500 transition-transform duration-200" />
                    ) : (
                        <AddOutlined className="text-green-500 transition-transform duration-200" />
                    )}
                </div>
            </div>

            <div className={`${(bool && "show-grid") || "hidden-grid"}`}>
                <div className="flex flex-col gap-4 mt-3">
                    {jobs?.map((job, index) => (
                        <div key={index}>
                            <div className="w-full gap-y-2">
                                <div className="flex gap-2 items-center text-amber-950 font-semibold">
                                    <PersonOutline className="text-2xl 
                    " />
                                    <span className="font-raleway lg:text-2xl text-amber-950 font-semibold ">
                                        {job.title}
                                    </span>
                                </div>

                                <div className="flex gap-2 items-center mt-1 text-amber-950 font-semibold">
                                    <CalendarMonth className="text-2xl 
                    " />
                                    <span className="font-raleway lg:text-xl text-amber-950 font-semibold ">
                                        {job.duration}
                                    </span>
                                </div>

                                <div className="flex gap-2 items-center mt-1 text-amber-950 font-semibold">
                                    <GpsFixed className="text-2xl 
                    " />
                                    <span className="font-raleway lg:text-xl text-amber-950 font-semibold ">
                                        {job.location}
                                    </span>
                                </div>

                                <p
                                    className="font-montserrat mt-3 leading-relaxed text-amber-950 "
                                    dangerouslySetInnerHTML={{ __html: job.description }}
                                />
                            </div>

                            {index !== jobs.length - 1 && (
                                <Divider className="bg-gradient-to-r from-transparent via-amber-300/60 to-transparent dark:via-amber-400/40 w-11/12 mx-auto my-3 h-[2px]" />
                            )}
                        </div>
                    ))}

                    <div className="w-full mt-2">
                        <Button
                            variant="flat"
                            className="
                  font-montserrat lg:text-2xl
                text-white shadow-md hover:opacity-95
                hover:!bg-amber-900
                "
                            onPress={() => {
                                setLoading({ state: true, name: "experiences" })
                                router.push("/experiences")
                            }}
                        >
                            See More
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
