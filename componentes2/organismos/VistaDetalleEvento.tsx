"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import CabeceraDetalle from "../moleculas/CabeceraDetalle";
import SelectorHorarios from "../moleculas/SelectorHorarios";
import InfoUbicacionDetalle from "../moleculas/InfoUbicacionDetalle";
import { Evento } from "../../componentes/moleculas/TarjetaEvento";
import "./VistaDetalleEvento.css";

export default function VistaDetalleEvento() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [evento, setEvento] = useState<Evento | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://6b060aff57fa1297bb55678e.mockapi.io/api/v1/eventos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) {
          setEvento(data);
        }
      })
      .catch(() => {});
  }, [id]);

  if (!evento) {
    return (
      <div className="marco-iphone" style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>Cargando detalles...</p>
      </div>
    );
  }

  const handleSeleccionarHorario = ({
    invitados,
    fecha,
    hora,
  }: {
    invitados: string;
    fecha: string;
    hora: string;
  }) => {
    const query = new URLSearchParams({
      eventoId: evento.id,
      titulo: evento.titulo,
      imagen: evento.imagen,
      ubicacion: evento.ubicacion,
      invitados,
      fecha,
      hora,
    });
    router.push(`/reservar?${query.toString()}`);
  };

  return (
    <div className="marco-iphone organismo-detalle-evento">
      <CabeceraDetalle
        id={evento.id}
        titulo={evento.titulo}
        imagen={evento.imagen}
        ubicacion={evento.ubicacion}
        favoritoInicial={evento.favorito}
      />

      <SelectorHorarios onSelectHora={handleSeleccionarHorario} />

      <InfoUbicacionDetalle titulo={evento.titulo} />
    </div>
  );
}
