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

            <div className="text-[11px] uppercase tracking-[0.08em] text-[#8d8d86] mb-3">
                03 / Capabilities
            </div>

            <h2 className="text-[clamp(66px,13vw,220px)] leading-[0.74] tracking-[-0.095em] uppercase font-black mb-[60px]">
                What
                <br />
                we do
            </h2>

            <div className="grid md:grid-cols-2 border-t border-white/10">

                {services.map((s, i) => (

                    <div
                        key={i}
                        className={`text-[clamp(28px,4vw,62px)] tracking-[-0.065em] leading-[0.9] py-5 border-b border-white/10 ${
                            i % 2 !== 0 ? "md:text-right text-[#bdbdb6]" : ""
                        }`}
                    >
                        {s}
                    </div>

                ))}

            </div>

        </section>
    );
}