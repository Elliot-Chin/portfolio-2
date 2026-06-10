import ExpensesRecorder from "@/components/projects/expenses-recorder/ExpensesRecorder"
import { SeoHead } from "@/components/seo/SeoHead"

export default function ExpensesRecorderPage() {
    return (
        <>
            <SeoHead
                title="Expenses Recorder | Elliot Chin"
                description="Personal expense tracking web application by Elliot Chin for budgeting, reporting, and spending analysis."
                path="/projects/Expenses_Recorder"
                image="https://elliotc.dev/projects/exprec/Logo.png"
            />
            <ExpensesRecorder />
        </>
    )
}
