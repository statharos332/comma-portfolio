'use client'

export default function Footer() {
    return (
        <footer
            id="footer"
            style={{
                background: 'var(--bg)',
                color: 'var(--fg)',
                padding: '38px var(--pad) 46px',
                borderTop: '1px solid var(--line)',
            }}
        >
            <div
                className="footer-cols max-w-[var(--max)] mx-auto"
                style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr 1fr', gap: '76px' }}
            >
                {/* COL 1 */}
                <div>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.045em', fontWeight: 500, marginBottom: '12px' }}>
                        Start your project
                    </span>
                    <a
                        href="mailto:info@comma-abc.com"
                        style={{ color: 'var(--muted)', textDecoration: 'underline', textUnderlineOffset: '5px', textDecorationColor: 'var(--soft)', fontSize: '12px', lineHeight: 1.45 }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                    >
                        info@comma-abc.com
                    </a>
                    <br /><br />
                    <p style={{ fontSize: '12px', lineHeight: 1.45, color: 'var(--muted)' }}>
                        Tell us what you want to achieve, what your brand needs next and where communication can work harder.
                    </p>
                </div>

                {/* COL 2 */}
                <div>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.045em', fontWeight: 500, marginBottom: '12px' }}>
                        Location
                    </span>
                    <p style={{ fontSize: '12px', lineHeight: 1.45, color: 'var(--muted)' }}>
                        Kifisia Av. 308, 15232 Halandri, Athens, Greece<br />
                        Mon–Fri / 9:00–18:00<br />
                        GMT +3
                    </p>
                </div>

                {/* COL 3 */}
                <div>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.045em', fontWeight: 500, marginBottom: '12px' }}>
                        Direct contact
                    </span>
                    <p style={{ fontSize: '12px', lineHeight: 1.45, color: 'var(--muted)' }}>
                        T.: +30.210.6857.512<br />
                        F.: +30.210.6857.516<br />
                        {[
                            { href: 'https://www.comma-abc.com/',                                       label: 'comma-abc.com' },
                            { href: 'https://www.instagram.com/comma_agency/',                          label: 'Instagram' },
                            { href: 'https://www.facebook.com/COMMA.ABC/',                              label: 'Facebook' },
                            { href: 'https://www.linkedin.com/company/comma-agency/posts/?feedView=all',label: 'LinkedIn' },
                        ].map(({ href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'block', color: 'var(--muted)', textDecoration: 'underline', textUnderlineOffset: '5px', textDecorationColor: 'var(--soft)' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                            >
                                {label}
                            </a>
                        ))}
                    </p>
                </div>
            </div>
        </footer>
    );
}
