"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BotonPildoraAccion from "../atomos/BotonPildoraAccion";
import "./CabeceraDetalle.css";

interface CabeceraDetalleProps {
  id?: string;
  titulo: string;
  imagen: string;
  ubicacion: string;
  favoritoInicial?: boolean;
}

export default function CabeceraDetalle({
  id,
  titulo,
  imagen,
  ubicacion,
  favoritoInicial = false,
}: CabeceraDetalleProps) {
  const router = useRouter();
  const [guardado, setGuardado] = useState(favoritoInicial);

  const fotoHero = String(id) === "1" ? "/comida.png" : imagen;

  return (
    <header className="molecula-cabecera-detalle">
      <div className="detalle-hero-box">
        <img src={fotoHero} alt={titulo} className="detalle-hero-img" />

        <div className="detalle-hero-top">
          <button
            type="button"
            className="btn-hero-oscuro"
            onClick={() => router.push("/")}
          >
            ‹
          </button>

          <button type="button" className="btn-hero-oscuro">
            ⋮
          </button>
        </div>

        <button type="button" className="pill-view-all-blanca">
          <img src="/galeria.svg" alt="" style={{ width: "16px", height: "16px" }} />
          <span>View All (5)</span>
        </button>
      </div>

      <div className="detalle-info-principal">
        <h1 className="detalle-titulo">{titulo}</h1>

        <div className="detalle-direccion">
          <img src="/location.svg" alt="" style={{ width: "16px", height: "16px" }} />
          <span>{ubicacion}</span>
        </div>

        <div className="detalle-pildoras-fila">
          <BotonPildoraAccion icono="/subir.svg" texto="Share" />
          <BotonPildoraAccion
            icono={guardado ? "/heartrojo.svg" : "/heart.svg"}
            texto={guardado ? "Saved" : "Save"}
            onClick={() => setGuardado(!guardado)}
          />
          <BotonPildoraAccion icono="/medalla.svg" texto="100pts" />
        </div>
      </div>
    </header>
  );
}
