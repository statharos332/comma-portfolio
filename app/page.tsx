import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Fragments from "./components/Fragments";
import Cases from "./components/Cases";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { getProjects } from "@/lib/getProjects";
import { getFragments } from "@/lib/getFragments";

export default async function Home() {
    const [projects, fragments] = await Promise.all([
        getProjects(),
        getFragments(),
    ]);

    return (
        <main style={{ background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
            <Nav />
            <Hero />
            <Fragments fragments={fragments} />
            <Cases projects={projects} />
            <Statement />
            <Services />
            <Contact />
            <Footer />
        </main>
    );
}
