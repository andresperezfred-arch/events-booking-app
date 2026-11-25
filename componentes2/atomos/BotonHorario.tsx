import "./BotonHorario.css";

interface BotonHorarioProps {
  hora: string;
  onSelect: (hora: string) => void;
}

export default function BotonHorario({ hora, onSelect }: BotonHorarioProps) {
  return (
    <button
      type="button"
      className="atomo-btn-horario"
      onClick={() => onSelect(hora)}
    >
      {hora}
    </button>
  );
}
