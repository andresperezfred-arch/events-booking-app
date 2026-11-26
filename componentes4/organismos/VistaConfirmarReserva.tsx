"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ResumenLugarReserva from "../../componentes3/moleculas/ResumenLugarReserva";
import ListaConfirmacionDatos from "../moleculas/ListaConfirmacionDatos";
import ModalPuntosGanados from "../moleculas/ModalPuntosGanados";
import "./VistaConfirmarReserva.css";

export default function VistaConfirmarReserva() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [guardando, setGuardando] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const eventoId = searchParams.get("eventoId") || "1";
  const titulo = searchParams.get("titulo") || "Leceister Square kitchen";
  const imagen = searchParams.get("imagen") || "/comida.png";
  const ubicacion = searchParams.get("ubicacion") || "31-36 Leicester Square, England";
  const invitados = searchParams.get("invitados") || "2 Guests";
  const fecha = searchParams.get("fecha") || "Wed, July 18";
  const hora = searchParams.get("hora") || "8:00 PM";

  const fullName = searchParams.get("fullName") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const occasion = searchParams.get("occasion") || "Birthday";
  const specialRequest = searchParams.get("specialRequest") || "";

  useEffect(() => {
    setMostrarModal(false);
    setGuardando(false);
  }, [fullName, email, hora]);

  const handleEditarReserva = () => {
    const query = new URLSearchParams({
      eventoId,
      titulo,
      imagen,
      ubicacion,
      invitados,
      fecha,
      hora,
      fullName,
      email,
      phone,
      occasion,
      specialRequest,
      edit: "1",
    });
    router.push(`/reservar?${query.toString()}`);
  };

  const handleGuardarReserva = async () => {
    setGuardando(true);
    try {
      const respuesta = await fetch(
        "https://6b060aff57fa1297bb55678e.mockapi.io/api/v1/reservas",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventoTitulo: titulo,
            fullName,
            email,
            phone,
            occasion,
            specialRequest,
            fechaReserva: `${fecha} (${invitados})`,
            horaReserva: hora,
          }),
        }
      );

      if (respuesta.ok) {
        setMostrarModal(true);
      } else {
        alert("No se pudo guardar la reserva en MockAPI.");
      }
    } catch {
      alert("Error de conexión con MockAPI.");
    } finally {
      setGuardando(false);
    }
  };

  const handleCerrarYVolverInicio = () => {
    setMostrarModal(false);
    router.replace("/");
  };

  return (
    <div className="marco-iphone organismo-confirmar-reserva">
      <ResumenLugarReserva
        eventoId={eventoId}
        titulo={titulo}
        imagen={imagen}
        ubicacion={ubicacion}
        invitados={invitados}
        fecha={fecha}
      />

      <ListaConfirmacionDatos
        fullName={fullName}
        email={email}
        phone={phone}
        occasion={occasion}
        specialRequest={specialRequest}
        guardando={guardando}
        onEdit={handleEditarReserva}
        onReserveNow={handleGuardarReserva}
      />

      {mostrarModal && (
        <ModalPuntosGanados onVolverInicio={handleCerrarYVolverInicio} />
      )}
    </div>
  );
}
