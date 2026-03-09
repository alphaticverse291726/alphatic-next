import Head from 'next/head';
import { VISION_POINTS, PRINCIPLES, ROADMAP, FOUNDERS, VISION_TIMELINE } from '../lib/data';
import styles from '../styles/About.module.css';

const openTrial = () => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-trial'));

export default function About() {
  const WHY_POINTS = [
    { icon: '📁', title: 'Patient data in 5 places', desc: 'Appointment, records, billing, imaging, pharmacy — all disconnected.' },
    { icon: '📝', title: 'Doctors drowning in paperwork', desc: "30–40% of a doctor's day: documenting, not treating." },
    { icon: '📉', title: 'No real metrics', desc: 'Clinic owners find out how much they made when the accountant tells them.' },
    { icon: '💬', title: 'Coordination is manual', desc: 'Staff on WhatsApp. Inventory on paper. Supply runs out mid-procedure.' },
    { icon: '🗂️', title: 'Data is unstructured', desc: "Even when captured, it's in text fields. Not queryable. Not analyzable." },
  ];

  return (
    <>
      <Head><title>About — Alphatic Labs</title></Head>
      <div className="page-enter">

        {/* Header */}
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

        {/* Founding Story */}
        <section className="sec">
          <div className="wrap">
            <div className="two-col">
              <div>
                <div className="label">The Founding Story</div>
                <h2 className="sec-title" style={{ fontSize: 'clamp(22px,2.8vw,32px)' }}>How Alphatic Started</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18 }}>
                  <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85 }}>
                    Alphatic was founded by entrepreneurs who built healthcare companies before this. We've worked in clinics. We've managed patient data chaos. We've watched doctors waste hours on paperwork.
                  </p>
                  <div className="card-flat" style={{ padding: '18px 22px', borderLeft: '3px solid var(--a1)' }}>
                    <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 7 }}>Wrong assumption.</p>
                    <p style={{ color: 'var(--tm)', fontSize: 13, lineHeight: 1.75 }}>
                      What clinics need is an <strong style={{ color: 'var(--tx)' }}>operating system</strong>. One that connects clinical workflows to patient data to financial operations to business intelligence. Where every action creates structured data.
                    </p>
                  </div>
                  <p style={{ color: 'var(--a1)', fontWeight: 700, fontSize: 15 }}>We decided to build that.</p>
                </div>
              </div>

              {/* Why We Started as Cards */}
              <div>
                <div className="label">Why We Started</div>
                <h3 style={{ fontFamily: 'var(--ff-disp)', fontSize: 19, fontWeight: 800, marginBottom: 18 }}>The Broken State of Healthcare IT</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
                  {WHY_POINTS.map(p => (
                    <div key={p.title} className={`${styles.card} ${styles.hoverCard}`} style={{
                      padding: 18,
                      borderRadius: 12,
                      background: 'var(--sf)',
                      cursor: 'pointer',
                      transition: 'all .3s',
                      border: '1px solid var(--bd)'
                    }}>
                      <div style={{ fontSize: 20, marginBottom: 8 }}>{p.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{p.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.6 }}>{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="sec">
          <div className="wrap tc">
            <div className="label">Founding Team</div>
            <h2 className="sec-title">Meet the Visionaries Behind Alphatic</h2>
            <p style={{ color: 'var(--tm)', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.7, fontSize: 14 }}>
              Our founders combined healthcare expertise with product experience to build a clinic OS from the ground up.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
              {FOUNDERS.map(f => (
                <div key={f.name} className="card-flat" style={{ padding: 18, textAlign: 'center' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{f.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--tm)', marginBottom: 8 }}>{f.designation}</div>
                  <p style={{ fontSize: 12, color: 'var(--a3)', fontStyle: 'italic', lineHeight: 1.5 }}>"{f.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Roadmap */}
        <section className="sec sec-alt">
          <div className="wrap tc">
            <div className="label">Our Vision Roadmap</div>
            <h2 className="sec-title" style={{ maxWidth: 580, margin: '0 auto 14px' }}>From Inception to Future Plans</h2>
            <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', padding: '40px 0' }}>
              <div style={{
                position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)',
                width: 4, height: '100%', background: 'var(--bd)'
              }} />
              {VISION_TIMELINE.map((t, i) => (
                <div key={t.year} style={{
                  display: 'flex',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: 48,
                  position: 'relative',
                  width: '100%'
                }}>
                  <div style={{
                    background: 'var(--sf)', padding: 16, borderRadius: 12, width: '45%',
                    textAlign: i % 2 === 0 ? 'left' : 'right', position: 'relative'
                  }}>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{t.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.6 }}>{t.desc}</div>
                  </div>
                  <div style={{
                    position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 16,
                    width: 16, height: 16, background: 'var(--a1)', borderRadius: '50%', border: '3px solid var(--sf)'
                  }} />
                  <div style={{
                    position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: -16, fontSize: 12, fontWeight: 700, color: 'var(--a1)'
                  }}>{t.year}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Principles */}
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

        {/* Roadmap */}
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