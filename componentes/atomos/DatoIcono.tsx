import "./DatoIcono.css";

interface DatoIconoProps {
  icono: string;
  texto: string;
  negrita?: boolean;
}

export default function DatoIcono({ icono, texto, negrita }: DatoIconoProps) {
  return (
    <div className="atomo-dato-icono">
      <img src={icono} alt="" style={{ width: "14px", height: "14px", flexShrink: 0 }} />
      <span
        className="atomo-dato-texto"
        style={{
          fontWeight: negrita ? 700 : 400,
          color: negrita ? "#111827" : "#6b7280",
        }}
      >
        {texto}
      </span>
    </div>
  );
}
