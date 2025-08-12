import { Figtree, Nunito, Urbanist } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
    variable: '--font-figtree',
    subsets: ['latin'],
    display: 'swap',
});

const urbanist = Urbanist({
    variable: '--font-urbanist',
    subsets: ['latin'],
    display: 'swap',
});

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${figtree.variable} ${urbanist.variable} ${nunito.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
