import { urlFor } from "@/sanity/lib/image";

export default function Cases({ projects }: any) {
    return (
        <section
            id="work"
            className="pt-[115px] min-h-screen px-[clamp(18px,2.4vw,40px)]"
        >

            <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-5 mb-5">

        <span className="text-[11px] text-[#8d8d86]">
          02 / Cases
        </span>

                <h2 className="text-[clamp(52px,10.5vw,170px)] leading-[0.8] tracking-[-0.085em] uppercase font-black">
                    Cases
                </h2>

                <span className="text-right text-[11px] text-[#8d8d86]">
          Presentations of selected campaigns
        </span>

            </div>

            <div className="grid md:grid-cols-2 gap-[4px] border-t border-white/10 pt-[18px]">

                {projects.map((p: any, i: number) => (

                    <article
                        key={i}
                        className="bg-[#080808] border border-white/10 hover:border-white/20 transition"
                    >

                        <div className="aspect-video overflow-hidden bg-[#141414]">

                            {p.image && (

                                <img
                                    src={urlFor(p.image).width(1400).url()}
                                    className="w-full h-full object-cover hover:scale-[1.03] transition duration-500"
                                />

                            )}

                        </div>

                        <div className="p-4">

                            <h3 className="text-[18px] tracking-[-0.035em] mb-1">
                                {p.title}
                            </h3>

                            <p className="text-[#8d8d86] text-[12px] leading-[1.35] mb-3">
                                {p.description}
                            </p>

                            <div className="flex gap-2 flex-wrap mb-3">

                <span className="text-[9px] border border-white/10 px-2 py-1 uppercase text-white/50">
                  Fashion
                </span>

                                <span className="text-[9px] border border-white/10 px-2 py-1 uppercase text-white/50">
                  Campaign
                </span>

                            </div>

                            <button className="text-[11px] uppercase border-b border-white/30 pb-1">
                                View case
                            </button>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}