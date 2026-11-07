# THVNVTOS — Landing page

Objetivo: landing page para la banda de post black metal THVNVTOS, React como stack, deploy en Vercel.
Branch: main (repo nuevo) · Delivery: single-pr (commits locales; push/PR los decide el usuario) · Runner: tsc && vite build

## Specs

S1. Stack: "quiero utilizar REACT como parte del stack" — Vite + React + TypeScript + Tailwind CSS v4; build estático (`vite build`, output `dist`) listo para Vercel sin config extra.
S2. Deploy: "quiero hacer deploy en vercel" (aclaración custom en kickoff).
S3. Estilos: Tailwind CSS (respuesta "Tailwind CSS" en kickoff): utilidades + tokens vía `@theme`.
S4. Secciones: "MUSICA - ARCHIVOS - FECHAS - MERCH - CONTACTO" — la landing debe tener esas cinco secciones navegables desde la nav.
S5. Dirección visual: "Atmosférico minimalista" (respuesta en kickoff): oscuridad, tipografía grande, espacio negativo. Sin lorem ipsum.

## Tasks

- T1 — Scaffold: Vite + React + TS + Tailwind v4 + limpieza template (S1, S3) — inline — done — commit 1074d17; build verde (tsc + vite build)
- T2 — Diseño: 3 artboards atmosférico minimalista con las 5 secciones (S4, S5) — inline — done — design/thvnvtos-landing/ (01-paisaje, 02-ritual, 03-capitulos + manifest); commit 6e8fe70
- T3 — Implementar shell: hero + nav + footer en React (S4, S5) — inline — done — commit 297c554
- T4 — Implementar secciones MÚSICA, ARCHIVOS, FECHAS, MERCH, CONTACTO (S4) — inline — done — commit a5908e0
- T5 — Verificar: `tsc -b` + `vite build` + revisión visual en dev server (S1) — inline — done — tsc/build verdes, dev server verificado, visual aprobado por el usuario; assess RDD: medium / reviewDue false
- T6 — Deploy a Vercel (S2) — inline — pending — requiere cuenta/decisión del usuario
- T7 — Subir repo a GitHub (S2, prep) — inline — done — repo público mroaromero/thvnvtos-landing, main 91a05bf; autoría reescrita al noreply por bloqueo de privacidad de GitHub

## Log

L1 (2026-11-06) — "Gentle el dia de hoy quiero comenzar un proyecto de landing page para una banda del genero post black metal llamada "THVNVTOS". Lo unico que tengo claro es que quiero utilizar REACT como parte del stack"

L2 (2026-11-06) — Decisiones de kickoff (respuestas a cuestionario): deploy en Vercel (custom), Tailwind CSS, secciones "MUSICA - ARCHIVOS - FECHAS - MERCH - CONTACTO", estética "Atmosférico minimalista".

L3 (2026-11-06) — Búsqueda web: THVNVTOS es una banda de post black metal/hardcore/doom de Santiago de Chile, activa desde 2017 (antes "Thanatos"). Discografía real (Bandcamp thvnvtosproject.bandcamp.com): Noche y Niebla EP (2017), Destrvdo, single Ningún Lugar (2022, video), adelanto Heraldo de Muerte y larga duración Despojo (15 jul 2026, tracks: Introspección, Heraldo de Muerte, Desposesión, Ningún Lugar...). Instagram @thvnvtosprojectofficial, Facebook Thvnvtos. Formación: Diego Oñate (voz), Juan Pablo Fuentes y David Sandoval (guitarras), Benjamin Jara (bajo), Pablo Artes (batería). Gigs conocidos: Rancagua, Concepción, Buenos Aires (AR). Fuentes: bandcamp.com, metal-archives.com, metal-tv.live, war-metal.com, rocklegacy.cl.

L4 (2026-11-06) — Artboards creados en design/thvnvtos-landing/: 01-paisaje (scroll sereno, máximo vacío), 02-ritual (niebla fija + títulos fantasma), 03-capitulos (editorial numerado 01–05). Manifest design.json. Contenido real de la banda (discografía, letra de Introspección, timeline 2016–2026, redes). Slots pendientes de datos reales: fechas por anunciar, precios/ítems de merch, booking/email. Canvas abierto; falta elección de artboard.

L5 (2026-11-06) — Elegido artboard 01-paisaje (scroll sereno, máximo espacio negativo). Implementación en React + Tailwind v4 con los tokens del artboard; handoff vía gentle_design; verificación: tsc + vite build + servidor de desarrollo local (visual final a cargo del usuario).

L6 (2026-11-06) — Implementación completa: shell (tokens, grano, nav, hero, footer) commit 297c554 (antes efb061b); secciones MÚSICA/ARCHIVOS/FECHAS/MERCH/CONTACTO commit a5908e0 (antes 4727c91); handoff del artboard registrado (handoffs.json) 56db805 (antes 230d24f). Evidencia: tsc -b + vite build verdes (25 módulos, CSS 19.65 kB / JS 229.83 kB), dev server 127.0.0.1:5173 arriba sirviendo <title>THVNVTOS</title> (SPA; el DOM se monta en el navegador). Año de Destrvdo verificado en Bandcamp: 21 dic 2020. Assess nativo (RDD on): risk medium / nativeRisk medium (config: handoffs.json), 12 paths / 555 líneas, reviewDue false (under_budget) → diferida al slice de PR; plan: writerSelfVerification, sin verificador independiente (sin ítem de alto riesgo escalado). Pendientes del usuario: fechas reales, ítems/precios de merch, email de booking, y decisión de deploy a Vercel (T6).

L7 (2026-11-06) — Push autorizado por el usuario: repo público mroaromero/thvnvtos-landing, rama main en 91a05bf. El push inicial fue rechazado por la protección "Block command line pushes that expose my email" de GitHub; por decisión del usuario se reescribió la autoría de los 7 commits al noreply 128869953+mroaromero@users.noreply.github.com (filter-branch) y se fijó user.email repo-local (sin tocar el global). El usuario aprobó el visual — T5 done. T6 (deploy Vercel) sigue pendiente de decisión.