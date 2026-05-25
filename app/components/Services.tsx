export default function Services() {
    const services = [
        "Creative direction",
        "Fashion campaigns",
        "Digital commerce",
        "Social content",
        "Motion design",
        "Brand identity",
        "Performance creatives",
        "Marketing strategy",
    ];

    return (
        <section
            id="services"
            className="pt-[90px] pb-[120px] px-[clamp(18px,2.4vw,40px)]"
        >
            <div className="text-[11px] uppercase tracking-[0.08em] mb-3" style={{ color: 'var(--fg-muted)' }}>
                03 / Capabilities
            </div>

            <h2
                className="text-[clamp(66px,13vw,220px)] leading-[0.74] tracking-[-0.095em] uppercase font-black mb-[60px]"
                style={{ color: 'var(--fg)' }}
            >
                What<br />we do
            </h2>

            <div className="grid md:grid-cols-2" style={{ borderTop: '1px solid var(--border)' }}>
                {services.map((s, i) => (
                    <div
                        key={i}
                        className={`text-[clamp(28px,4vw,62px)] tracking-[-0.065em] leading-[0.9] py-5 ${i % 2 !== 0 ? 'md:text-right' : ''}`}
                        style={{
                            borderBottom: '1px solid var(--border)',
                            color: i % 2 !== 0 ? 'var(--fg-subtle)' : 'var(--fg)',
                        }}
                    >
                        {s}
                    </div>
                ))}
            </div>
        </section>
    );
}
