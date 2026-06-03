'use client';

import { urlFor } from '@/sanity/lib/image';

const CASE_BG = ['#c8c2b7','#9b7652','#d9d4ca','#111'];

export default function Cases({ projects }: any) {
    return (
        <section
            id="cases"
            className="px-[var(--pad)] max-w-[var(--max)] mx-auto"
            style={{ paddingBottom: '150px' }}
        >
            {/* HEAD */}
            <div
                className="section-head grid items-end gap-6 mb-[28px]"
                style={{ gridTemplateColumns: '1fr auto 1fr' }}
            >
                <span className="note">02 / Cases</span>
                <h2
                    className="display"
                    style={{ fontSize: 'clamp(54px,7.4vw,132px)', color: 'var(--fg)', whiteSpace: 'nowrap' }}
                >
                    Cases
                </h2>
                <span className="note note-right" style={{ textAlign: 'right' }}>
                    Presentations of selected campaigns
                </span>
            </div>

            {/* GRID */}
            <div className="cases-grid" style={{ display: 'grid', gap: '8px' }}>
                {projects?.map((p: any, i: number) => (
                    <article
                        key={i}
                        className="flex flex-col"
                        style={{ background: 'var(--panel)', minHeight: '280px' }}
                    >
                        {/* MEDIA */}
                        <div
                            style={{
                                aspectRatio: '16/8.1',
                                background: p.image ? 'var(--bg-media)' : CASE_BG[i % CASE_BG.length],
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {p.image && (
                                <img
                                    src={urlFor(p.image).width(1400).url()}
                                    alt={p.title}
                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            )}
                            {/* gradient overlay */}
                            <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(130deg,rgba(255,255,255,.34),rgba(0,0,0,.18))', mixBlendMode: 'multiply' }} />
                        </div>

                        {/* BODY */}
                        <div style={{ padding: '12px 14px 15px' }}>
                            <h3
                                className="display"
                                style={{ fontSize: '18px', letterSpacing: '-.035em', lineHeight: 1.04, textTransform: 'uppercase', marginBottom: '6px', color: 'var(--fg)', fontFamily: 'var(--font-display)' }}
                            >
                                {p.title}
                            </h3>
                            <p style={{ fontSize: '12px', lineHeight: 1.36, color: 'var(--muted)' }}>
                                {p.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
