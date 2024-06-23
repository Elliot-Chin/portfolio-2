import { AddOutlined, CalendarMonth, GpsFixed, PersonOutline, RemoveOutlined } from "@mui/icons-material";
import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/router";



export default function ResumeJobEntry({ toggle, bool, title, jobs, setLoading }) {

    const router = useRouter()

    return (
        <>
            <div className="w-full px-2 mt-3 flex hover:cursor-pointer items-center " onClick={() => toggle((p) => !p)}>
                <span className="dark:text-white font-montserrat text-2xl pr-3 lg:text-4xl">{title || '<TITLE>'}</span>
                <div className="border w-full h-0 my-auto mr-2 border-blue-600" />
                <div className="dark:text-white font-2xl  flex items-center">
                    {bool && <RemoveOutlined className="text-red-600" /> || <AddOutlined className="text-green-600" />}
                </div>
            </div>

            <div className={`${bool && 'show-grid' || 'hidden-grid'}`}>
                <div className="flex flex-col gap-2">
                    {
                        jobs?.map((job, index) => (
                            <div key={index}>
                                <div className={`w-full px-2 mt-3 gap-y-2`}>
                                    <div className="flex gap-2">
                                        <PersonOutline className="text-2xl  dark:text-white" />
                                        <span className="dark:text-white font-raleway text-xl lg:text-2xl">{job.title}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <CalendarMonth className="text-2xl  dark:text-white" />
                                        <span className="dark:text-white font-raleway lg:text-xl">{job.duration}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <GpsFixed className="text-2xl  dark:text-white" />
                                        <span className="dark:text-white font-raleway lg:text-xl">{job.location}</span>
                                    </div>
                                    <p className="dark:text-white font-montserrat text-sm mt-3 lg:text-medium" dangerouslySetInnerHTML={{ __html: job.description }} />
                                </div>

                                {index != jobs.length - 1 && <Divider className="bg-blue-600 w-11/12 mx-auto my-3" />}
                            </div >
                        ))

                    }
                    <div className="w-full px-2 mt-5">
                        <Button color="success" variant="flat" className="font-oswald dark:text-white lg:text-2xl" onClick={() => {setLoading({state: true, name: 'experiences'}), router.push('/experiences')}}>See More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}