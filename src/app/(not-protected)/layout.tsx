import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './../globals.css';

export const metadata: Metadata = {
    title: {
        default: 'MedinaMap — Discover Morocco',
        template: '%s | MedinaMap',
    },
    description:
        'All-inclusive travel packages across Morocco. Surf, yoga, culture, and adventure — we handle everything so you can focus on the experience.',
    keywords: [
        'Morocco travel',
        'surf packages Morocco',
        'Agadir surfing',
        'Morocco vacation',
        'surf lessons Morocco',
        'all-inclusive Morocco',
        'MedinaMap',
    ],
    authors: [{ name: 'MedinaMap' }],
    creator: 'MedinaMap',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://medinamap.com',
        siteName: 'MedinaMap',
        title: 'MedinaMap — Discover Morocco Like Never Before',
        description:
            'Curated travel packages across Morocco. Surf Agadir\'s Atlantic waves, explore ancient medinas, and experience authentic Moroccan culture — all handled for you.',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1590060208523-b4497ffca506?w=1200&q=80',
                width: 1200,
                height: 630,
                alt: 'MedinaMap — Morocco Travel Packages',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MedinaMap — Discover Morocco',
        description: 'All-inclusive surf, yoga, and adventure packages across Morocco.',
        images: ['https://images.unsplash.com/photo-1590060208523-b4497ffca506?w=1200&q=80'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function NotProtectedLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>

    );
}
