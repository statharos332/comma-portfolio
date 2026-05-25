import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Fragments from "./components/Fragments";
import Cases from "./components/Cases";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Contact from "./components/Contact";

import { getProjects } from "@/lib/getProjects";

export default async function Home() {
    const projects = await getProjects();

    return (
        <main className="overflow-x-hidden" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
            <div className="fixed inset-0 pointer-events-none opacity-[0.07] z-50 noise" />

            <Nav />

            <div className="max-w-[1540px] mx-auto">
                <Hero />
                <Fragments projects={projects} />
                <Cases projects={projects} />
                <Statement />
                <Services />
                <Contact />
            </div>
        </main>
    );
}
