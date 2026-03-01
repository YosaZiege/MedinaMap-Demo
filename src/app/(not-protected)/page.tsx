import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Waves, CheckCircle, Star, ArrowRight, Phone, Globe, Shield } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import MapSection from '@/components/MapSection';
import { getFeaturedPackages } from '@/data/packages';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'MedinaMap — Discover Morocco Like Never Before',
    description:
        'All-inclusive surf, yoga, and adventure packages across Morocco. Pick your city, choose your experience — we handle everything.',
};

const stats = [
    { value: '5+', label: 'Cities' },
    { value: '12+', label: 'Packages' },
    { value: '500+', label: 'Happy Travelers' },
    { value: '4.9★', label: 'Average Rating' },
];

const steps = [
    {
        number: '01',
        icon: <MapPin size={28} />,
        title: 'Pick Your City',
        description:
            'Browse our curated destinations across Morocco — from surf-ready Agadir to cultural Fès. Each city hand-picked for unforgettable experiences.',
    },
    {
        number: '02',
        icon: <Waves size={28} />,
        title: 'Choose Your Package',
        description:
            'Whether you want surf lessons, yoga retreats, cultural tours, or just a comfy base — we have the perfect package for your style and budget.',
    },
    {
        number: '03',
        icon: <CheckCircle size={28} />,
        title: 'We Handle Everything',
        description:
            'Transport, accommodation, meals, activities — all booked and confirmed for you. Just pack your bags and enjoy the ride.',
    },
];

