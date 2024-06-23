import { Spinner } from "@nextui-org/react"





export const Loader = ({pageName}) => {
    return (
        <div className="h-screen w-screen fixed z-50 glass-effect flex items-center justify-center">
            <Spinner color="warning" label={`Loading ${pageName}...`} size="lg"
            classNames={{
                label: ['text-2xl bg-transparent font-oswald dark:text-slate-300 text-slate-600 font-bold '],
            }}
            />
        </div>
    )
}