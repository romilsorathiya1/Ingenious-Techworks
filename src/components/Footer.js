import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <Link href="/" className={styles.footerLogo}>
              Ingenious <span style={{ color: "var(--primary)" }}>Techworks</span>
            </Link>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "20px" }}>
              Transforming businesses through innovation and technology. We build the future, today.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">App Development</Link></li>
              <li><Link href="/services">Social Media Handling</Link></li>
              <li><Link href="/services">AI & Machine Learning</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:ingenioustechworks@gmail.com">ingenioustechworks@gmail.com</a></li>
              <li><a href="tel:+918866796656">+91 8866796656</a></li>
              <li><a href="tel:+919409595954">+91 9409595954</a></li>
              {/* <li><a href="#">123 Tech Avenue, NY</a></li> */}
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Ingenious Techworks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}