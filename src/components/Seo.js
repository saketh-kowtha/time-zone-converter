import Head from 'next/head'

export default function Seo({}) {
    return (
        <Head>
            <title>Time zone converter</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Convert time from one zone to other zone." />
            <meta name="keywords" content="Timezone, timezone-converter, timezone converter" />
            <meta name="author" content="Saketh" />
            <meta property="og:title" content="Time zone converter" />
            <meta property="og:url" content="https://time-zone-converter.vercel.app/" />
            <meta property="og:description" content="Convert time from one zone to other zone." />
            <meta property="og:type" content="website" />

            <meta name="twitter:title" content="Time zone converter" />
            <meta name="twitter:description" content="Convert time from one zone to other zone." />
            <meta name="twitter:creator" content="@sakethkowtha" />
            <meta name="twitter:card" content="summary_large_image"></meta>
            <link rel="canonical" href="https://time-zone-converter.vercel.app/" />
        </Head>
    )
}
