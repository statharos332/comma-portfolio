import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Fragments from "./components/Fragments";
import Cases from "./components/Cases";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Contact from "./components/Contact";

import { client } from "@/sanity/lib/client";

async function getProjects() {
    return client.fetch(`
    *[_type == "project"]{
      title,
      description,
      image
    }
  `);
}

export default async function Home() {
    const projects = await getProjects();

    return (
        <main className="bg-[#050505] text-[#f4f4f0] overflow-x-hidden">
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