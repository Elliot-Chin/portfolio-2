import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { HomeTopNav } from "@/components/nav/HomeTopNav";
import { Analytics } from "@vercel/analytics/react";
import { NavigationFeedback } from "@/components/nav/NavigationFeedback";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <NavigationFeedback />
            <HomeTopNav />
            <Component {...pageProps} />
            <Analytics />
        </ThemeProvider>
    )
}
