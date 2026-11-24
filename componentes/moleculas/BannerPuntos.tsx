import BotonClaim from "../atomos/BotonClaim";
import IndicadorPuntos from "../atomos/IndicadorPuntos";
import "./BannerPuntos.css";

interface BannerPuntosProps {
  puntos?: number;
  onClaim?: () => void;
}

export default function BannerPuntos({ puntos = 850, onClaim }: BannerPuntosProps) {
  return (
    <section className="molecula-banner-wrapper">
      <div className="banner-tarjeta-morada">
        <div className="banner-fila-superior">
          <div>
            <p className="banner-titulo">Loyalty Points</p>
            <p className="banner-puntos-valor">
              {puntos} <span>Pts</span>
            </p>
          </div>
          <img src="/regalo.svg" alt="Regalo" style={{ width: "68px", height: "68px" }} />
        </div>

        <p className="banner-subtitulo">
          Earn more points and Enjoy exclusive benefits
        </p>

        <div className="banner-caja-regalo">
          <div>
            <p className="banner-regalo-titulo">Free 50 Points</p>
            <p className="banner-regalo-sub">Time Remaining: 10:45:22</p>
          </div>
          <BotonClaim onClick={onClaim} />
        </div>
      </div>
      <IndicadorPuntos activo={0} />
    </section>
  );
}
