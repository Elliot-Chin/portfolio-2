import { AddOutlined, CalendarMonth, EngineeringOutlined, GpsFixed, PersonOutline, RemoveOutlined } from "@mui/icons-material";
import { Chip, Divider } from "@nextui-org/react";



export default function ResumeSkillEntry({ toggle, bool, title, skills }) {

    return (
        <>
            <div className="w-full px-2 mt-3 flex hover:cursor-pointer items-center" onClick={() => toggle((p) => !p)}>
                <span className="dark:text-white font-rale text-2xl pr-3 lg:text-4xl">{title || '<TITLE>'}</span>
                <div className="border w-full h-0 my-auto mr-2 border-blue-600" />
                <div className="dark:text-white font-2xl items-center flex">
                    {bool && <RemoveOutlined className="text-red-600" /> || <AddOutlined className="text-green-600" />}
                </div>
            </div>

            <div className={`${bool && 'show-grid' || 'hidden-grid'} w-full`}>
                <div className="flex flex-col gap-2">
                    {
                        skills?.map((skill, index) => (
                            <div key={index}>
                                <div className={`w-full px-2 mt-3 gap-y-2`}>
                                    <div className="flex gap-2">
                                        {skill.icon}
                                        <span className="dark:text-white font-raleway text-xl lg:text-3xl">{skill.category}</span>
                                    </div>

                                    <div className="flex gap-2 flex-wrap mt-3">
                                        {
                                            skill.skills.map((skill, index) => (
                                                <Chip key={index} variant="flat" color="warning" className="font-montserrat lg:text-medium">{skill}</Chip>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div >
                        ))

                    }
                </div>
            </div>
        </>
    )
}