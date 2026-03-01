import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Package } from '@/types';
import styles from './PackageCard.module.css';

interface Props {
    pkg: Package;
    variant?: 'default' | 'featured' | 'compact';
}

export default function PackageCard({ pkg, variant = 'default' }: Props) {
    const shortInclusions = pkg.inclusions.slice(0, 4);

    return (
        <Link href={`/packages/${pkg.slug}`} className={`${styles.card} ${styles[variant]}`}>
            {/* Image */}
            <div className={styles.imageWrap}>
                <Image
                    src={pkg.cardImage}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                />
                {/* Overlays */}
                <div className={styles.imageOverlay} />
                {pkg.badge && (
                    <div className={styles.badge}>{pkg.badge}</div>
                )}
                <div className={styles.priceBadge}>
                    <span className={styles.priceLabel}>From</span>
                    <span className={styles.price}>€{pkg.price}</span>
                </div>
                <div className={styles.duration}>
                    <Clock size={12} />
                    {pkg.duration}
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.category}>
                    <MapPin size={12} />
                    {pkg.cityName}
                </div>
                <h3 className={styles.name}>{pkg.name}</h3>
                <p className={styles.tagline}>{pkg.tagline}</p>

                {/* Inclusions */}
                {variant !== 'compact' && (
                    <ul className={styles.inclusions}>
                        {shortInclusions.map((inc, i) => (
                            <li key={i} className={styles.inclusion}>
                                <CheckCircle size={13} />
                                <span>{inc}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Meta info */}
                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <Users size={14} />
                        <span>{pkg.groupSize}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Star size={14} />
                        <span>{pkg.difficulty}</span>
                    </div>
                </div>

                {/* CTA */}
                <div className={styles.cta}>
                    <span>View Package</span>
                    <ArrowRight size={16} />
                </div>
            </div>
        </Link>
    );
}
