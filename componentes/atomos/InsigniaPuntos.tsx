import "./InsigniaPuntos.css";

export default function InsigniaPuntos({ puntos = 850 }: { puntos?: number }) {
  return (
    <div className="atomo-insignia-puntos">
      <img src="/medalla.svg" alt="Puntos" style={{ width: "16px", height: "16px" }} />
      <span>{puntos} Points</span>
    </div>
  );
}
