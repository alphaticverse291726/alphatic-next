import Head from 'next/head';
import { useState } from 'react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../lib/data'; // BLOG_CATEGORIES = ['All', 'EHR', 'AI', 'EMR', 'CDM', etc.]

export default function Blog() {
  const [expanded, setExpanded] = useState(null);
  const [activeCat, setActiveCat] = useState('All');

  // Filter posts based on category
  const filteredPosts = activeCat === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.cat === activeCat);

  return (
    <>
      <Head><title>Blog — Alphatic Labs</title></Head>
      <div className="page-enter">

        {/* Header */}
        <section style={{ position: 'relative', padding: '100px 0 48px', overflow: 'hidden', background: 'var(--bg2)' }}>
          <div className="grid-bg" />
          <div className="wrap tc" style={{ position: 'relative', zIndex: 1 }}>
            <div className="label"><span className="dot" />Alphatic Journal</div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, marginBottom: 14 }}>
              Healthcare Technology <span className="grad-text">Insights</span>
            </h1>
            <p style={{ color: 'var(--tm)', fontSize: 16, maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
              Deep dives on EHR, EMR, CDM, AI in healthcare, and the future of specialty software in India.
            </p>
          </div>
        </section>

        {/* Category Navbar */}
        <section
          className="sec"
          style={{
            paddingTop: 0,
            paddingBottom: 24,
            borderBottom: '1px solid var(--bd)',
          }}
        >
          <div
            className="wrap"
            style={{
              display: 'flex',
              gap: 30,
              overflowX: 'auto',
              justifyContent: 'center', // center horizontally
              padding: '0 8px', // small padding on sides for scroll
            }}
          >
            {BLOG_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                style={{
                  padding: '8px 26px',
                  borderRadius: 8,
                  border: '1px solid',
                  borderColor: activeCat === cat ? 'var(--a1)' : 'var(--bd)',
                  background: activeCat === cat ? 'var(--sf)' : 'var(--bg2)',
                  color: activeCat === cat ? 'var(--a1)' : 'var(--tm)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all .2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="sec">
          <div className="wrap" style={{ maxWidth: 500 }}>
            {filteredPosts.length === 0 ? (
              <p style={{ color: 'var(--tm)', fontSize: 14 }}>No posts found in this category.</p>
            ) : filteredPosts.map((post, i) => (
              <div key={post.slug} className="card" style={{ marginBottom: 18 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                  <span className="tag">{post.cat}</span>
                  <span style={{ fontSize: 11, color: 'var(--td)' }}>{post.date} · {post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--ff-disp)', fontSize: 20, fontWeight: 800, marginBottom: 10 }}>{post.title}</h2>
                <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{post.excerpt}</p>
                {expanded === i ? (
                  <div>
                    <p style={{ color: 'var(--tm)', fontSize: 14, lineHeight: 1.85, marginBottom: 14, whiteSpace: 'pre-line' }}>{post.content}</p>
                    <button className="btn btn-o btn-sm" onClick={() => setExpanded(null)}>Show less</button>
                  </div>
                ) : (
                  <button className="btn btn-o btn-sm" onClick={() => setExpanded(i)}>Read more →</button>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}