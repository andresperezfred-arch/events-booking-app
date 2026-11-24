import "./BarraNavegacionInferior.css";

export default function BarraNavegacionInferior() {
  return (
    <nav className="molecula-nav-inferior">
      <button type="button" className="nav-item activo">
        <img src="/home-2.svg" alt="Home" style={{ width: "22px", height: "22px" }} />
        <span>Home</span>
      </button>
      <button type="button" className="nav-item">
        <img src="/discover.svg" alt="Explore" style={{ width: "22px", height: "22px" }} />
        <span>Explore</span>
      </button>
      <button type="button" className="nav-item">
        <img src="/search-normal.svg" alt="Search" style={{ width: "22px", height: "22px" }} />
        <span>Search</span>
      </button>
      <button type="button" className="nav-item">
        <img src="/heart.svg" alt="Saved" style={{ width: "22px", height: "22px" }} />
        <span>Saved</span>
      </button>
    </nav>
  );
}
