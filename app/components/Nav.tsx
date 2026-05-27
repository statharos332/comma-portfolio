import ThemeToggle from './ThemeToggle';

export default function Nav() {
    return (
        <header
            className="sticky top-0 z-40 backdrop-blur-xl"
            style={{
                background: 'var(--nav-bg)',
                borderBottom: '1px solid var(--border)',
            }}
        >
            <div className="max-w-[1540px] mx-auto px-[clamp(18px,2.4vw,40px)] h-[38px] grid grid-cols-3 items-center text-[11px]">

                <div className="text-[22px] font-black tracking-[-0.07em] uppercase" style={{ color: 'var(--fg)' }}>
                    COMMA
                </div>

                <nav className="flex gap-7 justify-center" style={{ color: 'var(--fg-muted)' }}>
                    <a href="#fragments" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>Fragments</a>
                    <a href="#work" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>Cases</a>
                    <a href="#services" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>Capabilities</a>
                    <a href="#contact" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>Contact</a>
                </nav>

                <div className="flex items-center justify-end gap-4">
                    <span className="text-[11px]" style={{ color: 'var(--fg-muted)' }}>
                        info@comma-abc.com
                    </span>

                </div>

            </div>

            <div
                className="h-[28px] flex items-center gap-6 px-[clamp(18px,2.4vw,40px)] max-w-[1540px] mx-auto text-[10px] uppercase overflow-hidden whitespace-nowrap"
                style={{ borderTop: '1px solid var(--border)', color: 'var(--fg-dim)' }}
            >
                <span>Social media</span>
                <span>TVC production</span>
                <span>Digital strategy</span>
                <span className="ml-auto">Branding</span>
                <span>Campaigns</span>
                <span>E-commerce</span>
                <ThemeToggle />
            </div>

        </header>
    );
}
