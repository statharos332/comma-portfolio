export default function Services() {
    const services = [
        'Creative direction',
        'Fashion campaigns',
        'Digital commerce',
        'Social content',
        'Motion design',
        'Brand identity',
        'Performance creatives',
        'Marketing strategy',
    ];

    return (
        <section
            id="capabilities"
            className="px-[var(--pad)] max-w-[var(--max)] mx-auto"
            style={{ paddingBottom: '150px' }}
        >
            {/* HEAD */}
            <div
                className="section-head grid items-end gap-6 mb-[28px]"
                style={{ gridTemplateColumns: '1fr auto 1fr' }}
            >
                <span className="note">03 / Capabilities</span>
                <h2
                    className="display"
                    style={{ fontSize: 'clamp(54px,7.4vw,132px)', color: 'var(--fg)' }}
                >
                    What<br />We Do
                </h2>
                <span className="note note-right" style={{ textAlign: 'right' }}>
                    Creative, digital and performance services
                </span>
            </div>

            {/* LIST */}
            <div
                className="services-list"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 0,
                    borderTop: '1px solid var(--line)',
                    fontSize: '30px',
                    letterSpacing: '-.025em',
                    lineHeight: 1.08,
                }}
            >
                {services.map((s, i) => (
                    <div
                        key={s}
                        style={{
                            padding: '12px 0',
                            borderBottom: '1px solid var(--line)',
                            textAlign: i % 2 !== 0 ? 'right' : 'left',
                            color: 'var(--fg)',
                        }}
                    >
                        {s}
                    </div>
                ))}
            </div>
        </section>
    );
}
