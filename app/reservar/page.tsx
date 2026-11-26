import { Suspense } from "react";
import VistaInputReserva from "@/componentes3/organismos/VistaInputReserva";

export default function ReservarPage() {
  return (
    <Suspense
      fallback={
        <div className="marco-iphone" style={{ padding: "40px 20px", textAlign: "center" }}>
          Cargando...
        </div>
      }
    >
      <VistaInputReserva />
    </Suspense>
  );
}
