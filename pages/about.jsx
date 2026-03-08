import Head from 'next/head';
import { VISION_POINTS, PRINCIPLES, ROADMAP } from '../lib/data';
import styles from '../styles/About.module.css';

const openTrial = () => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-trial'));

export default function About() {
  return (
    <>
      <Head><title>About — Alphatic Labs</title></Head>
      <div className="page-enter">
        <section className={styles.header}>
          <div className="grid-bg" />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label">About Alphatic Labs</div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 800, maxWidth: 700, marginBottom: 18, lineHeight: 1.1 }}>
              We're Building the OS Healthcare<br /><span className="grad-text">Should Have Built Years Ago</span>
            </h1>
            <p style={{ color: 'var(--tm)', fontSize: 17, maxWidth: 500, lineHeight: 1.8 }}>
              Founded by healthcare operators who lived the problem. Now solving it for every clinic in India.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="two-col">
              <div>
                <div className="label">The Founding Story</div>
                <h2 className="sec-title" style={{ fontSize: 'clamp(22px,2.8vw,32px)' }}>How Alphatic Started</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18 }}>
                  <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85 }}>Alphatic was founded by entrepreneurs who built healthcare companies before this. We've worked in clinics. We've managed patient data chaos. We've watched doctors waste hours on paperwork.</p>
                  <div className="card-flat" style={{ padding: '18px 22px', borderLeft: '3px solid var(--a1)' }}>
                    <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 7 }}>Wrong assumption.</p>
                    <p style={{ color: 'var(--tm)', fontSize: 13, lineHeight: 1.75 }}>What clinics need is an <strong style={{ color: 'var(--tx)' }}>operating system</strong>. One that connects clinical workflows to patient data to financial operations to business intelligence. Where every action creates structured data.</p>
                  </div>
                  <p style={{ color: 'var(--a1)', fontWeight: 700, fontSize: 15 }}>We decided to build that.</p>
                </div>
              </div>
              <div>
                <div className="label">Why We Started</div>
                <h3 style={{ fontFamily: 'var(--ff-disp)', fontSize: 19, fontWeight: 800, marginBottom: 18 }}>The Broken State of Healthcare IT</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { icon: '📁', title: 'Patient data in 5 places', desc: 'Appointment, records, billing, imaging, pharmacy — all disconnected.' },
                    { icon: '📝', title: 'Doctors drowning in paperwork', desc: "30–40% of a doctor's day: documenting, not treating." },
                    { icon: '📉', title: 'No real metrics', desc: 'Clinic owners find out how much they made when the accountant tells them.' },
                    { icon: '💬', title: 'Coordination is manual', desc: 'Staff on WhatsApp. Inventory on paper. Supply runs out mid-procedure.' },
                    { icon: '🗂️', title: 'Data is unstructured', desc: "Even when captured, it's in text fields. Not queryable. Not analyzable." },
                  ].map(p => (
                    <div key={p.title} style={{ display: 'flex', gap: 10, fontSize: 13 }}>
                      <span style={{ fontSize: 15, flexShrink: 0 }}>{p.icon}</span>
                      <div><div style={{ fontWeight: 600, marginBottom: 2 }}>{p.title}</div><div style={{ color: 'var(--tm)', lineHeight: 1.6 }}>{p.desc}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec-alt">
          <div className="wrap">
            <div className="tc" style={{ marginBottom: 40 }}>
              <div className="label">Our Vision</div>
              <h2 className="sec-title">Healthcare Providers Should Never Fight With Their Software Again</h2>
            </div>
            <div style={{ maxWidth: 740, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {VISION_POINTS.map((v, i) => (
                <div key={v.title} style={{ display: 'flex', gap: 14 }}>
                  <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 12, fontWeight: 800, color: 'var(--a1)', background: 'var(--glow)', border: '1px solid var(--bdh)', width: 28, height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                  <div><div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{v.title}</div><div style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.7 }}>{v.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="tc" style={{ marginBottom: 40 }}>
              <div className="label">Company Principles</div>
              <h2 className="sec-title">What We Believe</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {PRINCIPLES.map(p => (
                <div key={p.title} className="card">
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{p.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec-alt">
          <div className="wrap tc">
            <div className="label">Roadmap</div>
            <h2 className="sec-title" style={{ maxWidth: 580, margin: '0 auto 14px' }}>Where This Is Heading</h2>
            <p style={{ color: 'var(--tm)', maxWidth: 460, margin: '0 auto 40px', lineHeight: 1.7, fontSize: 14 }}>
              We're not building clinic software. We're building the foundational operating system for healthcare.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, maxWidth: 820, margin: '0 auto' }}>
              {ROADMAP.map(r => (
                <div key={r.phase} className="card" style={{ textAlign: 'left', padding: 18 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--a1)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 7 }}>{r.phase}</div>
                  <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 14, fontWeight: 700, marginBottom: 7 }}>{r.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--tm)', lineHeight: 1.65 }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
