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
          <span className="font-montserrat text-2xl lg:text-4xl text-slate-900 dark:text-white">
            {title || "<TITLE>"}
          </span>
          <div className="mx-3 h-[2px] flex-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-300 rounded-full" />
          <div className="text-slate-900 dark:text-white">
            {bool ? (
              <RemoveOutlined className="text-red-500 transition-transform duration-200" />
            ) : (
              <AddOutlined className="text-green-500 transition-transform duration-200" />
            )}
          </div>
        </div>
  
        <div className={`${(bool && "show-grid") || "hidden-grid"} w-full`}>
          <div className="flex flex-col gap-4 mt-3">
            {projects?.map((project, index) => (
              <div key={index}>
                <div className="w-full gap-y-2">
                  <div className="flex gap-2 items-center">
                    <FolderCopyOutlined className="text-2xl text-slate-900 dark:text-white" />
                    <span className="font-raleway text-2xl lg:text-3xl text-slate-900 dark:text-white">
                      {project.title}
                    </span>
                  </div>
  
                  <div className="flex gap-2 items-center mt-1">
                    <CalendarMonthOutlined className="text-2xl text-slate-900 dark:text-white" />
                    <span className="font-raleway lg:text-xl text-slate-800 dark:text-slate-200">
                      {project.duration}
                    </span>
                  </div>
  
                  <div className="mt-3">
                    <p
                      className="font-montserrat text-sm lg:text-base text-slate-800 dark:text-slate-200 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: project.summary }}
                    />
                  </div>
                </div>
  
                {index !== projects.length - 1 && (
                  <Divider className="bg-gradient-to-r from-transparent via-amber-300/60 to-transparent dark:via-amber-400/40 w-11/12 mx-auto mt-5 h-[2px]" />
                )}
              </div>
            ))}
  
            <div className="w-full mt-4">
              <Button
                color="success"
                variant="flat"
                className="
                  font-oswald lg:text-2xl
                  bg-gradient-to-br from-amber-500 to-yellow-400
                  text-white shadow-md hover:opacity-95
                "
                onClick={() => {
                  setLoading({ state: true, name: "projects" })
                  router.push("/projects")
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
  