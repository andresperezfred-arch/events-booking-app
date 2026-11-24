"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BadgePrecio from "../atomos/BadgePrecio";
import BotonFavorito from "../atomos/BotonFavorito";
import DatoIcono from "../atomos/DatoIcono";
import "./TarjetaEvento.css";

export interface Evento {
  id: string;
  categoria: string;
  titulo: string;
  imagen: string;
  precio: string;
  rating: string;
  ubicacion: string;
  fecha: string;
  hora: string;
  favorito: boolean;
}

export default function TarjetaEvento({ evento }: { evento: Evento }) {
  const router = useRouter();
  const [fav, setFav] = useState(evento.favorito);

  return (
    <article
      className="molecula-tarjeta-evento"
      onClick={() => router.push(`/evento/${evento.id}`)}
    >
      <div className="tarjeta-imagen-box">
        <img src={evento.imagen} alt={evento.titulo} className="tarjeta-foto" />
        <div className="tarjeta-overlay-top">
          <BadgePrecio precio={evento.precio} />
          <BotonFavorito
            activo={fav}
            onToggle={(e) => {
              e.stopPropagation();
              setFav(!fav);
            }}
          />
        </div>
      </div>

      <div className="tarjeta-titulo-fila">
        <h3 className="tarjeta-titulo">{evento.titulo}</h3>
        <DatoIcono icono="/estrella.svg" texto={evento.rating} negrita />
      </div>

      <DatoIcono icono="/location.svg" texto={evento.ubicacion} />

      {evento.categoria !== "Fine Dining" && (
        <div className="tarjeta-meta-fila">
          <DatoIcono icono="/calendar.svg" texto={evento.fecha} />
          <DatoIcono icono="/clock.svg" texto={evento.hora} />
        </div>
      )}
    </article>
  );
}
