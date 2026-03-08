import { useEffect, useState } from 'react';
import styles from './TrialModal.module.css';

export default function TrialModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', clinic: '', specialty: '' });

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <div className={styles.header}>
          <div className={styles.icon}>α</div>
          <h2>Start Your Free Trial</h2>
          <p>30 days. No credit card. Full access.<br />Our team will reach out within 24 hours.</p>
        </div>
        <div className={styles.form}>
          <input
            type="text" placeholder="Your name"
            value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          />
          <input
            type="email" placeholder="Work email"
            value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          />
          <input
            type="text" placeholder="Clinic / hospital name"
            value={form.clinic} onChange={e => setForm(f => ({ ...f, clinic: e.target.value }))}
          />
          <select value={form.specialty} onChange={e => setForm(f => ({ ...f, specialty: e.target.value }))}>
            <option value="">Select specialty</option>
            <option>Dental</option>
            <option>OBGYN</option>
            <option>Cardiology</option>
            <option>Nephrology</option>
            <option>Orthopedics</option>
            <option>Dermatology</option>
            <option>General Practice</option>
            <option>Other</option>
          </select>
          <button className="btn btn-p btn-lg" style={{ justifyContent: 'center', width: '100%' }} onClick={onClose}>
            Start Free Trial →
          </button>
        </div>
        <p className={styles.note}>No credit card · Full access · Cancel anytime</p>
      </div>
    </div>
  );
}
