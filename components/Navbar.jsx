import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_LINKS } from '../lib/data';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const router = useRouter();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Open Tally Form in New Tab
  const openTrial = () => {
    if (typeof window !== 'undefined') {
      window.open('https://tally.so/r/lbOeYp', '_blank');
    }
  };

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
              <Link
                href={l.href}
                className={`${styles.link} ${router.pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <button className="btn btn-o btn-sm" onClick={toggleTheme}>
            {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
          </button>

          <button className="btn btn-o btn-sm" onClick={openTrial}>
            Walkthrough
          </button>

          <button className="btn btn-p btn-sm" onClick={openTrial}>
            Free Trial
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hbg} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobLink}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <div className={styles.mobActions}>
            <button
              className="btn btn-p"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                setMobileOpen(false);
                openTrial();
              }}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}