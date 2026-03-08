import Head from 'next/head';
import { useState } from 'react';

const HELP_CATS = [
  { icon: '🚀', title: 'Getting Started', articles: ['Setting up your clinic profile', 'Inviting your team members', 'Importing existing patient data', 'Configuring your first appointment slots'] },
  { icon: '🎙️', title: 'AI Documentation', articles: ['How AI documentation works', 'Supported languages and accents', 'Training the AI on your templates', 'Reviewing and editing AI-generated notes'] },
  { icon: '💳', title: 'Billing & Finance', articles: ['Setting up your fee schedule', 'Enabling insurance/TPA integrations', 'Managing instalment payment plans', 'Understanding the revenue dashboard'] },
  { icon: '📊', title: 'Analytics & Reports', articles: ['Reading the daily revenue dashboard', 'Generating monthly performance reports', 'Understanding chair utilisation metrics', 'Exporting data for your accountant'] },
  { icon: '👥', title: 'Staff & Permissions', articles: ['Adding and managing staff accounts', 'Setting role-based permissions', 'Configuring commission rules', 'Managing shift schedules'] },
  { icon: '🔒', title: 'Security & Data', articles: ['Data backup and recovery', 'HIPAA compliance overview', 'Exporting your complete data', 'Managing patient consent forms'] },
];

export default function Help() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <Head><title>Help Center — Alphatic Labs</title></Head>
      <div className="page-enter">
        <section style={{ position: 'relative', padding: '100px 0 48px', overflow: 'hidden', background: 'var(--bg2)' }}>
          <div className="grid-bg" />
          <div className="wrap tc" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label"><span className="dot" />Help & Support</div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, marginBottom: 20 }}>How can we <span className="grad-text">help you?</span></h1>
            <input style={{ width: '100%', maxWidth: 460, padding: '13px 20px', borderRadius: 12, background: 'var(--sf)', border: '1px solid var(--bdh)', color: 'var(--tx)', fontSize: 15, outline: 'none', fontFamily: 'var(--ff-body)' }} placeholder="Search for answers, guides, tutorials..." />
          </div>
        </section>
        <section className="sec">
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {HELP_CATS.map((cat, ci) => (
                <div key={cat.title} className="card">
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{cat.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>{cat.title}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {cat.articles.map(a => (
                      <li key={a} style={{ fontSize: 12, color: 'var(--a1)', cursor: 'pointer', lineHeight: 1.5 }}>→ {a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
