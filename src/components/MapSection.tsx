'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, MapPin } from 'lucide-react';
import { cities } from '@/data/cities';
import { City } from '@/types';
import styles from './MapSection.module.css';

// Approximate percentage coordinates for Morocco map
const cityPositions: Record<string, { top: string; left: string }> = {
    'agadir': { top: '65%', left: '32%' },
    'taghazout': { top: '63%', left: '30%' },
    'marrakech': { top: '58%', left: '42%' },
    'casablanca': { top: '40%', left: '50%' },
    'rabat': { top: '35%', left: '55%' },
    'fes': { top: '38%', left: '65%' },
    'tanger': { top: '15%', left: '60%' },
    'essaouira': { top: '58%', left: '30%' },
};

export default function MapSection() {
    const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

    return (
        <section className={styles.section} id="explore">
            <div className={styles.inner}>
                {/* Left Panel */}
                <div className={styles.panel}>
                    <p className="section-label">Explore</p>
                    <h2 className="heading-lg">Explore by Region</h2>
                    <p className={styles.subtitle}>
                        Click any city to discover packages and destinations
                    </p>

                    <div className={styles.cityList}>
                        {cities.map((city) => (
                            <button
                                key={city.city_id}
                                className={`${styles.cityBtn} ${selectedCity.city_id === city.city_id ? styles.active : ''} ${!city.is_active ? styles.comingSoon : ''}`}
                                onClick={() => city.is_active && setSelectedCity(city)}
                                disabled={!city.is_active}
                            >
                                <div className={styles.cityBtnLeft}>
                                    <div className={styles.cityBtnIcon}>
                                        {city.is_active ? '🏖️' : '🏛️'}
                                    </div>
                                    <div>
                                        <span className={styles.cityBtnName}>{city.name}</span>
                                        {!city.is_active && (
                                            <span className={styles.comingSoonLabel}>Coming soon</span>
                                        )}
                                    </div>
                                </div>
                                <ArrowRight size={16} className={styles.cityBtnArrow} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Map Display */}
                <div className={styles.mapWrap}>
                    <div className={styles.mapContainer}>
                        {/* Static Morocco SVG Background */}
                        <div className={styles.moroccoSvg}>
                            <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                                <path
                                    d="M312 47C312 47 302 38 290 40C278 42 270 54 260 56C250 58 238 52 230 54C222 56 215 65 210 70C205 75 198 85 192 92C186 99 178 108 174 115C170 122 165 130 160 140C155 150 150 162 145 175C140 188 135 202 130 215C125 228 120 242 115 255C110 268 105 282 100 295C95 308 90 322 85 335C80 348 75 362 70 375C65 388 60 402 55 415C50 428 45 442 40 455C35 468 30 482 25 495H375V115C375 115 365 105 355 100C345 95 335 90 325 85C315 80 312 55 312 47Z"
                                    fill="#F1F5F9"
                                    stroke="#E2E8F0"
                                    strokeWidth="2"
                                />
                                {/* Detail paths could be added here for a better map */}
                            </svg>

                            {/* City Pins */}
                            {cities.map((city) => {
                                const pos = cityPositions[city.slug || ''] || { top: '50%', left: '50%' };
                                const isActive = selectedCity.city_id === city.city_id;

                                return (
                                    <div
                                        key={city.city_id}
                                        className={`${styles.marker} ${isActive ? styles.markerActive : ''} ${!city.is_active ? styles.markerDisabled : ''}`}
                                        style={{ top: pos.top, left: pos.left }}
                                        onClick={() => city.is_active && setSelectedCity(city)}
                                    >
                                        <div className={styles.markerDot}>
                                            <div className={styles.markerInner} />
                                        </div>
                                        <span className={styles.markerLabel}>{city.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* City info card */}
                    {selectedCity && (
                        <div className={styles.popup}>
                            <div className={styles.popupImage}>
                                <Image
                                    src={selectedCity.image_url || '/placeholder.jpg'}
                                    alt={selectedCity.name}
                                    fill
                                    className={styles.popupImg}
                                />
                            </div>
                            <div className={styles.popupBody}>
                                <h3 className={styles.popupName}>{selectedCity.name}</h3>
                                <p className={styles.popupTagline}>{selectedCity.tagline}</p>
                                <div className={styles.popupMeta}>
                                    <div className={styles.popupRating}>
                                        <Star size={14} fill="#f59e0b" color="#f59e0b" />
                                        <span>{selectedCity.rating}</span>
                                    </div>
                                    <span className={styles.popupCount}>
                                        {selectedCity.packagesCount} packages available
                                    </span>
                                </div>
                                {selectedCity.is_active ? (
                                    <Link href={`/cities/${selectedCity.slug}`} className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                                        View Packages
                                    </Link>
                                ) : (
                                    <div className={`badge badge-success`} style={{ width: '100%', justifyContent: 'center', background: 'rgba(16,185,129,0.1)' }}>
                                        Coming Soon
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
