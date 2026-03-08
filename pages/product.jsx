import Head from 'next/head';
import { useState } from 'react';
import { SPECS, SPEC_KEYS } from '../lib/data';
import styles from '../styles/Product.module.css';

const openTrial = () => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-trial'));

export default function Product() {
  const [curSpec, setCurSpec] = useState('dental');
  const [curMod, setCurMod] = useState(0);
  const spec = SPECS[curSpec];

  return (
    <>
      <Head><title>Product — Alphatic Labs</title></Head>
      <div className="page-enter">

        {/* Header */}
        <section className={styles.header}>
          <div className="grid-bg" />
          <div className="wrap tc" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label"><span className="dot" />Platform</div>
            <h1 style={{ fontSize: 'clamp(28px,4.5vw,50px)', fontWeight: 800, marginBottom: 14 }}>
              The Complete OS for <span className="grad-text">Healthcare</span>
            </h1>
            <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.7 }}>
              One platform. Specialty-specific workflows. Every clinical, operational, and financial function.
            </p>

            {/* Spec Tabs */}
            <div className={styles.specTabs}>
              {SPEC_KEYS.map(key => {
                const s = SPECS[key];
                return (
                  <button
                    key={key}
                    className={`${styles.specTab} ${curSpec === key ? styles.active : ''} ${s.isLive ? styles.live : ''}`}
                    onClick={() => { setCurSpec(key); setCurMod(0); }}
                  >
                    {s.icon} {s.label}
                    <span style={{ fontSize: 10, marginLeft: 4, opacity: .75 }}>
                      {s.isLive ? '✓ Live' : s.status}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Spec Overview */}
        <section className="sec">
          <div className="wrap">
            {spec.isLive ? (
              <>
                <div className={styles.overviewGrid}>
                  <div>
                    <span className={`tag ${styles.liveTag}`} style={{ marginBottom: 14, display: 'inline-block' }}>✓ Live Now</span>
                    <h2 style={{ fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 800, marginBottom: 14, lineHeight: 1.2 }}>
                      The Complete OS for<br /><span className="grad-text">{spec.label} Clinics</span>
                    </h2>
                    <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85, marginBottom: 24 }}>{spec.tagline}</p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <button className="btn btn-p btn-lg" onClick={openTrial}>Start 30-Day Free Trial</button>
                      <button className="btn btn-o btn-lg" onClick={openTrial}>Schedule Walkthrough</button>
                    </div>
                  </div>
                  <div className={styles.featGrid}>
                    {spec.features.map(f => (
                      <div key={f.t} className={styles.featCard}>
                        <div style={{ fontSize: 20, marginBottom: 8 }}>{f.icon}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 5 }}>{f.t}</div>
                        <div style={{ fontSize: 12, color: 'var(--tm)', lineHeight: 1.65 }}>{f.d}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modules */}
                <div style={{ marginTop: 72 }}>
                  <div className="tc" style={{ marginBottom: 40 }}>
                    <div className="label">Everything Included</div>
                    <h2 className="sec-title">{spec.modules.length} Modules. One Unified System.</h2>
                  </div>
                  <div className={styles.modLayout}>
                    {/* Sidebar */}
                    <div className={styles.modSidebar}>
                      {spec.modules.map((m, i) => (
                        <button
                          key={m.title}
                          className={`${styles.modBtn} ${curMod === i ? styles.modActive : ''}`}
                          onClick={() => setCurMod(i)}
                        >
                          <span>{m.icon}</span> {m.title}
                        </button>
                      ))}
                    </div>
                    {/* Detail */}
                    <div className="card-flat" style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <span style={{ fontSize: 28 }}>{spec.modules[curMod].icon}</span>
                        <div>
                          <span className="tag">{spec.modules[curMod].tag}</span>
                          <h3 style={{ fontFamily: 'var(--ff-disp)', fontSize: 20, fontWeight: 800, marginTop: 4 }}>{spec.modules[curMod].title}</h3>
                        </div>
                      </div>
                      <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{spec.modules[curMod].desc}</p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {spec.modules[curMod].feats.map(f => (
                          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--tm)' }}>
                            <span style={{ color: 'var(--a3)', flexShrink: 0 }}>✓</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Coming Soon */
              <div className={styles.comingSoon}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{spec.icon}</div>
                <div className="label" style={{ marginBottom: 12 }}>🚀 {spec.status}</div>
                <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, marginBottom: 14 }}>Alphatic for {spec.label}</h2>
                <p style={{ color: 'var(--tm)', fontSize: 15, lineHeight: 1.75, maxWidth: 520, margin: '0 auto 24px' }}>{spec.tagline}</p>
                <div className={styles.csFeats}>
                  {spec.features.map(f => (
                    <div key={f.t} className={styles.csFeatItem}>
                      <span>{f.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 3 }}>{f.t}</div>
                        <div style={{ fontSize: 12, color: 'var(--tm)', lineHeight: 1.6 }}>{f.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn btn-p btn-lg" onClick={openTrial} style={{ marginTop: 28 }}>
                  Join Waitlist — Get Early Access
                </button>
              </div>
            )}
          </div>
        </section>

      </div>
    </>
  );
}
