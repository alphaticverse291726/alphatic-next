import Head from 'next/head';
const openTrial = () => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-trial'));
export default function Donate() {
  return (
    <>
      <Head><title>Donate — Alphatic Labs</title></Head>
      <div className="page-enter">
        <section style={{ position: 'relative', padding: '100px 0 60px', overflow: 'hidden', background: 'var(--bg2)' }}>
          <div className="grid-bg" />
          <div className="wrap tc" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label"><span className="dot" />Support Our Mission</div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 800, marginBottom: 20, lineHeight: 1.1 }}>Help Us Bring Better Healthcare<br /><span className="grad-text">Infrastructure to India</span></h1>
            <p style={{ color: 'var(--tm)', fontSize: 17, maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>Every clinic, from a small town dentist to a multi-specialty hospital, deserves modern software.</p>
          </div>
        </section>
        <section className="sec">
          <div className="wrap two-col">
            <div>
              <div className="label">Why It Matters</div>
              <h2 className="sec-title">The Access Gap in Healthcare Software</h2>
              <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85, marginBottom: 18 }}>Large hospital chains have the budget for enterprise software. Small-town clinics and rural practitioners don't. But they treat 80% of India's patients.</p>
              <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85, marginBottom: 28 }}>Donations help us subsidise access to clinics in underserved regions — where better operational infrastructure directly translates to better patient care.</p>
              <button className="btn btn-p btn-lg" onClick={openTrial}>Make a Donation</button>
            </div>
            <div className="card-flat">
              <div className="label">How Donations Are Used</div>
              {[['🏥', 'Subsidised access for rural clinics', 'Free or reduced-cost Alphatic licences for clinics in Tier 3 and Tier 4 towns.'],
                ['🎓', 'Training programmes', 'Free onboarding and training for government and charitable health facilities.'],
                ['🔬', 'Research partnerships', 'Funding structured clinical data research in partnership with medical colleges.'],
              ].map(([icon, title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                  <div><div style={{ fontWeight: 700, marginBottom: 5 }}>{title}</div><div style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.6 }}>{desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
