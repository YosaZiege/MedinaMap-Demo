"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const navLinks = [
      { label: "Cities", href: "/cities" },
      { label: "Packages", href: "/packages" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
   ];

   return (
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
         <div className={styles.inner}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
               <div className={styles.logoIcon}>
                  <Image src={"logo.svg"} alt="logo" width={60} height={60} />
               </div>
               <span className={styles.logoText}>MedinaMap</span>
            </Link>

            {/* Desktop Nav */}
            <ul className={styles.links}>
               {navLinks.map((link) => (
                  <li key={link.href}>
                     <Link href={link.href} className={styles.link}>
                        {link.label}
                     </Link>
                  </li>
               ))}
            </ul>

            {/* CTA */}
            <div className={styles.actions}>
               <Link
                  href="/packages"
                  className={`btn btn-primary btn-sm ${styles.cta}`}
               >
                  Book Now
               </Link>
               <button
                  className={styles.hamburger}
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle menu"
               >
                  {menuOpen ? <X size={22} /> : <Menu size={22} />}
               </button>
            </div>
         </div>

         {/* Mobile Menu */}
         {menuOpen && (
            <div className={styles.mobileMenu}>
               {navLinks.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     className={styles.mobileLink}
                     onClick={() => setMenuOpen(false)}
                  >
                     {link.label}
                  </Link>
               ))}
               <Link
                  href="/packages"
                  className="btn btn-primary"
                  onClick={() => setMenuOpen(false)}
               >
                  Book Now
               </Link>
            </div>
         )}
      </nav>
   );
}
