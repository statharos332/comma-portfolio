import { urlFor } from "@/sanity/lib/image";

export default function Fragments({ projects }: any) {

    const sizes = [
        "w-[160px] h-[100px]",
        "w-[66px] h-[66px]",
        "w-[138px] h-[66px]",
        "w-[92px] h-[94px]",
        "w-[92px] h-[66px]",
    ];

    return (
        <section
            id="fragments"
            className="pt-[70px] min-h-[92vh] px-[clamp(18px,2.4vw,40px)]"
        >
            <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-5 mb-5">
                <span className="text-[11px]" style={{ color: 'var(--fg-muted)' }}>01 / Fragments</span>
                <h2
                    className="text-[clamp(52px,10.5vw,170px)] leading-[0.8] tracking-[-0.085em] uppercase font-black"
                    style={{ color: 'var(--fg)' }}
                >
                    Archive
                </h2>
                <span className="text-right text-[11px]" style={{ color: 'var(--fg-muted)' }}>
                    Campaign pieces, visuals & motion stills
                </span>
            </div>

            <p className="text-[12px] mb-6 max-w-[460px]" style={{ color: 'var(--fg-muted)' }}>
                A compact wall of campaign stills, social crops, key visuals and motion moments from the agency's work.
            </p>

            <div className="flex flex-wrap gap-[4px] min-h-[520px]">
                {projects.map((p: any, i: number) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden ${sizes[i % sizes.length]}`}
                        style={{ border: '1px solid var(--border)' }}
                    >
                        {p.image && (
                            <img
                                src={urlFor(p.image).width(800).url()}
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />
                        )}
                        {!p.image && (
                            <div className="absolute inset-0" style={{ background: 'var(--bg-media)' }} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <span className="absolute bottom-[6px] left-[6px] text-[7px] uppercase tracking-[0.05em] z-10" style={{ color: 'var(--fg-dim)' }}>
                            {p.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
