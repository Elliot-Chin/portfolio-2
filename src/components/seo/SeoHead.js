import Head from "next/head"

const SITE_NAME = "Elliot Chin"
const SITE_URL = "https://elliotc.dev"
const DEFAULT_IMAGE = `${SITE_URL}/icons/logo_black_transparent.png`

export function SeoHead({
    title,
    description,
    path = "/",
    image = DEFAULT_IMAGE,
    noindex = false,
}) {
    const canonicalPath = path === "/" ? "" : path
    const canonicalUrl = `${SITE_URL}${canonicalPath}`

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
        </Head>
    )
}
