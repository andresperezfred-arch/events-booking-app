import "./IndicadorPuntos.css";

export default function IndicadorPuntos({ activo = 0 }: { activo?: number }) {
  const items = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div className="atomo-indicador-puntos">
      {items.map((indice) =>
        indice === activo ? (
          <span key={indice} className="punto-morado-activo" />
        ) : (
          <img
            key={indice}
            src="/Ellipse 7.svg"
            alt=""
            style={{ width: "6px", height: "6px" }}
          />
        )
      )}
    </div>
  );
}
