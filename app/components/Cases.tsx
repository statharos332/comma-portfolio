'use client';

import { urlFor } from "@/sanity/lib/image";

export default function Cases({ projects }: any) {
    return (
        <section
            id="work"
            className="pt-[96px] pb-[96px] min-h-screen px-[clamp(18px,2.4vw,40px)]"
        >
            {/* HEADER */}
            <div className="grid grid-cols-[minmax(180px,1fr)_auto_minmax(180px,1fr)] items-end gap-[28px] mb-[34px]">
                <span className="text-[11px]" style={{ color: 'var(--fg-dim)' }}>02 / Cases</span>
                <h2
                    className="text-[clamp(52px,10.5vw,170px)] leading-[0.8] tracking-[-0.085em] uppercase font-black"
                    style={{ color: 'var(--fg)' }}
                >
                    Cases
                </h2>
                <span className="text-[11px] text-right" style={{ color: 'var(--fg-dim)' }}>
                    Presentations of selected campaigns
                </span>
            </div>

            {/* GRID */}
            <div
                className="grid md:grid-cols-2 gap-[4px] pt-[18px]"
                style={{ borderTop: '1px solid var(--border)' }}
            >
                {projects?.map((p: any, i: number) => (
                    <article
                        key={i}
                        className="group transition-transform hover:translate-y-[-3px]"
                        style={{ background: 'var(--bg-card)' }}
                    >
                        {/* MEDIA */}
                        <div className="aspect-video overflow-hidden relative" style={{ background: 'var(--bg-media)' }}>
                            {p.image && (
                                <img
                                    src={urlFor(p.image).width(1400).url()}
                                    alt={p.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.025]"
                                />
                            )}
                        </div>

                        {/* BODY */}
                        <div className="p-[15px_16px_18px]">
                            <h3 className="text-[18px] tracking-[-0.035em] mb-[4px]" style={{ color: 'var(--fg)' }}>
                                {p.title}
                            </h3>

                            <p className="text-[12px] leading-[1.35] mb-[12px] max-w-[560px]" style={{ color: 'var(--fg-dim)' }}>
                                {p.description}
                            </p>

                            {/* TAGS */}
                            <div className="flex gap-[8px] flex-wrap mb-[10px]">
                                {p.category && (
                                    <span className="text-[9px] uppercase" style={{ color: 'var(--fg-dim)' }}>
                                        {p.category}
                                    </span>
                                )}
                            </div>

                            {/* CTA */}
                            <a
                                href={`/cases/${p.slug?.current}`}
                                className="cases-cta text-[11px] uppercase tracking-[0.04em] pb-[4px] transition inline-block"
                            >
                                View case
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-[42px]">
                <a
                    href="/cases"
                    className="cases-cta text-[11px] uppercase tracking-[0.045em] underline underline-offset-[5px] transition"
                >
                    All cases →
                </a>
            </div>
        </section>
    );
}
