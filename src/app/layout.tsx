import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import '@/assets/scss/style.scss';

export const metadata: Metadata = {
    title: 'Lets_kojae_blog',
    description: '포트폴리오와 블로그를 작성하는 사이트.',
    keywords: ['포트폴리오', '리액트', '넥스트', 'portfolio', 'next.js'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" suppressHydrationWarning={true}>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
