// components/contact/ScrollHint.js
import { KeyboardDoubleArrowDownOutlined } from "@mui/icons-material"

export function ScrollHint() {
    return (
        <div className="flex flex-col gap-2 font-montserrat text-sm sm:text-xl items-center justify-center animate-bounce mt-[5vh]">
            <span>Scroll</span>
            <KeyboardDoubleArrowDownOutlined fontSize="medium" />
        </div>
    )
}
