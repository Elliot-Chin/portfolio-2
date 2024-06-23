import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Elliot Chin</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Montserrat:ital,wght@0,321;1,321&family=Oswald:wght@300&family=Raleway:ital,wght@0,200;1,200&family=Space+Mono&display=swap" rel="stylesheet" />

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
	);
}
