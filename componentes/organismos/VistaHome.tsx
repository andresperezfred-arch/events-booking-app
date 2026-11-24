"use client";

import { useEffect, useState } from "react";
import CabeceraUsuario from "../moleculas/CabeceraUsuario";
import BannerPuntos from "../moleculas/BannerPuntos";
import FilaCarrusel from "../moleculas/FilaCarrusel";
import BarraNavegacionInferior from "../moleculas/BarraNavegacionInferior";
import { Evento } from "../moleculas/TarjetaEvento";
import "./VistaHome.css";

export default function VistaHome() {
  const [listaEventos, setListaEventos] = useState<Evento[]>([]);
  const [puntos, setPuntos] = useState(850);
  const [reclamado, setReclamado] = useState(false);

  useEffect(() => {
    fetch("https://6b060aff57fa1297bb55678e.mockapi.io/api/v1/eventos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setListaEventos(data);
        }
      })
      .catch(() => {});

    fetch("https://6b060aff57fa1297bb55678e.mockapi.io/api/v1/reservas")
      .then((res) => res.json())
      .then((reservas) => {
        if (Array.isArray(reservas)) {
          setPuntos(850 + reservas.length * 100);
        }
      })
      .catch(() => {});
  }, []);

  const fineDining = listaEventos.filter(
    (e) => e.categoria?.toLowerCase() === "fine dining"
  );
  const liveSport = listaEventos.filter(
    (e) => e.categoria?.toLowerCase() === "live sport"
  );
  const musicEvents = listaEventos.filter(
    (e) => e.categoria?.toLowerCase() === "music events"
  );

  const handleClaim = () => {
    if (!reclamado) {
      setPuntos(puntos + 50);
      setReclamado(true);
    }
  };

  return (
    <div className="marco-iphone organismo-home">
      <CabeceraUsuario puntos={puntos} />
      <BannerPuntos puntos={puntos} onClaim={handleClaim} />

      <FilaCarrusel titulo="Fine Dining" eventos={fineDining} />
      <FilaCarrusel titulo="Live Sport" eventos={liveSport} />
      <FilaCarrusel titulo="Music Events" eventos={musicEvents} />

      <BarraNavegacionInferior />
    </div>
  );
}
