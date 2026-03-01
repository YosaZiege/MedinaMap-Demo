import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <Image src="/logo.svg" alt="MedinaMap" width={40} height={40} />
                            </div>
                            <span>MedinaMap</span>
                        </Link>
                        <p className={styles.tagline}>
                            Your gateway to authentic Moroccan adventures. We handle every detail
                            so you can focus on the memories.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.social} aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className={styles.social} aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="mailto:hello@medinamap.com" className={styles.social} aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Explore</h4>
                        <ul className={styles.colLinks}>
                            <li><Link href="/cities">All Cities</Link></li>
                            <li><Link href="/cities/agadir">Agadir</Link></li>
                            <li><Link href="/packages">All Packages</Link></li>
                            <li><Link href="/packages/full-surf-agadir">Full Surf Package</Link></li>
                            <li><Link href="/packages/surf-yoga-agadir">Surf & Yoga</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <ul className={styles.colLinks}>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Contact Us</h4>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <Mail size={16} />
                                <span>hello@medinamap.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={16} />
                                <span>+212 6XX XXX XXX</span>
                            </div>
                            <div className={styles.contactItem}>
                                <MapPin size={16} />
                                <span>Agadir, Morocco</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} MedinaMap. All rights reserved.</p>
                    <p className={styles.madeWith}>Made with ❤️ in Morocco</p>
                </div>
            </div>
        </footer>
    );
}
