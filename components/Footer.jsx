import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ onTrial }) {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.logo}>
              <span className={styles.mark}>α</span>
              <span className={styles.name}>Alphatic<span>Labs</span></span>
            </Link>
            <p className={styles.tagline}>The Operating System of Modern Healthcare.<br />Built for specialists. Deployed to live clinics today.</p>
            <p className={styles.sub}>Built in India. Built for the world.</p>
          </div>

          <div className={styles.col}>
            <h4>Product</h4>
            <ul>
              <li><Link href="/product">Platform Overview</Link></li>
              <li><Link href="/product">For Dental</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/invest">Investors</Link></li>
              <li><Link href="/donate">Donate</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/policies?tab=privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Alphatic Labs. All rights reserved.</p>
          <div className={styles.status}><span className={styles.sdot} />All systems operational</div>
          <p>hello@alphaticlabs.com</p>
        </div>
      </div>
    </footer>
  );
}
