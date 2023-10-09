import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
    <Html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Lato:wght@700&family=Roboto+Condensed&display=swap" rel="stylesheet" />
            <link rel="icon" type='image/png' href="/Images/logo.png" as='icon' />
            <title>Elliot Chin</title>
            <Script
                type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
                strategy="beforeInteractive" />

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-0MH67YDFQN"
                strategy="afterInteractive" />

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-0MH67YDFQN');
                `
                }}
                />
        </Head>
        
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
    ) 
}
