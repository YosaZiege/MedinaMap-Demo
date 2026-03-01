import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/data/packages';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'All Packages — Surf, Yoga & Adventure in Morocco',
    description:
        'Browse all MedinaMap travel packages across Morocco. FULL SURF, SURF & YOGA, FREE SURFER, and more — all-inclusive packages with everything handled for you.',
};

const categories = ['All', 'Surf', 'Yoga', 'Relaxation', 'Adventure'];

export default function PackagesPage() {
    return (
        <>
            {/* Header */}
            <section className={styles.header}>
                <div className="container">
                    <div className={styles.headerInner}>
                        <div>
                            <p className="section-label">Our Packages</p>
                            <h1 className="heading-lg">All Experiences</h1>
                            <div className="divider divider-left" />
                            <p className={styles.headerDesc}>
                                Hand-crafted packages across Morocco. Every detail handled — you just show up and enjoy.
                            </p>
                        </div>
                        <div className={styles.headerStats}>
                            <div className={styles.headerStat}>
                                <span className={styles.headerStatNum}>{packages.length}</span>
                                <span className={styles.headerStatLabel}>Packages</span>
                            </div>
                            <div className={styles.headerStat}>
                                <span className={styles.headerStatNum}>4.9</span>
                                <span className={styles.headerStatLabel}>Avg Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter bar */}
            <div className={styles.filterBar}>
                <div className="container">
                    <div className={styles.filterInner}>
                        <div className={styles.filterLabel}>
                            <Filter size={16} />
                            <span>Filter by type:</span>
                        </div>
                        <div className={styles.filterPills}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`${styles.filterPill} ${cat === 'All' ? styles.filterPillActive : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {packages.map((pkg) => (
                            <PackageCard key={pkg.id} pkg={pkg} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <div>
                            <h2 className={styles.ctaTitle}>Can&apos;t decide? We&apos;re here to help.</h2>
                            <p className={styles.ctaDesc}>
                                Tell us your dates, budget, and interests — we&apos;ll find the perfect package for you.
                            </p>
                        </div>
                        <Link href="mailto:hello@medinamap.com" className="btn btn-primary">
                            Get Personalized Advice
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
