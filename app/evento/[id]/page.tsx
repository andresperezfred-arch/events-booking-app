import { Suspense } from "react";
import VistaDetalleEvento from "@/componentes2/organismos/VistaDetalleEvento";

export default function DetalleEventoPage() {
  return (
    <Suspense fallback={<div className="marco-iphone" style={{ padding: "40px 20px", textAlign: "center" }}>Cargando...</div>}>
      <VistaDetalleEvento />
    </Suspense>
  );
}
