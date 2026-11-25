import "./FilaContacto.css";

interface FilaContactoProps {
  icono: string;
  texto: string;
  negrita?: boolean;
}

export default function FilaContacto({ icono, texto, negrita }: FilaContactoProps) {
  return (
    <div className="atomo-fila-contacto">
      <img src={icono} alt="" style={{ width: "18px", height: "18px", flexShrink: 0 }} />
      <span style={{ fontWeight: negrita ? 600 : 400 }}>{texto}</span>
    </div>
  );
}
