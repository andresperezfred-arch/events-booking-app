import "./BadgePrecio.css";

export default function BadgePrecio({ precio }: { precio: string }) {
  return <span className="atomo-badge-precio">{precio}</span>;
}
