import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { NextUIProvider } from "@nextui-org/system";
import { HomeTopNav } from "@/components/nav/HomeTopNav";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <NextUIProvider>
                <HomeTopNav />
                <Component {...pageProps} />
                <Analytics />
            </NextUIProvider>
        </ThemeProvider>
    )
}
