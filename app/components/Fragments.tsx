'use client';

import { useState, useEffect, useCallback } from 'react';
import { urlFor } from '@/sanity/lib/image';

/* ─── Types ──────────────────────────────────────────── */
interface GalleryItem {
    type: 'image' | 'video';
    image?: any;
    videoUrl?: string;
    caption?: string;
}
interface Fragment {
    _id: string;
    title: string;
    client?: string;
    category?: string;
    coverImage?: any;
    gallery?: GalleryItem[];
}

/* A single flattened tile = one gallery item + its parent info */
interface FlatItem extends GalleryItem {
    key: string;
    fragTitle: string;
    fragClient?: string;
    fragCategory?: string;
}

/* ─── Video embed helper ─────────────────────────────── */
function toEmbed(url: string): string {
    if (!url) return '';
    const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&mute=1`;
    const vi = url.match(/vimeo\.com\/(\d+)/);
    if (vi) return `https://player.vimeo.com/video/${vi[1]}?autoplay=1&muted=1`;
    return url;
}

/* video thumbnail helper (poster from youtube/vimeo not trivial → use placeholder) */
function youtubeThumb(url: string): string | null {
    const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/);
    if (yt) return `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`;
    return null;
}

/* ══════════════════════════════════════════════════════
   MODAL — carousel over the FLATTENED filtered list
   (ίδια λειτουργία/εμφάνιση με πριν)
   ══════════════════════════════════════════════════════ */
function Modal({
    items,
    initialIndex,
    onClose,
}: {
    items: FlatItem[];
    initialIndex: number;
    onClose: () => void;
}) {
    const [idx, setIdx] = useState(initialIndex);

    const prev = useCallback(() => setIdx(i => (i - 1 + items.length) % items.length), [items.length]);
    const next = useCallback(() => setIdx(i => (i + 1) % items.length), [items.length]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
    }, [onClose, prev, next]);

    const current  = items[idx];
    const prevItem = items[(idx - 1 + items.length) % items.length];
    const nextItem = items[(idx + 1) % items.length];

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col" style={{ background: 'rgba(0,0,0,0.96)' }} role="dialog" aria-modal="true">
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-5 py-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                    <span className="text-[13px] font-medium text-white">{current?.fragTitle}</span>
                    {current?.fragClient && <span className="text-[11px] ml-3" style={{ color: 'rgba(255,255,255,0.4)' }}>{current.fragClient}</span>}
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{idx + 1} / {items.length}</span>
                    <button onClick={onClose} aria-label="Close" className="w-8 h-8 flex items-center justify-center rounded-full transition" style={{ color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)' }} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')} onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}>
                        <svg width="16" height="16" viewBox="0 0 28 28" fill="none"><path d="M8.31 17.93c-.37.37-.39 1.03.01 1.41.38.39 1.05.37 1.42.01L14 15.09l4.26 4.26c.38.38 1.03.39 1.41-.01.39-.38.38-1.04.01-1.42L15.42 13.66l4.26-4.26c.38-.38.39-1.03.01-1.41-.38-.4-1.04-.39-1.42-.01L14 12.25 9.74 7.99c-.37-.37-1.04-.39-1.42.01-.4.38-.38 1.04-.01 1.41l4.26 4.26-4.26 4.26Z" fill="currentColor"/></svg>
                    </button>
                </div>
            </div>

            {/* MAIN */}
            <div className="flex-1 flex items-center justify-center relative overflow-hidden px-4 py-4 gap-3">
                {items.length > 1 && prevItem?.type === 'image' && prevItem?.image && (
                    <button onClick={prev} aria-label="Previous" className="hidden md:flex flex-shrink-0 w-[80px] items-center justify-center group">
                        <div className="w-[72px] h-[52px] overflow-hidden rounded opacity-30 group-hover:opacity-55 transition"><img src={urlFor(prevItem.image).width(200).url()} className="w-full h-full object-cover" alt="" /></div>
                    </button>
                )}
                {items.length > 1 && !(prevItem?.type === 'image' && prevItem?.image) && <div className="hidden md:block w-[80px] flex-shrink-0" />}

                <div className="flex-1 flex items-center justify-center max-h-full">
                    {current?.type === 'video' && current?.videoUrl ? (
                        <div className="w-full max-w-[900px] aspect-video rounded overflow-hidden">
                            <iframe src={toEmbed(current.videoUrl)} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
                        </div>
                    ) : current?.image ? (
                        <img src={urlFor(current.image).width(1600).url()} alt={current.caption ?? ''} className="max-w-full max-h-[calc(100vh-140px)] object-contain rounded" style={{ userSelect: 'none' }} />
                    ) : null}
                    {current?.caption && <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] px-3 py-1 rounded-full" style={{ color: 'rgba(255,255,255,0.45)', background: 'rgba(0,0,0,0.5)' }}>{current.caption}</p>}
                </div>

                {items.length > 1 && nextItem?.type === 'image' && nextItem?.image && (
                    <button onClick={next} aria-label="Next" className="hidden md:flex flex-shrink-0 w-[80px] items-center justify-center group">
                        <div className="w-[72px] h-[52px] overflow-hidden rounded opacity-30 group-hover:opacity-55 transition"><img src={urlFor(nextItem.image).width(200).url()} className="w-full h-full object-cover" alt="" /></div>
                    </button>
                )}
                {items.length > 1 && !(nextItem?.type === 'image' && nextItem?.image) && <div className="hidden md:block w-[80px] flex-shrink-0" />}
            </div>

            {/* BOTTOM NAV */}
            {items.length > 1 && (
                <div className="flex items-center justify-center gap-4 py-3 flex-shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <button onClick={prev} aria-label="Previous" className="w-8 h-8 flex items-center justify-center rounded-full transition" style={{ color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)' }} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')} onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}>
                        <svg width="16" height="16" viewBox="0 0 28 28" fill="none"><path d="M9.64 14c0-.32.1-.58.36-.83l4.63-4.7c.19-.19.41-.28.68-.28.54 0 .98.46.98 1.01 0 .28-.12.54-.32.74L11.94 14l3.97 4.05c.2.21.32.46.32.74 0 .56-.44 1.01-.98 1.01-.27 0-.5-.1-.68-.28L10 14.83C9.74 14.57 9.64 14.31 9.64 14Z" fill="currentColor"/></svg>
                    </button>
                    <div className="flex gap-[6px] max-w-[40vw] overflow-hidden">
                        {items.map((_, i) => <button key={i} onClick={() => setIdx(i)} aria-label={`Go to ${i + 1}`} className="rounded-full transition-all duration-200 flex-shrink-0" style={{ width: i === idx ? '18px' : '6px', height: '6px', background: i === idx ? 'white' : 'rgba(255,255,255,0.25)' }} />)}
                    </div>
                    <button onClick={next} aria-label="Next" className="w-8 h-8 flex items-center justify-center rounded-full transition" style={{ color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)' }} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')} onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}>
                        <svg width="16" height="16" viewBox="0 0 28 28" fill="none"><path d="M18.25 14c0 .31-.1.57-.36.82l-4.63 4.7c-.18.19-.41.28-.68.28-.54 0-.98-.45-.98-1.01 0-.28.11-.53.32-.74L15.95 14l-3.97-4.05c-.21-.2-.32-.46-.32-.74 0-.55.44-1.01.98-1.01.27 0 .5.1.68.28l4.63 4.7c.25.24.36.5.36.82Z" fill="currentColor"/></svg>
                    </button>
                </div>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════════════════
   FRAGMENTS SECTION
   ══════════════════════════════════════════════════════ */
