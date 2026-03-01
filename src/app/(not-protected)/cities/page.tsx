import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { cities } from '@/data/cities';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Explore Morocco by City',
    description:
        'Discover MedinaMap destinations across Morocco — Agadir, Marrakech, Casablanca, Fès, and more. Find the perfect city for your adventure.',
};

export default function CitiesPage() {
    return (
        <>
            {/* Header */}
            <section className={styles.header}>
                <div className="container">
                    <p className="section-label">Destinations</p>
                    <h1 className="heading-lg">Explore Morocco</h1>
                    <div className="divider divider-left" />
                    <p className={styles.headerDesc}>
                        From surf-ready Atlantic coasts to ancient imperial cities — discover Morocco&apos;s finest destinations.
                    </p>
                </div>
            </section>

            {/* Cities grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {cities.map((city) => (
                            <div key={city.city_id} className={`${styles.card} ${!city.is_active ? styles.cardDisabled : ''}`}>
                                <div className={styles.cardImage}>
                                    <Image
                                        src={city.image_url || '/placeholder.jpg'}
                                        alt={city.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={styles.cardImg}
                                    />
                                    <div className={styles.cardOverlay} />
                                    {city.is_active ? (
                                        <div className={`badge badge-blue ${styles.cardBadge}`}>
                                            {city.packagesCount ?? 0} packages
                                        </div>
                                    ) : (
                                        <div className={`badge ${styles.cardBadge} ${styles.cardBadgeSoon}`}>
                                            Coming Soon
                                        </div>
                                    )}
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.cardMeta}>
                                        <div className={styles.cardLocation}>
                                            <MapPin size={13} />
                                            {city.region || 'Morocco'}
                                        </div>
                                        <div className={styles.cardRating}>
                                            <Star size={13} fill="#f59e0b" color="#f59e0b" />
                                            {city.rating || 5.0}
                                        </div>
                                    </div>
                                    <h2 className={styles.cardName}>{city.name}</h2>
                                    <p className={styles.cardTagline}>{city.tagline}</p>
                                    <div className={styles.cardHighlights}>
                                        {(city.highlights || []).slice(0, 3).map((h, i) => (
                                            <span key={i} className={styles.cardHighlight}>{h}</span>
                                        ))}
                                    </div>
                                    {city.is_active ? (
                                        <Link href={`/cities/${city.slug}`} className={`btn btn-primary ${styles.cardBtn}`}>
                                            Explore {city.name}
                                            <ArrowRight size={16} />
                                        </Link>
                                    ) : (
                                        <button disabled className={`btn ${styles.cardBtnDisabled}`}>
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
