'use client'

import ThemeToggle from './ThemeToggle';

export default function Nav() {
    return (
        <header
            className="sticky top-0 z-40 backdrop-blur-xl"
            style={{ background: 'var(--nav-bg)', borderBottom: '1px solid var(--line)' }}
        >
            {/* TOP BAR */}
            <div
                className="max-w-[var(--max)] mx-auto px-[var(--pad)] h-[32px] grid items-center text-[10px] uppercase tracking-[.03em]"
                style={{ gridTemplateColumns: '1fr auto 1fr', color: 'var(--muted)' }}
            >
                {/* BRAND */}
                <a
                    href="#"
                    className="display text-[14px] tracking-[-0.055em] whitespace-nowrap"
                    style={{ color: 'var(--fg)', fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-.055em', lineHeight: 1 }}
                >
                    COMMA <span style={{ fontFamily: 'inherit', letterSpacing: 'inherit', marginLeft: '7px', fontWeight: 'inherit' }}>ARCHIVES</span>
                </a>

                {/* CENTER LINK */}
                <a
                    href="https://www.comma-abc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-self-center transition-colors hidden md:block"
                    style={{ fontFamily: 'Inter,sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                    VISIT MAIN WEBSITE: <span style={{ color: 'var(--fg)' }}>COMMA-ABC.COM</span>
                </a>

                {/* EMAIL */}
                <a
                    href="mailto:info@comma-abc.com"
                    className="justify-self-end whitespace-nowrap transition-colors"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                    info@comma-abc.com
                </a>
            </div>

            {/* SUB BAR */}
            <div
                className="max-w-[var(--max)] mx-auto px-[var(--pad)] h-[34px] flex items-center no-scrollbar overflow-auto"
                style={{ borderTop: '1px solid var(--line)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '.035em', whiteSpace: 'nowrap' }}
            >
                <nav className="flex gap-[34px] items-center" aria-label="Main menu">
                    {[
                        { href: '#fragments', label: 'Fragments' },
                        { href: '#cases',     label: 'Cases' },
                        { href: '#capabilities', label: 'Capabilities' },
                        { href: '#footer',    label: 'Contact' },
                    ].map(({ href, label }) => (
                        <a
                            key={label}
                            href={href}
                            className="transition-colors"
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
                <div className="ml-auto">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
