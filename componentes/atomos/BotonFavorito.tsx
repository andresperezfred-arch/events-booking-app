"use client";

import "./BotonFavorito.css";

interface BotonFavoritoProps {
  activo: boolean;
  onToggle: (e: React.MouseEvent) => void;
}

export default function BotonFavorito({ activo, onToggle }: BotonFavoritoProps) {
  return (
    <button type="button" className="atomo-btn-favorito" onClick={onToggle}>
      <img
        src={activo ? "/heartrojo.svg" : "/heart.svg"}
        alt="Favorito"
        style={{ width: "16px", height: "16px" }}
      />
    </button>
  );
}
