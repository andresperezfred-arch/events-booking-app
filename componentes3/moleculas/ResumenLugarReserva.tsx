"use client";

import { useRouter } from "next/navigation";
import "./ResumenLugarReserva.css";

interface ResumenLugarReservaProps {
  eventoId: string;
  titulo: string;
  imagen: string;
  ubicacion: string;
  invitados: string;
  fecha: string;
}

export default function ResumenLugarReserva({
  eventoId,
  titulo,
  imagen,
  ubicacion,
  invitados,
  fecha,
}: ResumenLugarReservaProps) {
  const router = useRouter();
  const fotoMostrar = eventoId === "1" ? "/comida.png" : imagen;
  const fechaMostrar = fecha === "Today" ? "Wed, July 18" : fecha;

  return (
    <header className="molecula-resumen-reserva">
      <button
        type="button"
        className="btn-volver-simple"
        onClick={() => router.back()}
      >
        ‹
      </button>

      <h1 className="resumen-titulo-pagina">Reservation Preview</h1>
      <p className="resumen-subtitulo-pagina">
        Confirm if there are errors in the entered details.
      </p>

      <div className="tarjeta-mini-lugar">
        <img src={fotoMostrar} alt={titulo} className="mini-lugar-foto" />

        <div className="mini-lugar-info">
          <h2 className="mini-lugar-titulo">{titulo}</h2>
          <p className="mini-lugar-dato">
            <img src="/location.svg" alt="" style={{ width: "13px", height: "13px" }} />
            <span>{ubicacion}</span>
          </p>

          <div className="mini-lugar-meta">
            <span className="meta-par">
              <img src="/grupo_personas.svg" alt="" style={{ width: "14px", height: "14px" }} />
              <span>{invitados}</span>
            </span>
            <span className="meta-par">
              <img src="/calendar.svg" alt="" style={{ width: "14px", height: "14px" }} />
              <span>{fechaMostrar}</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
