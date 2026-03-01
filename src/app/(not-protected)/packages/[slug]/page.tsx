import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
    Clock,
    Users,
    MapPin,
    Star,
    ArrowLeft,
    CheckCircle,
    Phone,
    ChevronRight,
} from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import { getPackageBySlug, packages } from '@/data/packages';
import styles from './page.module.css';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);
    if (!pkg) return {};
    return {
        title: `${pkg.name} ${pkg.cityName} — From €${pkg.price}`,
        description: pkg.overview.slice(0, 160),
        openGraph: {
            title: `${pkg.name} | MedinaMap`,
            description: pkg.overview.slice(0, 160),
            images: [{ url: pkg.heroImage, width: 1600, height: 900, alt: pkg.name }],
        },
    };
}

export default async function PackageDetailPage({ params }: Props) {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);
    if (!pkg) notFound();

    // other packages from same city, excluding this one
    const otherPackages = packages.filter(
        (p) => p.citySlug === pkg.citySlug && p.id !== pkg.id
    ).slice(0, 3);

    return (
        <>
            {/* ===== HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src={pkg.heroImage}
                        alt={pkg.name}
                        fill
                        priority
                        className={styles.heroBgImg}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay} />
                </div>

                {/* Back button */}
                <Link href={`/cities/${pkg.citySlug}`} className={styles.backBtn}>
                    <ArrowLeft size={18} />
                </Link>

                {/* Price card — overlapping */}
                <div className={styles.priceCard}>
                    <div className={styles.priceCardLabel}>Starting from</div>
                    <div className={styles.priceCardValue}>€{pkg.price}</div>
                    <Link href="mailto:hello@medinamap.com" className="btn btn-primary" id="book-now-hero">
                        Book Now
                    </Link>
                </div>

                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.durationBadge}>
                        <Clock size={13} />
                        {pkg.duration}
                    </div>
                    <h1 className={styles.heroTitle}>{pkg.name}</h1>
                    <p className={styles.heroTagline}>{pkg.tagline}</p>
                </div>
            </section>

            {/* ===== MAIN CONTENT ===== */}
            <section className={styles.main}>
                <div className="container">
                    <div className={styles.mainGrid}>
                        {/* Left content */}
                        <div className={styles.content}>
                            {/* Overview */}
                            <div className={styles.contentBlock}>
                                <h2 className={styles.contentTitle}>Overview</h2>
                                <p className={styles.overviewText}>{pkg.overview}</p>
                            </div>

                            {/* What's Included */}
                            <div className={styles.contentBlock}>
                                <h2 className={styles.contentTitle}>What&apos;s Included</h2>
                                <ul className={styles.inclusionsList}>
                                    {pkg.inclusions.map((inc, i) => (
                                        <li key={i} className={styles.inclusion}>
                                            <CheckCircle size={18} className={styles.inclusionIcon} />
                                            <span>{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Itinerary */}
                            <div className={styles.contentBlock}>
                                <h2 className={styles.contentTitle}>Itinerary</h2>
                                <div className={styles.itinerary}>
                                    {pkg.itinerary.map((day, i) => (
                                        <div key={i} className={styles.itineraryItem}>
                                            <div className={styles.itineraryNumber}>
                                                {day.day}
                                            </div>
                                            <div className={styles.itineraryContent}>
                                                <h3 className={styles.itineraryTitle}>Day {day.day}: {day.title}</h3>
                                                <p className={styles.itineraryDesc}>{day.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Important Info */}
                            <div className={`${styles.contentBlock} ${styles.infoBlock}`}>
                                <h2 className={styles.contentTitle}>Important Information</h2>
                                <ul className={styles.infoList}>
                                    {pkg.importantInfo.map((info, i) => (
                                        <li key={i} className={styles.infoItem}>
                                            <div className={styles.infoDot} />
                                            <span>{info}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <aside className={styles.sidebar}>
                            {/* Quick Facts */}
                            <div className={styles.sideCard}>
                                <h3 className={styles.sideCardTitle}>Quick Facts</h3>
                                <div className={styles.quickFacts}>
                                    <div className={styles.factItem}>
                                        <div className={styles.factIcon}><Clock size={17} /></div>
                                        <div>
                                            <div className={styles.factLabel}>Duration</div>
                                            <div className={styles.factValue}>{pkg.duration}</div>
                                        </div>
                                    </div>
                                    <div className={styles.factItem}>
                                        <div className={styles.factIcon}><Users size={17} /></div>
                                        <div>
                                            <div className={styles.factLabel}>Group Size</div>
                                            <div className={styles.factValue}>{pkg.groupSize}</div>
                                        </div>
                                    </div>
                                    <div className={styles.factItem}>
                                        <div className={styles.factIcon}><MapPin size={17} /></div>
                                        <div>
                                            <div className={styles.factLabel}>Location</div>
                                            <div className={styles.factValue}>{pkg.cityName}</div>
                                        </div>
                                    </div>
                                    <div className={styles.factItem}>
                                        <div className={styles.factIcon}><Star size={17} /></div>
                                        <div>
                                            <div className={styles.factLabel}>Difficulty</div>
                                            <div className={styles.factValue}>{pkg.difficulty}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Card */}
                            <div className={`${styles.sideCard} ${styles.bookCard}`}>
                                <div className={styles.bookFrom}>Starting from</div>
                                <div className={styles.bookPrice}>€{pkg.price}</div>
                                <div className={styles.bookDuration}>{pkg.duration}</div>
                                <Link href="mailto:hello@medinamap.com" className={`btn btn-primary ${styles.bookBtn}`} id="book-now-sidebar">
                                    Book This Package
                                </Link>
                                <p className={styles.bookNote}>Free cancellation up to 7 days before departure</p>
                            </div>

                            {/* Need Help */}
                            <div className={styles.sideCard}>
                                <h3 className={styles.sideCardTitle}>Need Help?</h3>
                                <p className={styles.helpText}>
                                    Our travel experts are here to help you plan your perfect adventure.
                                </p>
                                <Link href="mailto:hello@medinamap.com" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
                                    <Phone size={15} />
                                    Contact Us
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ===== MORE PACKAGES ===== */}
            {otherPackages.length > 0 && (
                <section className={`section ${styles.moreSection}`}>
                    <div className="container">
                        <div className={styles.moreSectionHeader}>
                            <div>
                                <p className="section-label">More Options</p>
                                <h2 className="heading-md">Browse Other Packages</h2>
                                <p className={styles.moreDesc}>Discover more amazing adventures in {pkg.cityName}</p>
                            </div>
                            <Link href="/packages" className={styles.viewAll}>
                                View All <ChevronRight size={16} />
                            </Link>
                        </div>

                        <div className={styles.moreGrid}>
                            {otherPackages.map((p) => (
                                <PackageCard key={p.id} pkg={p} variant="compact" />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
