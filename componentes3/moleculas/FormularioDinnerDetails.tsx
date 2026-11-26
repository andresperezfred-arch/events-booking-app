"use client";

import { useState } from "react";
import CampoTexto from "../atomos/CampoTexto";
import BotonMoradoGrande from "../atomos/BotonMoradoGrande";
import "./FormularioDinnerDetails.css";

interface FormularioDinnerDetailsProps {
  onProceed: (datosFormulario: {
    fullName: string;
    email: string;
    phone: string;
    occasion: string;
    specialRequest: string;
  }) => void;
}

export default function FormularioDinnerDetails({
  onProceed,
}: FormularioDinnerDetailsProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleContinuar = () => {
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      alert("Por favor completa Full Name, Email Address y Phone Number.");
      return;
    }
    if (!aceptoTerminos) {
      alert("Por favor acepta los Terms of Use y Privacy Policy.");
      return;
    }
    onProceed({
      fullName,
      email,
      phone,
      occasion: occasion || "Birthday",
      specialRequest,
    });
  };

  return (
    <section className="molecula-form-dinner">
      <h2 className="form-dinner-titulo">Dinner Details</h2>

      <CampoTexto
        label="Full Name"
        placeholder="Enter your Full Name"
        value={fullName}
        onChange={setFullName}
      />

      <CampoTexto
        label="Email Address"
        placeholder="Enter your Email Address"
        value={email}
        onChange={setEmail}
        tipo="email"
      />

      <div className="atomo-campo-grupo">
        <label className="atomo-campo-label">Phone Number</label>
        <div className="campo-telefono-box">
          <div className="telefono-bandera-grupo">
            <svg width="24" height="16" viewBox="0 0 24 16" style={{ borderRadius: "2px" }}>
              <rect width="8" height="16" x="0" fill="#008751" />
              <rect width="8" height="16" x="8" fill="#ffffff" />
              <rect width="8" height="16" x="16" fill="#008751" />
            </svg>
            <img src="/flecha_abajo.svg" alt="" style={{ width: "10px", height: "10px" }} />
          </div>
          <input
            type="tel"
            className="telefono-input"
            placeholder="Enter your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="atomo-campo-grupo">
        <label className="atomo-campo-label">Select an Occasion (Optional)</label>
        <div className="select-occasion-box">
          <select
            className="select-occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business Dinner">Business Dinner</option>
            <option value="Date Night">Date Night</option>
          </select>
          <img
            src="/flecha_abajo.svg"
            alt=""
            className="select-occasion-flecha"
            style={{ width: "12px", height: "12px" }}
          />
        </div>
      </div>

      <CampoTexto
        label="Add a Special Request (Optional)"
        placeholder="Enter your special request"
        value={specialRequest}
        onChange={setSpecialRequest}
        tipo="textarea"
      />

      <div className="terminos-fila">
        <input
          type="checkbox"
          className="terminos-check"
          checked={aceptoTerminos}
          onChange={(e) => setAceptoTerminos(e.target.checked)}
        />
        <p className="terminos-texto">
          By clicking &ldquo;Reserve Now&rdquo; you agree to the{" "}
          <span className="terminos-link">Terms of Use</span> and{" "}
          <span className="terminos-link">Privacy Policy</span>.
        </p>
      </div>

      <BotonMoradoGrande texto="Proceed" onClick={handleContinuar} />
    </section>
  );
}
