import ExpensesRecorder from "@/components/projects/expenses-recorder/ExpensesRecorder"
import Head from "next/head"

export default function ExpensesRecorderPage() {
    return <>
       <Head>
                <title>EC — Expenses Recorder</title>
                <meta name="description" content="Elliot Chin - Expenses Recorder" />
            </Head>
        <ExpensesRecorder />
    </>
}
