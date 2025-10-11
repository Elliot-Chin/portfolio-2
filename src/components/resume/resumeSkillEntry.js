import { AddOutlined, RemoveOutlined } from "@mui/icons-material"
import { Chip, Divider } from "@nextui-org/react"

export default function ResumeSkillEntry({ toggle, bool, title, skills }) {
  return (
    <>
      <div
        className="w-full mt-1 flex items-center select-none cursor-pointer"
        onClick={() => toggle((p) => !p)}
      >
        <span className="font-montserrat text-2xl lg:text-4xl text-amber-950">
          {title || "<TITLE>"}
        </span>
        <div className="mx-3 h-[2px] flex-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-300 rounded-full" />
        <div className="text-amber-950">
          {bool ? (
            <RemoveOutlined className="text-red-500 transition-transform duration-200" />
          ) : (
            <AddOutlined className="text-green-500 transition-transform duration-200" />
          )}
        </div>
      </div>

      <div className={`${(bool && "show-grid") || "hidden-grid"} w-full`}>
        <div className="flex flex-col gap-4 mt-3">
          {skills?.map((skill, index) => (
            <div key={index}>
              <div className="w-full gap-y-2">
                <div className="flex gap-2 items-center">
                  {/* keep passed icon (styled by caller) */}
                  <span className={`inline-flex items-center !text-amber-950 font-semibold absolute animate-${skill.animate}
                  [animation-duration:${skill.duration || 4}s]`}>
                    {skill.icon}
                  </span>
                  <span className="font-raleway text-xl lg:text-3xl !text-amber-950 font-semibold ml-10">
                    {skill.category}
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap mt-3">
                  {skill.skills.map((s, i) => (
                    <Chip
                      key={i}
                      variant="flat"
                      color="warning"
                      className="font-montserrat lg:text-base shadow-sm !text-red-950"
                    >
                      {s}
                    </Chip>
                  ))}
                </div>
              </div>
              {index !== skills.length - 1 && (
                <Divider className="bg-gradient-to-r from-transparent via-amber-300/60 to-transparent dark:via-amber-400/40 w-11/12 mx-auto mt-5 h-[2px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
