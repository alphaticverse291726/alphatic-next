import Navbar from './Navbar';
import Footer from './Footer';
import TrialModal from './TrialModal';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener('open-trial', handler);
    return () => window.removeEventListener('open-trial', handler);
  }, []);

  return (
    <>
      <Navbar onTrial={() => setModalOpen(true)} />
      <main style={{ paddingTop: 64 }}>{children}</main>
      <Footer onTrial={() => setModalOpen(true)} />
      <TrialModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
