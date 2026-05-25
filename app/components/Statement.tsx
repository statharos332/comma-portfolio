export default function Statement() {
    return (
        <section className="min-h-[76vh] flex items-center justify-center text-center py-[115px] px-[clamp(18px,2.4vw,40px)]">
            <div className="max-w-[970px]">
                <div
                    className="text-[clamp(86px,16vw,240px)] leading-[0.75] tracking-[-0.08em] font-black"
                    style={{ color: 'var(--fg-statement)' }}
                >
                    3
                </div>
                <h2
                    className="text-[clamp(24px,4vw,66px)] leading-[0.88] tracking-[-0.065em] uppercase mt-[10px]"
                    style={{ color: 'var(--fg)' }}
                >
                    We combine three essential forces required for modern campaigns.
                </h2>
            </div>
        </section>
    );
}
