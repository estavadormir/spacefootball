import './globals.css'
import { Roboto_Mono } from '@next/font/google';

const font = Roboto_Mono({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en" className={font.className}>
            <head>
                <title>{`SpaceFootball`}</title>
                <meta name="description" content={`An app that displays data for the Premier League clubs season 2018-2019`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    )
}
