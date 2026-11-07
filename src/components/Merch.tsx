import { Reveal } from "./Reveal";

const ITEMS = [
  { art: "art-vinyl", name: "Despojo — Vinilo" },
  { art: "art-cassette", name: "Despojo — Cassette" },
  { art: "art-tshirt", name: "Remera" },
  { art: "art-poster", name: "Póster" },
];

export function Merch() {
  return (
    <section id="merch" className="scroll-mt-[6.5rem] border-b border-line px-6 py-30">
      <div className="mx-auto w-[min(100%-3rem,74rem)]">
        <p className="kicker-line mono-caps flex items-center gap-4">Merch</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <Reveal key={item.name}>
              <article className="rounded-[3px] border border-line bg-cave p-[1.1rem]">
                <div className={`art ${item.art}`} role="img" aria-label={item.name} />
                <h4 className="mt-4 text-[1.05rem] font-normal tracking-[0.06em]">{item.name}</h4>
                <p className="mono-caps mt-2 text-[0.62rem] tracking-[0.18em]">Precio por definir</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}