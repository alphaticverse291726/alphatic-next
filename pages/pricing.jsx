import Head from 'next/head';
import { useState } from 'react';
import { PLANS, FAQS } from '../lib/data';
import styles from '../styles/Pricing.module.css';

// Open Tally form in a new tab
const openTrial = () => {
  if (typeof window !== 'undefined') {
    window.open('https://tally.so/r/lbOeYp', '_blank');
  }
};

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      <Head><title>Pricing — Alphatic Labs</title></Head>
      <div className="page-enter">

        {/* Header */}
        <section className={styles.header}>
          <div className="grid-bg" />
          <div className="wrap tc" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label"><span className="dot" />Pricing</div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, marginBottom: 14 }}>
              Plans for <span className="grad-text">Every Size</span>
            </h1>
            <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>
              From single-specialty practices to multi-location hospital networks. No hidden fees. No per-seat surprises.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="sec">
          <div className="wrap">
            <div className={styles.plansGrid}>
              {PLANS.map((plan, i) => {
                const isSelected = selectedPlan === i;
                return (
                  <div
                    key={plan.name}
                    className={`${styles.planCard} ${plan.highlight ? styles.highlight : ''} ${isSelected ? styles.selected : ''}`}
                    onClick={() => setSelectedPlan(i)}
                  >
                    {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
                    <div className={styles.planName}>{plan.name}</div>
                    <div className={styles.planPrice}>
                      <span className={styles.amount}>{plan.price}</span>
                      <span style={{ color: 'var(--tm)', fontSize: 14 }}>{plan.per}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--tm)', lineHeight: 1.6 }}>{plan.desc}</p>
                    <div style={{ height: 1, background: 'var(--bd)' }} />
                    <ul className={styles.features}>
                      {plan.features.map(f => (
                        <li key={f}><span style={{ color: 'var(--a3)', fontSize: 11, flexShrink: 0 }}>✓</span>{f}</li>
                      ))}
                    </ul>
                    <button
                      className={`btn ${plan.highlight ? 'btn-p' : 'btn-o'} btn-lg`}
                      style={{ justifyContent: 'center', width: '100%' }}
                      onClick={(e) => { e.stopPropagation(); openTrial(); }}
                    >
                      {plan.price === 'Custom' ? 'Talk to Sales' : 'Start 30-Day Free Trial'}
                    </button>
                  </div>
                );
              })}
            </div>

            <p style={{ textAlign: 'center', color: 'var(--tm)', fontSize: 13, marginTop: 28 }}>
              All plans include a <strong style={{ color: 'var(--tx)' }}>30-day free trial</strong>. No credit card required. Onboarding team included.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec sec-alt">
          <div className="wrap">
            <div className="tc" style={{ marginBottom: 36 }}>
              <div className="label">FAQ</div>
              <h2 className="sec-title">Common Questions</h2>
            </div>
            <div style={{ maxWidth: 680, margin: '0 auto' }}>
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className={styles.faqQ}>
                    {faq.q}
                    <span className={styles.faqIco}>{openFaq === i ? '−' : '+'}</span>
                  </div>
                  {openFaq === i && <div className={styles.faqA}>{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}