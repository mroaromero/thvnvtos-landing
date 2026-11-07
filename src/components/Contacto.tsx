import { Reveal } from "./Reveal";

const LINES = [
  { k: "Bandcamp", v: "thvnvtosproject.bandcamp.com" },
  { k: "Instagram", v: "@thvnvtosprojectofficial" },
  { k: "Facebook", v: "Thvnvtos" },
  { k: "Booking", v: "— a definir" },
];

export function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-[6.5rem] px-6 py-30">
      <div className="mx-auto w-[min(100%-3rem,74rem)]">
        <p className="kicker-line mono-caps flex items-center gap-4">Contacto</p>
        <h2 className="mb-10 mt-10 text-[clamp(2rem,4.6vw,3.4rem)] font-normal leading-[1.12] tracking-[0.02em]">
          Escribinos, aparecemos.
        </h2>
        <div>
          {LINES.map((line) => (
            <Reveal key={line.k}>
              <div className="flex items-baseline gap-8 border-b border-line py-3.5">
                <span className="mono-caps w-36 shrink-0 text-[0.64rem]">{line.k}</span>
                <span className="text-[1.15rem]">{line.v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}