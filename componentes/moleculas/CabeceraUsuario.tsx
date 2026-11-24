import InsigniaPuntos from "../atomos/InsigniaPuntos";
import "./CabeceraUsuario.css";

export default function CabeceraUsuario({ puntos = 850 }: { puntos?: number }) {
  return (
    <header className="molecula-cabecera">
      <div className="cabecera-saludo-grupo">
        <h1 className="cabecera-saludo">Good Morning</h1>
        <InsigniaPuntos puntos={puntos} />
      </div>

      <div className="cabecera-acciones">
        <button type="button" className="btn-campana">
          <img src="/campana.svg" alt="Notificaciones" style={{ width: "20px", height: "20px" }} />
        </button>
        <img src="/perfil.png" alt="Usuario" className="avatar-usuario" />
      </div>
    </header>
  );
}
