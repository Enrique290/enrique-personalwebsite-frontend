import React from "react";

// import CurriculumPDFEN from "../../../assets/pdf/homePage/CurrículumEN.pdf";
import CurriculumPDFES from "../../../assets/pdf/homePage/CV-ES.pdf";
import "./cv.css";

export default function CV() {
  return (
    <div className="cv container-xl">
      <h1>Curriculum Vitae PDF</h1>
      <div className="cv-body">
        {/* <a href={CurriculumPDFEN} target="_blank"> */}
        <button type="button" className="btn" disabled>
          <i className="bi bi-download"> </i>
          Download
        </button>
        {/* </a> */}
        <br />
        <a href={CurriculumPDFES} target="_blank" rel="noreferrer">
          <button type="button" className="btn">
            <i className="bi bi-download"> </i>
            Descargar
          </button>
        </a>
        <embed
          src={CurriculumPDFES}
          type="application/pdf"
          height={800}
          width={500}
        />
      </div>
    </div>
  );
}
