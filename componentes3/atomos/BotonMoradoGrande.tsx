import "./BotonMoradoGrande.css";

interface BotonMoradoGrandeProps {
  texto: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function BotonMoradoGrande({
  texto,
  onClick,
  disabled,
}: BotonMoradoGrandeProps) {
  return (
    <button
      type="button"
      className="atomo-btn-morado-grande"
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
}
