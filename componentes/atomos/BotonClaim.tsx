import "./BotonClaim.css";

export default function BotonClaim({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" className="atomo-btn-claim" onClick={onClick}>
      Claim
    </button>
  );
}
