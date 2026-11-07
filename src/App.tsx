function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0a0a0b",
        color: "#e6e2da",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", margin: 0, letterSpacing: "0.35em", fontWeight: 400 }}>
          THVNVTOS
        </h1>
        <p style={{ letterSpacing: "0.25em", color: "#8f8a80", marginTop: "1.25rem", fontSize: "0.75rem", textTransform: "uppercase" }}>
          Post black metal · Santiago de Chile
        </p>
      </div>
    </main>
  );
}

export default App;
