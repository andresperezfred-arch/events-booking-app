import "./BotonPildoraAccion.css";

interface BotonPildoraAccionProps {
  icono: string;
  texto: string;
  onClick?: () => void;
}

export default function BotonPildoraAccion({
  icono,
  texto,
  onClick,
}: BotonPildoraAccionProps) {
  return (
    <button type="button" className="atomo-pildora-accion" onClick={onClick}>
      <img src={icono} alt="" style={{ width: "15px", height: "15px" }} />
      <span>{texto}</span>
    </button>
  );
}
