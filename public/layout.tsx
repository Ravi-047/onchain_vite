import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'OnChain',
    description:
        'Onchain: Secure, decentralized, and lasting blockchain solutions. Create and own digital products with total control.',
    alternates: {
        canonical: '',
    },

    openGraph: {
        title: 'OnChain',
        description:
            'Onchain: Secure, decentralized, and lasting blockchain solutions. Create and own digital products with total control.',
        type: 'website',
        url: '',
        siteName: 'OnChain',
        images: [
            {
                url: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v59ayzmhyl5gp2roa6t5.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'OnChain',
        description:
            'Onchain: Secure, decentralized, and lasting blockchain solutions. Create and own digital products with total control.',
        images: [
            'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v59ayzmhyl5gp2roa6t5.png',
        ],
        site: '@onchain',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className="scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#876CF5] scrollbar-track-[#0c0b1e]"
        >
            <Head>
                <meta name="apple-mobile-web-app-title" content="OnChain" />
            </Head>
            <body className={`antialiased`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
