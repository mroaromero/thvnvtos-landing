import { Reveal } from "./Reveal";

const DATES = [
  { when: "2026", place: "«Despojo» en vivo", soon: "Fechas por anunciar" },
  { when: "—", place: "Santiago de Chile", soon: "Por anunciar" },
  { when: "—", place: "Gira", soon: "Por anunciar" },
];

export function Fechas() {
  return (
    <section id="fechas" className="scroll-mt-[6.5rem] border-b border-line px-6 py-30">
      <div className="mx-auto w-[min(100%-3rem,74rem)]">
        <p className="kicker-line mono-caps flex items-center gap-4">Fechas</p>
        <Reveal>
          <div className="mt-10">
            {DATES.map((date) => (
              <div
                key={date.place}
                className="grid grid-cols-1 items-baseline gap-1 border-b border-line py-5 text-[1.05rem] md:grid-cols-[11rem_1fr_auto] md:gap-8"
              >
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ember-soft">
                  {date.when}
                </span>
                <span className="text-ash">{date.place}</span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ash">
                  {date.soon}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}