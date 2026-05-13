export default function Nav() {
    return (
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">

            <div className="max-w-[1540px] mx-auto px-[clamp(18px,2.4vw,40px)] h-[38px] grid grid-cols-3 items-center text-[11px]">

                <div className="text-[22px] font-black tracking-[-0.07em] uppercase">
                    COMMA
                </div>

                <nav className="flex gap-7 justify-center text-[#8d8d86]">
                    <a href="#fragments">Fragments</a>
                    <a href="#work">Cases</a>
                    <a href="#services">Capabilities</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="text-right text-[#8d8d86]">
                    info@comma-abc.com
                </div>

            </div>

            <div className="border-t border-white/10 h-[28px] flex items-center gap-6 px-[clamp(18px,2.4vw,40px)] max-w-[1540px] mx-auto text-[10px] uppercase text-white/40 overflow-hidden whitespace-nowrap">

                <span>Social media</span>
                <span>TVC production</span>
                <span>Digital strategy</span>

                <span className="ml-auto">Branding</span>
                <span>Campaigns</span>
                <span>E-commerce</span>

            </div>

        </header>
    );
}