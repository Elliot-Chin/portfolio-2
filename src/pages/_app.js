import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {


  return (
    <NextUIProvider>
      <title>Elliot Chin</title>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
