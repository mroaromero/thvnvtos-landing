import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        {/* Secciones: Música · Archivos · Fechas · Merch · Contacto */}
      </main>
      <Footer />
    </>
  );
}

export default App;