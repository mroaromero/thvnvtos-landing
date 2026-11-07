export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Portada"
      className="grid min-h-svh place-items-center px-4 pb-20 pt-32 text-center"
    >
      <div>
        <p className="mono-caps">Post black metal — Santiago de Chile</p>
        <h1 className="mt-8 text-[clamp(3rem,11vw,9.5rem)] font-normal leading-[0.95] tracking-[0.32em] indent-[0.32em]">
          THVNVTOS
        </h1>
        <div aria-hidden="true" className="mx-auto my-8 h-px w-14 bg-[#57534c]" />
        <p className="mono-caps">Desde 2017 / «Despojo» — 2026</p>
        <p className="mt-6" aria-hidden="true">
          <span className="drip mono-caps inline-block">Desplazá</span>
        </p>
      </div>
    </section>
  );
}