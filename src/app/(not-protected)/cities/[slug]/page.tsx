import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowLeft, Star, Clock, Users, Package2 } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import { getCityBySlug, cities } from '@/data/cities';
import { getPackagesByCity } from '@/data/packages';
import styles from './page.module.css';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityBySlug(slug);
    if (!city) return {};
    return {
        title: `${city.name} — Surf & Adventure Packages in Morocco`,
        description: city.description,
        openGraph: {
            title: `${city.name} | MedinaMap`,
            description: city.description,
            images: [{ url: city.image_url || '/placeholder.jpg', width: 1600, height: 900, alt: city.name }],
        },
    };
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const city = getCityBySlug(slug);
    if (!city) notFound();

    const packages = getPackagesByCity(slug);

    return (
        <>
            {/* ===== HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src={city.image_url || '/placeholder.jpg'}
                        alt={city.name}
                        fill
                        priority
                        className={styles.heroBgImg}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={`container ${styles.heroContent}`}>
                    {/* Back link */}
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        Back to Map
                    </Link>

                    {/* Breadcrumb */}
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>›</span>
                        <span>{city.name}</span>
                    </nav>

                    <h1 className={styles.heroTitle}>{city.name}</h1>
                    <p className={styles.heroDesc}>{city.description}</p>

                    <div className={styles.heroBadges}>
                        <div className={styles.heroBadge}>
                            <MapPin size={14} />
                            {(city.packagesCount ?? 0) > 0
                                ? `${city.packagesCount} Packages Available`
                                : 'Coming Soon'}
                        </div>
                        <div className={styles.heroBadge}>
                            <Star size={14} fill="rgba(255,255,255,0.9)" />
                            {city.rating} Rating
                        </div>
                        <div className={styles.heroBadge}>
                            <Clock size={14} />
                            Best: {city.bestSeason || 'Year-round'}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PACKAGES SECTION ===== */}
            {packages.length > 0 ? (
                <section className="section">
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <p className="section-label">Experiences</p>
                            <h2 className="heading-lg">Explore {city.name} Packages</h2>
                            <div className="divider" />
                            <p className={styles.sectionDesc}>
                                Choose from our carefully curated experiences designed to showcase the best of{' '}
                                {city.name}
                            </p>
                        </div>

                        <div className={styles.packagesGrid}>
                            {packages.map((pkg) => (
                                <PackageCard key={pkg.id} pkg={pkg} />
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                <section className="section">
                    <div className="container">
                        <div className={styles.comingSoonBlock}>
                            <Package2 size={56} className={styles.comingSoonIcon} />
                            <h2>Packages Coming Soon</h2>
                            <p>We&apos;re crafting amazing experiences for {city.name}. Check back soon!</p>
                            <Link href="/cities/agadir" className="btn btn-primary">
                                Explore Agadir Instead
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* ===== CITY HIGHLIGHTS ===== */}
            <section className={`section ${styles.highlightsSection}`}>
                <div className="container">
                    <div className={styles.highlightsInner}>
                        {/* Info */}
                        <div className={styles.highlightsLeft}>
                            <p className="section-label">City Guide</p>
                            <h2 className="heading-md">{city.name} at a Glance</h2>
                            <div className="divider divider-left" />

                            <div className={styles.cityMeta}>
                                <div className={styles.cityMetaItem}>
                                    <span className={styles.metaLabel}>Region</span>
                                    <span className={styles.metaValue}>{city.slug === 'agadir' ? 'Souss-Massa' : 'Morocco'}</span>
                                </div>
                                <div className={styles.cityMetaItem}>
                                    <span className={styles.metaLabel}>Best Season</span>
                                    <span className={styles.metaValue}>{city.bestSeason || 'Year-round'}</span>
                                </div>
                                <div className={styles.cityMetaItem}>
                                    <span className={styles.metaLabel}>Climate</span>
                                    <span className={styles.metaValue}>{city.climate || 'Mediterranean'}</span>
                                </div>
                                <div className={styles.cityMetaItem}>
                                    <span className={styles.metaLabel}>Rating</span>
                                    <span className={styles.metaValue}>
                                        <Star size={14} fill="#f59e0b" color="#f59e0b" style={{ display: 'inline', marginRight: 4 }} />
                                        {city.rating} / 5.0
                                    </span>
                                </div>
                            </div>

                            <p className={styles.longDesc}>{city.longDescription}</p>
                        </div>

                        {/* Highlights */}
                        <div className={styles.highlightsRight}>
                            <h3 className={styles.highlightsTitle}>Top Highlights</h3>
                            <ul className={styles.highlightsList}>
                                {(city.highlights || []).map((h, i) => (
                                    <li key={i} className={styles.highlightItem}>
                                        <div className={styles.highlightNumber}>{i + 1}</div>
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>

                            {packages.length > 0 && (
                                <Link href={`/packages/${packages[0].slug}`} className="btn btn-primary" style={{ marginTop: 32 }}>
                                    Book Top Package
                                    <Users size={16} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
