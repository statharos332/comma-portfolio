export default function Hero() {
    return (
        <section
            className="px-[var(--pad)] max-w-[var(--max)] mx-auto"
            style={{ paddingTop: '86px', paddingBottom: '150px' }}
        >
            {/* GRID */}
            <div
                className="hero-grid grid gap-[60px] items-start mb-[76px]"
                style={{ gridTemplateColumns: '1.34fr .66fr' }}
            >
                <div>
                    <div className="eyebrow mb-[14px]">
                        Selected output / campaign systems / motion / digital commerce
                    </div>
                    <h1
                        className="display"
                        style={{
                            fontSize: 'clamp(54px,7.4vw,132px)',
                            maxWidth: '880px',
                            color: 'var(--fg)',
                        }}
                    >
                        Work<br />That<br />Moves
                    </h1>
                </div>

                <div style={{ maxWidth: '480px', paddingTop: '10px' }}>
                    <div className="eyebrow mb-[14px]">COMMA portfolio / selected work</div>
                    <p
                        style={{
                            fontSize: 'clamp(21px,2.5vw,30px)',
                            lineHeight: .96,
                            letterSpacing: '-.02em',
                            fontWeight: 650,
                            color: 'var(--fg)',
                            maxWidth: '430px',
                        }}
                    >
                        Strategy, imagination, design, marketing and technology for brands that live across screens.
                    </p>
                </div>
            </div>

            {/* META */}
            <div
                className="hero-meta grid gap-[42px] pt-[20px] text-[12px] leading-[1.35]"
                style={{
                    gridTemplateColumns: '1fr 1fr 1fr',
                    borderTop: '1px solid var(--line)',
                    color: 'var(--muted)',
                }}
            >
                <div>
                    <strong className="eyebrow block mb-2">Focus</strong>
                    Fashion / retail / lifestyle / digital commerce
                </div>
                <div>
                    <strong className="eyebrow block mb-2">Output</strong>
                    Campaigns, social content, brand systems, TVC, performance creatives.
                </div>
                <div>
                    <strong className="eyebrow block mb-2">Selected</strong>
                    Fragments from campaigns, pitches and live communication.
                </div>
            </div>
        </section>
    );
}
