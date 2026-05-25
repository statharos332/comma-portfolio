export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-[78vh] grid content-between pt-[95px] pb-[30px] px-[clamp(18px,2.4vw,40px)]"
        >
            <div>
                <div className="text-[11px] uppercase tracking-[0.08em] mb-3" style={{ color: 'var(--fg-muted)' }}>
                    04 / Contact
                </div>
                <h2
                    className="text-[clamp(70px,14vw,230px)] leading-[0.72] tracking-[-0.078em] uppercase font-black"
                    style={{ color: 'var(--fg)' }}
                >
                    Let's<br />shake<br />things up.
                </h2>
            </div>

            <div
                className="grid md:grid-cols-3 gap-5 pt-[18px] text-[12px]"
                style={{ borderTop: '1px solid var(--border)', color: 'var(--fg-subtle)' }}
            >
                <div>
                    <span className="block text-[10px] uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
                        Start your project
                    </span>
                    info@comma-abc.com
                </div>
                <div>
                    <span className="block text-[10px] uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
                        Location
                    </span>
                    Athens, Greece
                </div>
                <div>
                    <span className="block text-[10px] uppercase mb-2" style={{ color: 'var(--fg-muted)' }}>
                        Build note
                    </span>
                    Replace every gradient block with real project images or videos.
                </div>
            </div>
        </section>
    );
}
