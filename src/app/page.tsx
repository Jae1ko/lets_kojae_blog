'use client';

import Header from '@/components/Header';
import Skip from '@/components/Skip';
import Profile from '@/components/Profile';
import Intro from '@/components/Intro';
import Career from '@/components/Career';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import lenis from '@/utils/lenis';
import link from '@/utils/link';

export default function Home() {
    useEffect(() => {
        lenis();
        link();
    }, []);
    return (
        <>
            <Skip />
            <Header />
            <main id="main" role="main">
                <Profile />
                <Intro />
                <Career />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
