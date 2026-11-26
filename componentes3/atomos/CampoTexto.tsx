import "./CampoTexto.css";

interface CampoTextoProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  tipo?: "text" | "email" | "textarea";
}

export default function CampoTexto({
  label,
  placeholder,
  value,
  onChange,
  tipo = "text",
}: CampoTextoProps) {
  return (
    <div className="atomo-campo-grupo">
      <label className="atomo-campo-label">{label}</label>
      {tipo === "textarea" ? (
        <textarea
          className="atomo-campo-textarea"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={tipo}
          className="atomo-campo-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
