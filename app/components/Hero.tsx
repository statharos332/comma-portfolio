export default function Hero() {
    return (
        <section className="min-h-[88vh] grid grid-rows-[1fr_auto] pt-[70px] px-[clamp(18px,2.4vw,40px)]">

            <div className="grid md:grid-cols-[1.18fr_.82fr] gap-[34px] items-end">

                <div>

                    <div className="text-[11px] uppercase tracking-[0.08em] text-[#8d8d86] mb-[14px]">
                        Advertising & marketing communication services
                    </div>

                    <h1 className="text-[clamp(76px,16vw,260px)] leading-[0.72] tracking-[-0.098em] uppercase font-black">
                        WORK
                        <br />
                        THAT
                        <br />
                        MOVES
                    </h1>

                </div>

                <div className="self-center max-w-[580px]">

                    <div className="text-[11px] uppercase tracking-[0.08em] text-[#8d8d86] mb-[14px]">
                        COMMA portfolio / selected output
                    </div>

                    <p className="text-[clamp(21px,2.5vw,44px)] leading-[0.92] tracking-[-0.064em]">
                        Strategy, imagination, design, marketing and technology for brands that live across screens.
                    </p>

                </div>

            </div>

            <div className="grid md:grid-cols-3 gap-5 border-t border-white/10 py-[18px] text-[12px] text-[#bdbdb6] leading-[1.35]">

                <div>
          <span className="block text-[10px] uppercase tracking-[0.06em] text-[#8d8d86] mb-2">
            Focus
          </span>

                    Fashion ecommerce / retail / lifestyle / digital commerce
                </div>

                <div>
          <span className="block text-[10px] uppercase tracking-[0.06em] text-[#8d8d86] mb-2">
            Output
          </span>

                    Campaigns, social content, brand systems, TVC, performance creatives
                </div>

                <div>
          <span className="block text-[10px] uppercase tracking-[0.06em] text-[#8d8d86] mb-2">
            Scroll
          </span>

                    Selected fragments from projects, pitches and live campaigns ↓
                </div>

            </div>

        </section>
    );
}