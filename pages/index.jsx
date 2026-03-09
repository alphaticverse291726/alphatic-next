import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { CAPABILITIES, WHY_ALPHATIC, BEFORE_AFTER, DAY_TIMELINE, TESTIMONIALS } from '../lib/data';
import styles from '../styles/Home.module.css';

export default function Home() {
  const probRef = useRef(null);
  const timelineRef = useRef(null);

  // Open Tally in a new tab
  const openTrial = () => {
    if (typeof window !== 'undefined') {
      window.open('https://tally.so/r/lbOeYp', '_blank');
    }
  };

  useEffect(() => {
    // ── Animate Problem Cards ──
    const probCards = probRef.current?.querySelectorAll(`.${styles.probItem}`);
    const observerProb = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observerProb.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    probCards?.forEach(card => observerProb.observe(card));

    // ── Animate Timeline Points ──
    const timelinePoints = timelineRef.current?.querySelectorAll(`.${styles.timeItem}`);
    const observerTimeline = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observerTimeline.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    timelinePoints?.forEach(point => observerTimeline.observe(point));

    return () => {
      observerProb.disconnect();
      observerTimeline.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Alphatic Labs — The Operating System for Modern Clinics</title>
      </Head>

      <div className="page-enter">

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className="grid-bg" />

          {/* AUTO BACKGROUND ANIMATION */}
          <div className="heroAutoGlow" />

          <div className={styles.heroGlow} />
          <div className="wrap">
            <div className="label">
              <span className="dot" />Dental is Live · OBGYN & Cardiology Coming Mid-2026
            </div>
            <h1 className={`${styles.heroTitle} ${styles.heroHeading}`}>
              The Operating System<br />
              for Modern Clinics<br />
              and Hospitals
            </h1>
            <p className={styles.heroDesc}>
              One platform. Every clinical, operational, and financial workflow — connected, automated, and intelligent.
            </p>
            <p className={styles.heroDesc}>
              Alphatic Labs is the only clinic management platform in India that combines AI-powered clinical documentation, real-time business intelligence, complete patient lifecycle management, and end-to-end billing in a single integrated system.
Built for dental. Expanding to OBGYN, Cardiology, and 5 more specialties. Live in 50+ clinics today.
            </p>
            <div className={styles.heroBtns}>
              <button className="btn btn-p btn-lg" onClick={openTrial}>
                Start Free Trial — 30 Days, No Card
              </button>
              <button className="btn btn-o btn-lg" onClick={openTrial}>
                Schedule 20-Min Walkthrough
              </button>
            </div>
            <div className={styles.heroProof}>
              <span>✓ No credit card required</span>
              <span className={styles.pdiv} />
              <span>✓ Full access for 30 days</span>
              <span className={styles.pdiv} />
              <span>✓ Onboarding team included</span>
              <span className={styles.pdiv} />
              <span>✓ Data stays in India</span>
            </div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="sec sec-alt">
          <div className="wrap">
            <div className={styles.probGrid}>
              <div>
                <div className="label">The Problem</div>
                <h2 className="sec-title">
                  Healthcare Providers Are Drowning in Disconnected Systems
                </h2>
                <p style={{ color: 'var(--tm)', fontSize: 15, lineHeight: 1.8, marginBottom: 24, maxWidth: 440 }}>
                  The average dental clinic in India operates across paper records, WhatsApp threads, disconnected billing tools, and manual spreadsheets. The result? Revenue leakage, patient attrition, clinical risk, and zero real-time visibility. Alphatic Labs eliminates all of it.
                </p>
                <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--a1)', marginBottom: 24 }}>
                  Alphatic solves this.
                </p>
                <Link href="/product" className="btn btn-o">See how it works →</Link>
              </div>

              <div ref={probRef} className={styles.probPoints}>
                {[
                  { icon: '📁', title: 'Fragmented Patient Data', desc: 'Patient data lives in five places — appointment software, physical records, billing sheets, X-ray files, and the doctor memory. Nobody has a complete picture. Alphatic unifies it all into one structured, searchable, AI-ready profile.' },
                  { icon: '📝', title: 'Doctors Buried in Paperwork', desc: "30–40% of every doctor's day is spent on documentation — writing notes, filling forms, updating records. That time belongs to patients. Alphatic's AI documentation pipeline gives it back." },
                  { icon: '📉', title: 'Revenue Visibility Is Month-End', desc: 'Clinic owners find out how much money they made when their accountant tells them — four weeks later. Alphatic delivers real-time revenue, collections, and profitability data the moment it happens.' },
                  { icon: '💬', title: 'Operations Run on WhatsApp', desc: 'Staff coordination on messaging apps. Inventory tracked on paper. Appointments confirmed by phone. Supplies run out mid-procedure. Alphatic replaces every one of these with structured, automated workflows.' },
                ].map((p, i) => (
                  <div key={p.title} className={styles.probItem} style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className={styles.probIcon}>{p.icon}</span>
                    <div>
                      <div className={styles.probTitle}>{p.title}</div>
                      <div className={styles.probDesc}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section className="sec tc">
          <div className="wrap">
            <div className="label">The Core Difference</div>
            <h2 className="sec-title" style={{ maxWidth: 620, margin: '0 auto 12px' }}>
              Not a Scheduling Tool. Not a Billing System. An Operating System.
            </h2>
            <p style={{ color: 'var(--tm)', maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.75 }}>
              Alphatic Labs connects every function of your clinic — clinical documentation, patient records, scheduling, billing, inventory, staff management, and analytics — into one unified, AI-powered platform. Everything talks to everything. Every action creates structured data. Every data point feeds intelligence back into your decisions.
            </p>
            <div className={styles.capsGrid}>
              {CAPABILITIES.map(c => (
                <div key={c.title} className={styles.capCard} onClick={openTrial}>
                  <span style={{ fontSize: 28 }}>{c.icon}</span>
                  <span className="tag">{c.tag}</span>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{c.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--tm)', lineHeight: 1.65, flex: 1 }}>{c.desc}</div>
                  <div style={{ fontSize: 12, color: 'var(--a1)', fontWeight: 600, marginTop: 4 }}>Learn more →</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="sec sec-alt">
          <div className="wrap">
            <div className={styles.whyGrid}>
              {WHY_ALPHATIC.map((w, i) => (
                <div key={w.title} className={styles.whyCard}>
                  <div className={styles.whyNum}>0{i + 1}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{w.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.7 }}>{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEFORE / AFTER ── */}
        <section className="sec">
          <div className="wrap">
            <div className="card-flat" style={{ overflowX: 'auto' }}>
              <table className={styles.baTable}>
                <thead>
                  <tr><th>Metric</th><th>Before</th><th>After Alphatic</th><th>Impact</th></tr>
                </thead>
                <tbody>
                  {BEFORE_AFTER.map(r => (
                    <tr key={r.metric}>
                      <td>{r.metric}</td>
                      <td className={styles.baBefore}>✗ {r.before}</td>
                      <td className={styles.baAfter}>✓ {r.after}</td>
                      <td className={styles.baImpact}>{r.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── DAY TIMELINE ── */}
        <h2 style={{fontWeight: 2000, textAlign:'center', paddingBottom:18}}>
                  A Day In Alphatic Labs
                </h2>
        
        <div className={styles.roadmapWrap}>

{DAY_TIMELINE.map((d,i)=>(
        
<div key={d.time} className={styles.roadmapItem}>

<div className={styles.roadCircle}>

<div className={styles.pulseCircle}></div>
<div className={`${styles.pulseCircle} ${styles.pulseCircleDelay}`}></div>

<div className={styles.roadIcon}>
⏱
</div>

</div>

<div className={styles.roadContent}>

<div className={styles.roadTime}>
{d.time}
</div>

<div className={styles.roadTitle}>
{d.label}
</div>

<div className={styles.roadDesc}>
{d.text}
</div>

</div>

</div>

))}

</div>

        {/* ── TESTIMONIALS ── */}
        <section className="sec">
          <div className="wrap">
            <h2 style={{fontWeight: 2000, textAlign:'center', paddingBottom:18, paddingTop:20}}>
                  Testimonials
                </h2>
            <div className={styles.testiGrid}>
              {TESTIMONIALS.map(t => (
                <div key={t.name} className={styles.testiCard}>
                  <p className={styles.testiQuote}>"{t.quote}"</p>
                  <div className={styles.testiAuthor}>
                    <div className={styles.testiAv}>{t.init}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--tm)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="sec" style={{ paddingBottom: 100 }}>
          <div className="wrap">
            <div className={styles.ctaBox}>
              <div className={styles.ctaGlow} />
              <div style={{ position: 'relative' }}>
                <div className="label" style={{ marginBottom: 20 }}><span className="dot" />30-Day Free Trial</div>
                <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, marginBottom: 14 }}>
                  Stop Running Clinics on<br /><span className="grad-text">Spreadsheets and WhatsApp</span>
                </h2>
                <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.7 }}>
                  Join 50+ clinics that made the shift to structured, intelligent, real-time clinic operations. Your 30-day free trial includes full platform access and a dedicated onboarding team to get you live in days.
                </p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn btn-p btn-lg" onClick={openTrial}>Start Free Trial</button>
                  <button className="btn btn-o btn-lg" onClick={openTrial}>Schedule a 20-Minute Walkthrough</button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}