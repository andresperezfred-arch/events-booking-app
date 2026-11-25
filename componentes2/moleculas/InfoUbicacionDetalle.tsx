import FilaContacto from "../atomos/FilaContacto";
import "./InfoUbicacionDetalle.css";

export default function InfoUbicacionDetalle({ titulo }: { titulo: string }) {
  return (
    <section className="molecula-info-ubicacion">
      <h2 className="about-titulo">About {titulo}</h2>
      <p className="about-descripcion">
        {titulo} introduces a Mexican and Peruvian dining experience serving small plates
        and innovative cocktails. From exquisite tacos to fine skewered meats from the
        Peruvian barbecue, the menu takes diners on a journey through the unique flavours
        of South America.
      </p>

      <div className="mapa-contenedor">
        <img src="/mapa.png" alt="Ubicación en mapa" className="mapa-img" />
        <span className="btn-ver-mapa">
          <img src="/marca_ubi.svg" alt="" style={{ width: "16px", height: "16px" }} />
          <span>View Map Larger</span>
        </span>
      </div>

      <div className="tarjeta-contacto-detalle">
        <div className="fila-contacto-item">
          <FilaContacto icono="/ubicacion_morado.svg" texto="Get Directions" negrita />
        </div>
        <div className="fila-contacto-item">
          <FilaContacto icono="/telefono_morado.svg" texto="+34 213 00 68 94" />
        </div>
        <div className="fila-contacto-item sin-borde">
          <FilaContacto icono="/mundo.svg" texto="http://leceisterkitchen.com?" />
        </div>
      </div>
    </section>
  );
}
