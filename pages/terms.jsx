import Head from 'next/head';
export default function Terms() {
  const sections = [
    { h: 'Acceptance of Terms', body: 'By accessing or using Alphatic Labs ("Service"), you agree to be bound by these Terms of Service.' },
    { h: 'Use of Service', body: 'You may use the Service only for lawful purposes and in accordance with these Terms. You are responsible for all data you enter into the platform.' },
    { h: 'Data Ownership', body: 'You retain full ownership of all patient data, clinical records, and business data you input into Alphatic. We do not claim ownership of your data.' },
    { h: 'Subscription & Billing', body: 'Subscription fees are billed monthly. You may cancel at any time. No refunds are provided for partial months.' },
    { h: 'Termination', body: 'You may terminate your account at any time. Upon termination, you have 90 days to export your data. After 90 days, data is deleted.' },
    { h: 'Limitation of Liability', body: 'Alphatic Labs shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.' },
    { h: 'Governing Law', body: 'These Terms are governed by the laws of India. Disputes shall be resolved in the courts of Bangalore, Karnataka.' },
    { h: 'Contact', body: 'For legal enquiries: legal@alphaticlabs.com' },
  ];
  return (
    <>
      <Head><title>Terms of Service — Alphatic Labs</title></Head>
      <div className="page-enter">
        <section style={{ position: 'relative', padding: '100px 0 48px', overflow: 'hidden', background: 'var(--bg2)' }}>
          <div className="grid-bg" />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label">Legal</div>
            <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 800, marginBottom: 14 }}>Terms of <span className="grad-text">Service</span></h1>
            <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 500, lineHeight: 1.7 }}>Last updated: March 1, 2026. Contact: legal@alphaticlabs.com</p>
          </div>
        </section>
        <section className="sec">
          <div className="wrap" style={{ maxWidth: 760 }}>
            {sections.map(s => (
              <div key={s.h} style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: 'var(--ff-disp)', fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.h}</h2>
                <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
