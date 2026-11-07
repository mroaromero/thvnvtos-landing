import { Reveal } from "./Reveal";

const CITIES = ["Rancagua", "Concepción", "Buenos Aires, Argentina", "Quirihue"];
const FOTOS = ["01 — archivo 2017", "02 — en vivo", "03 — estudio"];

export function Archivos() {
  return (
    <section id="archivos" className="scroll-mt-[6.5rem] border-b border-line px-6 py-30">
      <div className="mx-auto w-[min(100%-3rem,74rem)]">
        <p className="kicker-line mono-caps flex items-center gap-4">Archivos</p>
        <div className="mt-10 max-w-[46rem]">
          <Reveal>
            <p className="mb-6 text-ash">
              <strong className="font-normal text-bone">Quirihue, 2017.</strong> Un proyecto de una sola
              persona que cruza las tierras del sur; en esas tierras se compone el primer EP. Después, la
              banda: cinco cuerpos habitando una ciudad caótica.
            </p>
          </Reveal>
          <Reveal>
            <blockquote className="my-10 border-l border-[#57534c] py-6 pl-8 text-[clamp(1.3rem,2.4vw,1.9rem)] font-normal italic leading-[1.5]">
              Raíces desbordan / desde las cavernas / suelos trizados / llamas negras, llamas de muerte
              que entonan el fin.
              <cite className="mono-caps mt-4 block text-[0.64rem] not-italic">
                Introspección — Despojo
              </cite>
            </blockquote>
          </Reveal>
          <Reveal>
            <p className="mb-8 text-ash">
              <strong className="font-normal text-bone">En vivo:</strong> cinco formas de respirar heavy
              en la escena. Algunas huellas, otras por venir.
            </p>
            <ul className="flex list-none flex-wrap gap-x-10 gap-y-6">
              {CITIES.map((city) => (
                <li key={city} className="text-[1.05rem]">
                  <span aria-hidden="true" className="mr-3 text-ember">
                    —
                  </span>
                  {city}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-12 grid max-w-[52rem] grid-cols-1 gap-4 sm:grid-cols-3">
            {FOTOS.map((caption) => (
              <figure
                key={caption}
                className="grid aspect-[4/3] place-items-center border border-line bg-linear-to-br from-[#141419] to-[#0c0c0f]"
              >
                <figcaption className="px-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[#57534c]">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}