import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_LINKS, LEGAL_LINKS } from '../lib/data';
import styles from './Navbar.module.css';

export default function Navbar({ onTrial }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={`wrap ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>α</span>
          <span className={styles.logoText}>Alphatic<span>Labs</span></span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`${styles.link} ${router.pathname === l.href ? styles.active : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
          {/* Legal dropdown */}
          <li className={styles.ddWrap} onMouseLeave={() => setLegalOpen(false)}>
            <button className={styles.link} onMouseEnter={() => setLegalOpen(true)}>
              Legal ▾
            </button>
            {legalOpen && (
              <div className={styles.dropdown}>
                {LEGAL_LINKS.map(l => (
                  <Link key={l.href} href={l.href} className={styles.ddItem} onClick={() => setLegalOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><Link href="/donate" className={`${styles.link} ${router.pathname === '/donate' ? styles.active : ''}`}>Donate</Link></li>
          <li><Link href="/invest" className={`${styles.link} ${router.pathname === '/invest' ? styles.active : ''}`}>Invest</Link></li>
        </ul>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <button className="btn btn-o btn-sm" onClick={onTrial}>Walkthrough</button>
          <button className="btn btn-p btn-sm" onClick={onTrial}>Free Trial</button>
        </div>

        {/* Hamburger */}
        <button className={`${styles.hbg} ${mobileOpen ? styles.open : ''}`} onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className={styles.mobLink} onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/donate" className={styles.mobLink} onClick={() => setMobileOpen(false)}>Donate</Link>
          <Link href="/invest" className={styles.mobLink} onClick={() => setMobileOpen(false)}>Invest</Link>
          {LEGAL_LINKS.map(l => (
            <Link key={l.href} href={l.href} className={styles.mobLink} onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <div className={styles.mobActions}>
            <button className="btn btn-p" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setMobileOpen(false); onTrial(); }}>
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
