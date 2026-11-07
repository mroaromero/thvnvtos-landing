const LINKS = [
  { href: "#musica", label: "Música" },
  { href: "#archivos", label: "Archivos" },
  { href: "#fechas", label: "Fechas" },
  { href: "#merch", label: "Merch" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-linear-to-b from-abyss/95 to-abyss/70 backdrop-blur-[6px]">
      <div className="mx-auto flex w-[min(100%-3rem,74rem)] flex-wrap items-baseline justify-between gap-6 py-5">
        <a href="#inicio" className="font-mono text-[0.8rem] tracking-[0.4em] text-bone">
          THVNVTOS
        </a>
        <nav className="flex flex-wrap gap-6" aria-label="Secciones">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono-caps text-[0.66rem] transition-colors duration-300 hover:text-ember-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}