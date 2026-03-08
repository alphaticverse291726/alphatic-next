import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TABS = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'security', label: 'Security Policy' },
  { id: 'sla', label: 'SLA & Uptime' },
  { id: 'dpa', label: 'Data Processing' },
];

const CONTENT = {
  privacy: { title: 'Privacy Policy', sections: [
    { h: 'Data We Collect', body: 'We collect information you provide directly — name, email, clinic details — and usage data when you interact with our platform.' },
    { h: 'How We Use Your Data', body: 'We use your data to operate and improve Alphatic, communicate with you about your account, and provide customer support.' },
    { h: 'Data Storage & Security', body: 'All data is stored on servers in India by default. Data is encrypted at rest (AES-256) and in transit (TLS 1.3). We conduct regular security audits.' },
    { h: 'Your Rights', body: 'You may access, correct, or delete your data at any time. You may export a complete copy of your data in standard formats. We do not sell your data.' },
    { h: 'Contact', body: 'For privacy enquiries: privacy@alphaticlabs.com' },
  ]},
  security: { title: 'Security Policy', sections: [
    { h: 'Infrastructure Security', body: 'Alphatic runs on ISO 27001-certified cloud infrastructure with automated vulnerability scanning, intrusion detection, and 24/7 monitoring.' },
    { h: 'Encryption', body: 'All patient data is encrypted using AES-256 at rest. All data in transit uses TLS 1.3. Encryption keys are rotated quarterly.' },
    { h: 'Access Controls', body: 'Strict role-based access control at page and module level. All access is logged. Privileged access requires multi-factor authentication.' },
    { h: 'Incident Response', body: 'We have a documented incident response plan. In the event of a data breach, we will notify affected customers within 72 hours.' },
  ]},
  sla: { title: 'SLA & Uptime', sections: [
    { h: 'Uptime Commitment', body: 'Starter: 99.5% monthly uptime. Growth: 99.7% monthly uptime. Enterprise: 99.9% monthly uptime.' },
    { h: 'Scheduled Maintenance', body: 'Scheduled maintenance is performed during low-usage windows (Sunday 2 AM – 5 AM IST) with 48 hours advance notice.' },
    { h: 'Support Response Times', body: 'Starter: 24–48 hours. Growth: 12 hours. Enterprise: 2–4 hours with phone escalation.' },
    { h: 'Credits', body: 'For downtime exceeding SLA commitments, customers receive service credits proportional to the outage duration.' },
  ]},
  dpa: { title: 'Data Processing Agreement', sections: [
    { h: 'Scope', body: 'This DPA governs how Alphatic Labs processes personal data on behalf of healthcare providers using our platform.' },
    { h: 'Data Processor Obligations', body: 'Alphatic processes personal data only on documented instructions from the controller (you). We will not process data for any other purpose.' },
    { h: 'Sub-processors', body: 'We maintain a list of approved sub-processors for cloud infrastructure, email, and analytics. We will notify you 30 days before adding new sub-processors.' },
    { h: 'Data Retention', body: 'We retain personal data for as long as your account is active. Upon termination, you have 90 days to export your data before deletion.' },
  ]},
};

export default function Policies() {
  const router = useRouter();
  const [tab, setTab] = useState('privacy');
  useEffect(() => { if (router.query.tab) setTab(router.query.tab); }, [router.query.tab]);
  const content = CONTENT[tab] || CONTENT.privacy;
  return (
    <>
      <Head><title>Policies — Alphatic Labs</title></Head>
      <div className="page-enter">
        <section style={{ position: 'relative', padding: '100px 0 48px', overflow: 'hidden', background: 'var(--bg2)' }}>
          <div className="grid-bg" />
          <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label">Legal</div>
            <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 800, marginBottom: 14 }}>Our <span className="grad-text">Policies</span></h1>
            <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 500, lineHeight: 1.7 }}>Full transparency on how we handle your data. Last updated: March 1, 2026.</p>
          </div>
        </section>
        <section className="sec">
          <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id)}
                  style={{ padding: '11px 16px', borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: '1px solid', borderColor: tab === t.id ? 'var(--bdh)' : 'transparent', color: tab === t.id ? 'var(--a1)' : 'var(--tm)', background: tab === t.id ? 'var(--sf)' : 'none', textAlign: 'left', fontFamily: 'var(--ff-body)', transition: 'all .2s' }}>
                  {t.label}
                </button>
              ))}
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--ff-disp)', fontSize: 26, fontWeight: 800, marginBottom: 28 }}>{content.title}</h2>
              {content.sections.map(s => (
                <div key={s.h} style={{ marginBottom: 24 }}>
                  <h3 style={{ fontFamily: 'var(--ff-disp)', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.h}</h3>
                  <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.8 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
