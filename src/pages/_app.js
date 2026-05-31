import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { NextUIProvider } from "@nextui-org/system";
import { HomeTopNav } from "@/components/nav/HomeTopNav";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <NextUIProvider>
                <HomeTopNav />
                <Component {...pageProps} />
            </NextUIProvider>
        </ThemeProvider>
    )
}
