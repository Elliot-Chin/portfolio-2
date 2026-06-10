import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { HomeTopNav } from "@/components/nav/HomeTopNav";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <HomeTopNav />
            <Component {...pageProps} />
            <Analytics />
        </ThemeProvider>
    )
}
