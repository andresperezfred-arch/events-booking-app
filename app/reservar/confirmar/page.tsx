import { Suspense } from "react";
import VistaConfirmarReserva from "@/componentes4/organismos/VistaConfirmarReserva";

export default function ConfirmarReservaPage() {
  return (
    <Suspense
      fallback={
        <div className="marco-iphone" style={{ padding: "40px 20px", textAlign: "center" }}>
          Cargando...
        </div>
      }
    >
      <VistaConfirmarReserva />
    </Suspense>
  );
}
