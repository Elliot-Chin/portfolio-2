import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { NextUIProvider } from "@nextui-org/system";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </ThemeProvider>
    )
}
