import Head from 'next/head';
import { useState } from 'react';
import { CONTACT_TABS, PARTNER_TYPES, TRUST_SIGNALS } from '../lib/data';

const openTrial = () => typeof window !== 'undefined' && window.dispatchEvent(new Event('open-trial'));

export default function Contact() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Head><title>Contact — Alphatic Labs</title></Head>
      <div className="page-enter">
        <section style={{ position: 'relative', padding: '100px 0 48px', overflow: 'hidden', background: 'var(--bg2)' }}>
          <div className="grid-bg" />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label">Get in Touch</div>
            <h1 style={{ fontSize: 'clamp(26px,4.5vw,54px)', fontWeight: 800, marginBottom: 14 }}>
              Let's Work <span className="grad-text">Together</span>
            </h1>
            <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 480, lineHeight: 1.75 }}>
              Whether you're a clinic, partner, investor, or journalist — we want to talk.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 32 }}>
              {CONTACT_TABS.map((t, i) => (
                <button key={t.id} onClick={() => setTab(i)}
                  style={{ padding: '9px 18px', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: `1px solid ${tab === i ? 'transparent' : 'var(--bd)'}`, color: tab === i ? '#fff' : 'var(--tm)', background: tab === i ? 'var(--grad)' : 'var(--sf)', fontFamily: 'var(--ff-body)', transition: 'all .2s' }}>
                  {t.label}
                </button>
              ))}
            </div>

            {tab === 0 && (
              <div>
                <h2 style={{ fontFamily: 'var(--ff-disp)', fontSize: 24, fontWeight: 800, marginBottom: 14 }}>Start Your Free 30-Day Trial</h2>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                  <button className="btn btn-p btn-lg" onClick={openTrial}>Start Free Trial</button>
                  <button className="btn btn-o btn-lg" onClick={openTrial}>Schedule a 20-Minute Walkthrough</button>
                </div>
                <div className="card-flat" style={{ maxWidth: 440, padding: '20px 24px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--a1)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 12 }}>What Happens Next</p>
                  {['You sign up (2 minutes)', 'Our team reaches out within 24 hours', 'We set up your clinic & import existing data (2–3 days)', 'Staff gets trained (we handle this)', "You're live within 1–2 weeks"].map((s, i) => (
                    <div key={i} style={{ fontSize: 13, color: 'var(--tm)', display: 'flex', gap: 10, marginBottom: 8 }}>
                      <span style={{ color: 'var(--a1)', fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>{s}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === 1 && (
              <div>
                <h2 style={{ fontFamily: 'var(--ff-disp)', fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Partnership Opportunities</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 24 }}>
                  {PARTNER_TYPES.map(p => (
                    <div key={p.title} className="card">
                      <div style={{ fontSize: 24, marginBottom: 12 }}>{p.icon}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{p.title}</div>
                      <p style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                      <button className="btn btn-o btn-sm" onClick={openTrial}>{p.cta}</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === 2 && (
              <div>
                <h2 style={{ fontFamily: 'var(--ff-disp)', fontSize: 24, fontWeight: 800, marginBottom: 14 }}>Interested in Alphatic?</h2>
                <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85, marginBottom: 28, maxWidth: 540 }}>
                  Growing rapidly. Expanding specialty coverage. Building the data layer for the next generation of healthcare intelligence.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                  <button className="btn btn-p btn-lg" onClick={openTrial}>Send Us Your Interest</button>
                  <button className="btn btn-o btn-lg" onClick={openTrial}>Request Pitch Deck</button>
                </div>
                <div className="card-flat" style={{ maxWidth: 300, padding: '18px 20px' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--tm)', marginBottom: 6 }}>Investor Relations</p>
                  <p style={{ color: 'var(--a1)', fontSize: 14, fontWeight: 600 }}>investors@alphaticlabs.com</p>
                </div>
              </div>
            )}

            {tab === 3 && (
              <div>
                <h2 style={{ fontFamily: 'var(--ff-disp)', fontSize: 24, fontWeight: 800, marginBottom: 14 }}>Press & Media Inquiries</h2>
                <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85, marginBottom: 20, maxWidth: 500 }}>
                  Writing about healthcare technology, India's healthcare infrastructure, or clinical AI? We're happy to talk.
                </p>
                <div className="card-flat" style={{ maxWidth: 300, padding: '18px 20px' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--tm)', marginBottom: 6 }}>Press Contact</p>
                  <p style={{ color: 'var(--a1)', fontSize: 14, fontWeight: 600 }}>press@alphaticlabs.com</p>
                </div>
              </div>
            )}

            {tab === 4 && (
              <div>
                <h2 style={{ fontFamily: 'var(--ff-disp)', fontSize: 24, fontWeight: 800, marginBottom: 14 }}>Customer Support</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 560, marginBottom: 24 }}>
                  <div className="card-flat" style={{ padding: 20 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--tm)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 7 }}>Email</p>
                    <p style={{ color: 'var(--a1)', fontSize: 13 }}>support@alphaticlabs.com</p>
                  </div>
                  <div className="card-flat" style={{ padding: 20 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--tm)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 7 }}>Phone</p>
                    <p style={{ color: 'var(--tx)', fontSize: 13 }}>+91-XXX-XXX-XXXX</p>
                    <p style={{ fontSize: 11, color: 'var(--td)', marginTop: 4 }}>Growth & Enterprise</p>
                  </div>
                </div>
                {[['Starter Plan', '24–48 hours'], ['Growth Plan', '12 hours'], ['Enterprise Plan', '2–4 hours + phone']].map(([plan, time]) => (
                  <div key={plan} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--bd)', fontSize: 13 }}>
                    <span style={{ color: 'var(--tm)' }}>{plan}</span>
                    <span style={{ color: 'var(--a1)', fontWeight: 600 }}>{time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="sec sec-alt">
          <div className="wrap">
            <div className="tc" style={{ marginBottom: 36 }}>
              <div className="label">Trust & Compliance</div>
              <h2 className="sec-title">You Can Trust Alphatic</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {TRUST_SIGNALS.map(t => (
                <div key={t.title} className="card" style={{ padding: 20, textAlign: 'center' }}>
                  <div style={{ fontSize: 24, marginBottom: 9 }}>{t.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{t.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--tm)' }}>{t.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
