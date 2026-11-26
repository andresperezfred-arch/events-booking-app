"use client";

import DatoResumenTexto from "../atomos/DatoResumenTexto";
import BotonSecundarioBorde from "../atomos/BotonSecundarioBorde";
import BotonMoradoGrande from "../../componentes3/atomos/BotonMoradoGrande";
import "./ListaConfirmacionDatos.css";

interface ListaConfirmacionDatosProps {
  fullName: string;
  email: string;
  phone: string;
  occasion: string;
  specialRequest: string;
  guardando: boolean;
  onEdit: () => void;
  onReserveNow: () => void;
}

export default function ListaConfirmacionDatos({
  fullName,
  email,
  phone,
  occasion,
  specialRequest,
  guardando,
  onEdit,
  onReserveNow,
}: ListaConfirmacionDatosProps) {
  return (
    <section className="molecula-lista-confirmacion">
      <h2 className="confirmacion-subtitulo">Dinner Details</h2>

      <DatoResumenTexto etiqueta="Full Name" valor={fullName} />
      <DatoResumenTexto etiqueta="Email Address" valor={email} />
      <DatoResumenTexto etiqueta="Phone Number" valor={phone} />
      <DatoResumenTexto etiqueta="Select an Occasion" valor={occasion} />
      <DatoResumenTexto
        etiqueta="Add a Special Request"
        valor={specialRequest || "No special requests"}
      />

      <div className="grupo-botones-confirmacion">
        <BotonSecundarioBorde texto="Edit Reservation Details" onClick={onEdit} />
        <BotonMoradoGrande
          texto={guardando ? "Saving..." : "Reserve Now"}
          onClick={onReserveNow}
          disabled={guardando}
        />
      </div>
    </section>
  );
}
