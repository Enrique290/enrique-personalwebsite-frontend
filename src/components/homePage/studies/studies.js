/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import LaSalle from "../../../assets/img/homePage/studies/LaSalle.png";
import CENEVAL from "../../../assets/img/homePage/studies/CENEVAL.png";
import "./studies.css";

export default function Studies() {
  return (
    <div className="studies container-xl">
      <h1>Studies</h1>
      <div className="studies-body">
        <div>
          <a target="_blank" href="https://lasalle.mx/">
            <img className="imgLaSalle" src={LaSalle} alt="La Salle Logo" />
          </a>
          <h2>Career: Cybernetic and Computer Systems Enginnering</h2>
          <h2>Title in process (Documentacion with the university)</h2>
          <h2>2018 - 2022</h2>
        </div>
        <div className="divCENEVAL">
          <a
            target="_blank"
            href="https://ceneval.edu.mx/examenes-egreso-egel/"
          >
            <img className="imgCENEVAL" src={CENEVAL} alt="La Salle Logo" />
          </a>
          <h2>CENEVAL Exam. EGEL+ Ingeniería Computacional. Approved.</h2>
          <h2>2022</h2>
        </div>
      </div>
    </div>
  );
}
