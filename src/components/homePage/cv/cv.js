import React from "react";

import CurriculumPDFEN from "../../../assets/pdf/homePage/CV-EN.pdf";
import "./cv.css";

export default function CV() {
  return (
    <div className="cv container-xl">
      <h1>Curriculum Vitae PDF</h1>
      <div className="cv-body">
        <a href={CurriculumPDFEN} target="_blank" rel="noreferrer">
          <button type="button" className="btn">
            <i className="bi bi-download"> </i>
            Download
          </button>
        </a>
      </div>
    </div>
  );
}
