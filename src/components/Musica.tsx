import { Reveal } from "./Reveal";

type Release = {
  cover: string;
  artLabel: string;
  title: string;
  meta: { label: string; newTag?: boolean }[];
  note: string;
};

const RELEASES: Release[] = [
  {
    cover: "cover-despojo",
    artLabel: "Portada de Despojo",
    title: "Despojo",
    meta: [{ label: "Larga duración" }, { label: "2026" }, { label: "Nuevo", newTag: true }],
    note: "Introspección · Heraldo de Muerte · Desposesión · Ningún Lugar …",
  },
  {
    cover: "cover-destrvdo",
    artLabel: "Portada de Destrvdo",
    title: "Destrvdo",
    meta: [{ label: "Álbum" }, { label: "21 dic 2020" }],
    note: "Deforestación · colonialismo · la relación del hombre consigo mismo",
  },
  {
    cover: "cover-noche",
    artLabel: "Portada de Noche y Niebla",
    title: "Noche y Niebla",
    meta: [{ label: "EP" }, { label: "2017" }],
    note: "I · Internado en los bosques — II · Éxodo",
  },
  {
    cover: "cover-lugar",
    artLabel: "Portada de Ningún Lugar",
    title: "Ningún Lugar",
    meta: [{ label: "Single · Video" }, { label: "2022" }],
    note: "Grabado y masterizado por Llancamaiden Studios — videoclip por Voidless Productions",
  },
];

export function Musica() {
  return (
    <section id="musica" className="scroll-mt-[6.5rem] border-b border-line px-6 py-30">
      <div className="mx-auto w-[min(100%-3rem,74rem)]">
        <p className="kicker-line mono-caps flex items-center gap-4">Música</p>
        <h2 className="mt-10 text-[clamp(2rem,4.6vw,3.4rem)] font-normal leading-[1.12] tracking-[0.02em]">
          Sonido que se deshace en tierra y humo.
        </h2>
        {RELEASES.map((release) => (
          <Reveal key={release.title}>
            <article className="grid grid-cols-[5.5rem_1fr] items-center gap-6 border-b border-line py-10 md:grid-cols-[7.5rem_1fr] md:gap-10">
              <div className={`cover ${release.cover}`} role="img" aria-label={release.artLabel} />
              <div>
                <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-normal tracking-[0.04em]">
                  {release.title}
                </h3>
                <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.24em]">
                  {release.meta.map((m) => (
                    <span key={m.label} className={m.newTag ? "text-ember-soft" : "text-ash"}>
                      {m.label}
                    </span>
                  ))}
                </p>
                <p className="mt-4 font-mono text-[0.68rem] uppercase leading-8 tracking-[0.24em] text-ash">
                  {release.note}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal>
          <p className="mono-caps mt-10">
            Adelanto «Heraldo de Muerte» disponible — thvnvtosproject.bandcamp.com
          </p>
        </Reveal>
      </div>
    </section>
  );
}