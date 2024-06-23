import { AddOutlined, CalendarMonthOutlined, FolderCopyOutlined, RemoveOutlined } from "@mui/icons-material";
import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/router";



export default function ResumeProjectEntry({ toggle, bool, title, projects, setLoading }) {

    const router = useRouter()

    return (
        <>
            <div className="w-full px-2 mt-3 flex hover:cursor-pointer items-center" onClick={() => toggle((p) => !p)}>
                <span className="dark:text-white font-montserrat text-2xl pr-3 lg:text-4xl">{title || '<TITLE>'}</span>
                <div className="border w-full h-0 my-auto mr-2 border-blue-600" />
                <div className="dark:text-white font-2xl flex items-center">
                    {bool && <RemoveOutlined className="text-red-600" /> || <AddOutlined className="text-green-600" />}
                </div>
            </div>

            <div className={`${bool && 'show-grid' || 'hidden-grid'} w-full`}>
                <div className="flex flex-col gap-2">
                    {
                        projects?.map((project, index) => (
                            <div key={index}>
                                <div className={`w-full px-2 mt-3 gap-y-2`}>
                                    <div className="flex gap-2">
                                        <FolderCopyOutlined className="text-2xl dark:text-white" />
                                        <span className="dark:text-white font-raleway text-2xl lg:text-3xl">{project.title}</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <CalendarMonthOutlined className="text-2xl dark:text-white" />
                                        <span className="dark:text-white font-raleway lg:text-xl">{project.duration}</span>
                                    </div>

                                    <div className="mt-3">
                                        <p className="font-montserrat text-sm dark:text-white lg:text-medium" dangerouslySetInnerHTML={{ __html: project.summary }} />
                                    </div>
                                </div>

                                {index != projects.length - 1 && <Divider className="bg-blue-600 w-11/12 mx-auto mt-5" />}
                            </div >
                        ))
                    }
                    <div className="w-full px-2 mt-5">
                        <Button color="success" variant="flat" className="font-oswald dark:text-white lg:text-2xl" onClick={() => {setLoading({state: true, name: 'projects'}), router.push('/projects')}}>See More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}