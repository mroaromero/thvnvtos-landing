import { Archivos } from "./components/Archivos";
import { Contacto } from "./components/Contacto";
import { Fechas } from "./components/Fechas";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Merch } from "./components/Merch";
import { Musica } from "./components/Musica";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Musica />
        <Archivos />
        <Fechas />
        <Merch />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;