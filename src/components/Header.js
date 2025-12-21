"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          {/* LOGO IMAGE IMPLEMENTATION */}
          <Link href="/" className={styles.logoWrapper} onClick={closeMenu}>
            <Image 
              src="/images/logo1.png" 
              alt="Ingenious Techworks" 
              width={180} // Adjust width based on your actual image aspect ratio
              height={60} // Adjust height based on your actual image aspect ratio
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className={styles.navLinks}>
            <li><Link href="/" className="hover-target">Home</Link></li>
            <li><Link href="/about" className="hover-target">About</Link></li>
            <li><Link href="/services" className="hover-target">Services</Link></li>
            <li><Link href="/portfolio" className="hover-target">Portfolio</Link></li>
            <li><Link href="/blogs" className="hover-target">Blogs</Link></li>
          </ul>

          {/* Desktop CTA with New Theme Color */}
          <Link href="/contact" className={`${styles.contactBtn} hover-target`}>
            Contact Us
          </Link>

          {/* Mobile Hamburger Button */}
          <button 
            className={`${styles.mobileMenuBtn} hover-target`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (60% Height) */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.active : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li><Link href="/blogs" onClick={closeMenu}>Blogs</Link></li>
          <li>
            <Link href="/contact" className={styles.mobileContactBtn} onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}