const testimonials = [
    {
        name: 'Sofia M.',
        location: 'Barcelona, Spain',
        rating: 5,
        text: 'The Full Surf package in Agadir was beyond my expectations. The instructors were brilliant and the waves were incredible. MedinaMap handled everything perfectly!',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
    {
        name: 'Lucas D.',
        location: 'Paris, France',
        rating: 5,
        text: 'First time surfing and I was standing up by day 2! The Surf & Yoga combo was the perfect balance. Already planning my return trip.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    },
    {
        name: 'Emma R.',
        location: 'London, UK',
        rating: 5,
        text: 'As a solo traveler I was nervous, but the group was amazing and MedinaMap made me feel completely safe and supported throughout. 10/10 would recommend!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    },
];

const features = [
    {
        icon: <Shield size={22} />,
        title: 'Fully Managed',
        desc: 'Every aspect of your trip is planned and booked for you',
    },
    {
        icon: <Globe size={22} />,
        title: 'Local Expertise',
        desc: 'Our team lives and breathes Morocco — we know the best spots',
    },
    {
        icon: <Star size={22} />,
        title: 'Top Rated',
        desc: '4.9 stars across 500+ verified traveler reviews',
    },
    {
        icon: <Phone size={22} />,
        title: '24/7 Support',
        desc: 'We\'re always available before, during, and after your trip',
    },
];

export default function HomePage() {
    const featuredPackages = getFeaturedPackages();

    return (
        <>
            {/* ===== HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=85"
                        alt="Surfing in Agadir Morocco"
                        fill
                        priority
                        className={styles.heroBgImg}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroBadge}>
                        <MapPin size={14} />
                        <span>Morocco</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Discover <span className={styles.heroAccent}>Morocco</span>
                        <br />Like Never Before
                    </h1>
                    <p className={styles.heroSubtitle}>
                        All-inclusive surf, yoga &amp; adventure packages curated for you.
                        Pick your city, choose your experience — we handle everything.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/cities/agadir" className="btn btn-primary btn-lg">
                            Explore Agadir
                            <ArrowRight size={18} />
                        </Link>
                        <Link href="/packages" className="btn btn-ghost btn-lg">
                            All Packages
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollDot} />
                </div>
            </section>

            {/* ===== STATS STRIP ===== */}
            <section className={styles.stats}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        {stats.map((stat) => (
                            <div key={stat.label} className={styles.statItem}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section className="section">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className="section-label">Simple Process</p>
                        <h2 className="heading-lg">How MedinaMap Works</h2>
                        <div className="divider" />
                        <p className={`${styles.sectionDesc} text-muted`}>
                            Three simple steps to your perfect Moroccan adventure
                        </p>
                    </div>

                    <div className={styles.stepsGrid}>
                        {steps.map((step, i) => (
                            <div key={i} className={styles.step}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                                {i < steps.length - 1 && (
                                    <div className={styles.stepArrow}>→</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURED PACKAGES ===== */}
            <section className={`section ${styles.packagesSection}`}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className="section-label">Top Picks</p>
                        <h2 className="heading-lg">Featured Packages</h2>
                        <div className="divider" />
                        <p className={`${styles.sectionDesc} text-muted`}>
                            Our most loved experiences in Agadir — hand-crafted for surf lovers
                        </p>
                    </div>

                    <div className={styles.packagesGrid}>
                        {featuredPackages.map((pkg) => (
                            <PackageCard key={pkg.id} pkg={pkg} variant="featured" />
                        ))}
                    </div>

                    <div className={styles.packagesFooter}>
                        <Link href="/packages" className="btn btn-secondary">
                            View All Packages
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== MAP SECTION ===== */}
            <MapSection />

            {/* ===== WHY MEDINAMAP ===== */}
            <section className={`section ${styles.featuresSection}`}>
                <div className="container">
                    <div className={styles.featuresInner}>
                        <div className={styles.featuresLeft}>
                            <p className="section-label">Why Us</p>
                            <h2 className="heading-lg">Everything Handled.<br />Just Enjoy Morocco.</h2>
                            <div className="divider divider-left" />
                            <p className={`${styles.featuresDesc} text-muted`}>
                                We know how overwhelming travel planning can be. That&apos;s why MedinaMap
                                takes care of every single detail — from airport pickups to surf lessons —
                                so you can arrive, relax, and create memories.
                            </p>
                            <Link href="/packages" className="btn btn-primary" style={{ marginTop: 24 }}>
                                Find Your Package
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className={styles.featuresRight}>
                            <div className={styles.featureGrid}>
                                {features.map((f, i) => (
                                    <div key={i} className={styles.featureCard}>
                                        <div className={styles.featureIcon}>{f.icon}</div>
                                        <h4 className={styles.featureTitle}>{f.title}</h4>
                                        <p className={styles.featureDesc}>{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className={`section ${styles.testimonialsSection}`}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className="section-label">Reviews</p>
                        <h2 className="heading-lg">What Travelers Say</h2>
                        <div className="divider" />
                    </div>

                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((t, i) => (
                            <div key={i} className={styles.testimonial}>
                                <div className={styles.testimonialStars}>
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />
                                    ))}
                                </div>
                                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                                <div className={styles.testimonialAuthor}>
                                    <div className={styles.testimonialAvatar}>
                                        <Image src={t.avatar} alt={t.name} fill className={styles.avatarImg} />
                                    </div>
                                    <div>
                                        <div className={styles.testimonialName}>{t.name}</div>
                                        <div className={styles.testimonialLocation}>{t.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA BANNER ===== */}
            <section className={styles.ctaBanner}>
                <div className={styles.ctaBannerBg}>
                    <Image
                        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80"
                        alt="Surfing Morocco"
                        fill
                        className={styles.ctaBannerImg}
                    />
                    <div className={styles.ctaBannerOverlay} />
                </div>
                <div className={`container ${styles.ctaBannerContent}`}>
                    <h2 className={styles.ctaTitle}>Ready to Surf Morocco?</h2>
                    <p className={styles.ctaSubtitle}>
                        Join hundreds of travelers who discovered Morocco with MedinaMap.
                        Your perfect trip is just one click away.
                    </p>
                    <div className={styles.ctaActions}>
                        <Link href="/cities/agadir" className="btn btn-primary btn-lg">
                            Start in Agadir
                            <ArrowRight size={18} />
                        </Link>
                        <Link href="/packages" className="btn btn-ghost btn-lg">
                            Browse All Packages
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
