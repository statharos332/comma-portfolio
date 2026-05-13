export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-[78vh] grid content-between pt-[95px] pb-[30px] px-[clamp(18px,2.4vw,40px)]"
        >

            <div>

                <div className="text-[11px] uppercase tracking-[0.08em] text-[#8d8d86] mb-3">
                    04 / Contact
                </div>

                <h2 className="text-[clamp(70px,14vw,230px)] leading-[0.72] tracking-[-0.098em] uppercase font-black">
                    Let’s
                    <br />
                    shake
                    <br />
                    things up.
                </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-5 border-t border-white/10 pt-[18px] text-[12px] text-[#cfcfc8]">

                <div>
          <span className="block text-[10px] uppercase text-[#8d8d86] mb-2">
            Start your project
          </span>

                    info@comma-abc.com
                </div>

                <div>
          <span className="block text-[10px] uppercase text-[#8d8d86] mb-2">
            Location
          </span>

                    Athens, Greece
                </div>

                <div>
          <span className="block text-[10px] uppercase text-[#8d8d86] mb-2">
            Build note
          </span>

                    Replace every gradient block with real project images or videos.
                </div>

            </div>

        </section>
    );
}