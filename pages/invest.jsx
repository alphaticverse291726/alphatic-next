import Head from 'next/head';
const openTrial = () => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-trial'));
export default function Invest() {
  const WHY = [
    { icon: '📐', title: 'Massive TAM, Low Penetration', desc: '₹50,000+ crore market with <15% penetration. Enormous whitespace ahead of us.' },
    { icon: '🏗️', title: 'Deep Switching Costs', desc: 'Once a clinic builds 3 years of patient history in Alphatic, migration is near-impossible.' },
    { icon: '🤖', title: 'AI-Native Architecture', desc: 'Core AI documentation no legacy EHR can replicate without rebuilding from scratch.' },
    { icon: '📊', title: 'Data Asset Compounds', desc: 'Structured clinical data from thousands of clinics — extraordinary long-term value.' },
    { icon: '📈', title: 'Proven Unit Economics', desc: '50+ live clinics. Low churn. Growing ACV. Clear path to per-cluster profitability.' },
    { icon: '🌏', title: 'Global Replicability', desc: 'SE Asia, Middle East, Africa — identical dynamics, zero good solutions.' },
  ];
  return (
    <>
      <Head><title>Invest — Alphatic Labs</title></Head>
      <div className="page-enter">
        <section style={{ position: 'relative', padding: '100px 0 60px', overflow: 'hidden', background: 'var(--bg2)' }}>
          <div className="grid-bg" />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label"><span className="dot" />Investor Relations</div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,58px)', fontWeight: 800, maxWidth: 680, marginBottom: 20, lineHeight: 1.08 }}>Invest in the <span className="grad-text">Operating System for Healthcare</span></h1>
            <p style={{ color: 'var(--tm)', fontSize: 17, maxWidth: 540, lineHeight: 1.8 }}>Building vertical SaaS for every major medical specialty in India — starting with dental, expanding to cover the entire country's healthcare infrastructure.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
              <button className="btn btn-p btn-lg" onClick={openTrial}>Request Pitch Deck</button>
              <button className="btn btn-o btn-lg" onClick={openTrial}>Schedule Investor Call</button>
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="wrap two-col">
            <div>
              <div className="label">The Opportunity</div>
              <h2 style={{ fontSize: 'clamp(20px,2.5vw,30px)', fontWeight: 800, marginBottom: 20 }}>India's Healthcare IT Market Is Massively Underserved</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 28 }}>
                {[['₹50,000 Cr+', 'Indian healthcare IT TAM'], ['1.5M+', 'Registered clinics in India'], ['<15%', 'Using modern software'], ['50+', 'Live clinics today']].map(([val, label]) => (
                  <div key={label} className="card-flat" style={{ padding: 18, textAlign: 'center' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 6 }}>{val}</div>
                    <div style={{ fontSize: 12, color: 'var(--tm)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="label">Traction</div>
              <h3 style={{ fontFamily: 'var(--ff-disp)', fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Real Clinics. Real Results.</h3>
              {[['Product Status', 'Live ✓', 'var(--a3)'], ['Documentation Time Saved', '70%', 'var(--a1)'], ['Collection Rate Improvement', '+13%', 'var(--a1)'], ['Pilot NPS Score', '72', 'var(--a1)']].map(([k, v, c]) => (
                <div key={k} className="card-flat" style={{ padding: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: c }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="sec sec-alt">
          <div className="wrap">
            <div className="tc" style={{ marginBottom: 44 }}>
              <div className="label">Why Invest</div>
              <h2 className="sec-title">What You're Getting Into</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: 18 }}>
              {WHY.map(w => (
                <div key={w.title} className="card">
                  <div style={{ fontSize: 26, marginBottom: 12 }}>{w.icon}</div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{w.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.75 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
