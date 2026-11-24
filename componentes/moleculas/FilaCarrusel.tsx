import TarjetaEvento, { Evento } from "./TarjetaEvento";
import "./FilaCarrusel.css";

interface FilaCarruselProps {
  titulo: string;
  eventos: Evento[];
}

export default function FilaCarrusel({ titulo, eventos }: FilaCarruselProps) {
  return (
    <section className="molecula-fila-carrusel">
      <div className="carrusel-cabecera">
        <h2 className="carrusel-titulo">{titulo}</h2>
        <span className="carrusel-see-all">
          <span>See all</span>
          <img src="/flecha.svg" alt="" style={{ width: "12px", height: "12px" }} />
        </span>
      </div>

      <div className="carrusel-scroll">
        {eventos.map((item) => (
          <TarjetaEvento key={item.id} evento={item} />
        ))}
      </div>
    </section>
  );
}
