export default function Statement() {
    return (
        <section
            className="px-[var(--pad)] max-w-[var(--max)] mx-auto text-center"
            style={{ paddingBottom: '150px' }}
        >
            <div style={{ maxWidth: '880px', margin: '0 auto' }}>
                <div style={{ fontSize: '30px', lineHeight: 1.02, letterSpacing: '-.04em', fontWeight: 650, marginBottom: '8px', color: 'var(--fg)' }}>
                    3
                </div>
                <h2 style={{ fontSize: '30px', lineHeight: 1.02, letterSpacing: '-.04em', fontWeight: 650, maxWidth: '620px', margin: '0 auto 58px', color: 'var(--fg)' }}>
                    We combine three essential forces required for modern campaigns.
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '36px', textAlign: 'center' }}>
                    {[
                        { title: 'Brand Strategy', desc: 'To know what needs to be done.' },
                        { title: 'Creative',       desc: 'To know how to do it.' },
                        { title: 'Performance',    desc: 'To ensure results are real.' },
                    ].map(({ title, desc }) => (
                        <div key={title}>
                            <h4 style={{ fontFamily: 'Inter,sans-serif', fontSize: '14px', lineHeight: 1.2, letterSpacing: '-.01em', fontWeight: 800, marginBottom: '8px', color: 'var(--fg)' }}>
                                {title}
                            </h4>
                            <p style={{ fontSize: '12px', lineHeight: 1.35, color: 'var(--muted)' }}>
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