const CATEGORY_LABELS: Record<string, string> = {
    all:           'All',
    social:        'Social media',
    tvcproduction: 'TVC production',
    digital:       'Digital strategy',
    branding:      'Branding',
    campaign:      'Campaigns',
    ecommerce:     'E-commerce',
    emailMarketing:'Email marketing',
    motion:        'Motion',
    editorial:     'Editorial',
};

const BG_COLORS = ['#aaa59c','#171717','#d4cec3','#7d7d7b','#c9c1b5','#343434'];

const filterBtn = (active: boolean) => ({
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    padding: 0,
    fontSize: '10px',
    letterSpacing: '.045em',
    textTransform: 'uppercase' as const,
    whiteSpace: 'nowrap' as const,
    color:      active ? 'var(--fg)' : 'var(--muted)',
    fontWeight: active ? 800 : 500,
});

export default function Fragments({ fragments = [] }: { fragments?: Fragment[] }) {
    const [catFilter,    setCatFilter]    = useState('all');
    const [clientFilter, setClientFilter] = useState('all');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // filter lists from data
    const cats    = ['all', ...Array.from(new Set(fragments.map(f => f.category).filter(Boolean)))] as string[];
    const clients = ['all', ...Array.from(new Set(fragments.map(f => f.client).filter(Boolean)))] as string[];

    // 1) filter fragments by category + client
    const matchedFragments = fragments.filter(f => {
        const matchCat    = catFilter    === 'all' || f.category === catFilter;
        const matchClient = clientFilter === 'all' || f.client   === clientFilter;
        return matchCat && matchClient;
    });

    // 2) FLATTEN — every gallery item becomes its own tile
    const tiles: FlatItem[] = [];
    for (const frag of matchedFragments) {
        const gallery = frag.gallery ?? [];
        gallery.forEach((item, gi) => {
            tiles.push({
                ...item,
                key: `${frag._id}-${gi}`,
                fragTitle: frag.title,
                fragClient: frag.client,
                fragCategory: frag.category,
            });
        });
    }

    if (!fragments.length) return null;

    const filterActive = catFilter !== 'all' || clientFilter !== 'all';

    return (
        <>
            <section id="fragments" className="px-[var(--pad)] max-w-[var(--max)] mx-auto" style={{ paddingBottom: '150px' }}>

                {/* SECTION HEAD */}
                <div className="section-head grid items-end gap-6 mb-[28px]" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
                    <span className="note">01 / Fragments</span>
                    <h2 className="display" style={{ fontSize: 'clamp(54px,7.4vw,132px)', color: 'var(--fg)', whiteSpace: 'nowrap' }}>Archive</h2>
                    <span className="note note-right" style={{ textAlign: 'right' }}>Campaign pieces, visual notes &amp; motion stills</span>
                </div>

                {/* CATEGORY FILTERS */}
                <div className="filters-wrap flex gap-[26px] items-center overflow-auto no-scrollbar" style={{ padding: '10px 0 0', scrollbarWidth: 'none' }} aria-label="Filter by category">
                    {cats.map(cat => (
                        <button key={cat} onClick={() => setCatFilter(cat)} data-active={catFilter === cat} style={filterBtn(catFilter === cat)}>
                            {CATEGORY_LABELS[cat] ?? cat}
                        </button>
                    ))}
                </div>

                {/* CLIENT FILTERS */}
                {clients.length > 2 && (
                    <div className="filters-wrap flex gap-[26px] items-center overflow-auto no-scrollbar" style={{ padding: '8px 0 14px', borderBottom: '1px solid var(--line)', scrollbarWidth: 'none' }} aria-label="Filter by client">
                        {clients.map(cl => (
                            <button key={cl} onClick={() => setClientFilter(cl)} data-active={clientFilter === cl} style={filterBtn(clientFilter === cl)}>
                                {cl === 'all' ? 'All brands' : cl}
                            </button>
                        ))}
                    </div>
                )}

                {/* RESULT COUNT */}
                {filterActive && (
                    <p style={{ fontSize: '10px', color: 'var(--muted)', padding: '10px 0 14px', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                        {tiles.length} item{tiles.length !== 1 ? 's' : ''}
                        {catFilter !== 'all' && ` · ${CATEGORY_LABELS[catFilter] ?? catFilter}`}
                        {clientFilter !== 'all' && ` · ${clientFilter}`}
                        <button onClick={() => { setCatFilter('all'); setClientFilter('all'); }} style={{ marginLeft: '14px', color: 'var(--fg)', cursor: 'pointer', background: 'none', border: 0, fontSize: '10px', letterSpacing: '.04em', textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                            Clear
                        </button>
                    </p>
                )}

                {/* ── GRID OF INDIVIDUAL GALLERY ITEMS ── */}
                <div className="archive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gap: '8px', marginTop: '14px' }}>
                    {tiles.map((tile, i) => {
                        const ytThumb = tile.type === 'video' && tile.videoUrl ? youtubeThumb(tile.videoUrl) : null;
                        return (
                            <button
                                key={tile.key}
                                onClick={() => setOpenIndex(i)}
                                aria-label={`Open ${tile.fragTitle}`}
                                className="group"
                                style={{ position: 'relative', aspectRatio: '1.28/1', overflow: 'hidden', background: BG_COLORS[i % BG_COLORS.length], minHeight: '82px', border: 0, cursor: 'pointer' }}
                            >
                                {/* gradient overlay */}
                                <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.35),rgba(0,0,0,.22))', mixBlendMode: 'multiply', zIndex: 1 }} />

                                {/* image */}
                                {tile.type === 'image' && tile.image && (
                                    <img src={urlFor(tile.image).width(320).url()} alt={tile.caption ?? tile.fragTitle} className="transition duration-300 group-hover:scale-105" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                                )}

                                {/* video poster (youtube) or dark bg */}
                                {tile.type === 'video' && ytThumb && (
                                    <img src={ytThumb} alt={tile.fragTitle} className="transition duration-300 group-hover:scale-105" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                                )}

                                {/* play icon for video */}
                                {tile.type === 'video' && (
                                    <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.35)" stroke="white" strokeOpacity=".7" strokeWidth="1.1"/>
                                            <path d="M10 8.5l6 3.5-6 3.5V8.5Z" fill="white"/>
                                        </svg>
                                    </span>
                                )}

                                {/* fragment title on hover */}
                                <span className="group-hover:opacity-100" style={{ position: 'absolute', left: 6, bottom: 6, right: 6, fontSize: '7px', lineHeight: 1.1, textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', letterSpacing: '.04em', opacity: 0, transition: '.2s', zIndex: 3 }}>
                                    {tile.fragTitle}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* empty state */}
                {tiles.length === 0 && (
                    <p style={{ fontSize: '12px', color: 'var(--muted)', padding: '40px 0', textAlign: 'center' }}>
                        No items match this filter combination.
                    </p>
                )}
            </section>

            {/* MODAL — carousel over the whole filtered set */}
            {openIndex !== null && tiles.length > 0 && (
                <Modal items={tiles} initialIndex={openIndex} onClose={() => setOpenIndex(null)} />
            )}
        </>
    );
}
