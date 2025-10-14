import {
    AddOutlined,
    CalendarMonthOutlined,
    FolderCopyOutlined,
    RemoveOutlined,
} from "@mui/icons-material"
import { Button, Divider } from "@nextui-org/react"
import { useRouter } from "next/router"

export default function ResumeProjectEntry({ toggle, bool, title, projects, setLoading }) {
    const router = useRouter()

    return (
        <>
            <div
                className="w-full mt-1 flex items-center select-none cursor-pointer"
                onClick={() => toggle((p) => !p)}
            >
                <span className="text-2xl lg:text-4xl text-white font-bold">
                    {title || "<TITLE>"}
                </span>
                <div className="mx-3 h-[2px] flex-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-full" />
                <div>
                    {bool ? (
                        <RemoveOutlined className="text-red-500" />
                    ) : (
                        <AddOutlined className="text-green-500" />
                    )}
                </div>
            </div>

            <div className={`${(bool && "show-grid") || "hidden-grid"} w-full`}>
                <div className="flex flex-col gap-4 mt-3">
                    {projects?.map((project, index) => (
                        <div key={index}>
                            <div className="w-full gap-y-2">
                                <div className="flex gap-2 items-center">
                                    <FolderCopyOutlined className="text-2xl text-white font-semibold " />
                                    <span className="font-raleway text-2xl lg:text-3xl text-white font-semibold ">
                                        {project.title}
                                    </span>
                                </div>

                                <div className="flex gap-2 items-center mt-1">
                                    <CalendarMonthOutlined className="text-2xl text-slate-100/80 font-semibold " />
                                    <span className="font-raleway lg:text-xl text-slate-100/80 font-semibold ">
                                        {project.duration}
                                    </span>
                                </div>

                                <div className="mt-3">
                                    <p
                                        className="font-montserrat text-sm lg:text-base text-white leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: project.summary }}
                                    />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <Button
                                    variant="flat"
                                    className="
                  font-montserrat lg:text-2xl
                text-white shadow-md hover:opacity-95
                !bg-amber-900
                hover:!bg-amber-700
                "
                                    onPress={() => {
                                        setLoading({ state: true, name: project.title })
                                        router.push(project.link)
                                    }}
                                >
                                    See More - {project.title}
                                </Button>
                            </div>

                            {index !== projects.length - 1 && (
                                <Divider className="bg-gradient-to-r from-transparent via-amber-300/60 to-transparent w-11/12 mx-auto mt-5 h-[2px]" />
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
