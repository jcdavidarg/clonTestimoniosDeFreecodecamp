import React from "react";
import Testimonio from "./Testimonio";
import estudiantes from "../datos/estudiantes";

const Testimonios = () => {
  const arrayTestimonios = [];

  for (let i = 0; i < estudiantes.length; i++) {
    arrayTestimonios.push(
      <Testimonio
        imagen={estudiantes[i].imagen}
        nombre={estudiantes[i].nombre}
        pais={estudiantes[i].pais}
        cargo={estudiantes[i].cargo}
        empresa={estudiantes[i].empresa}
        testimonio={estudiantes[i].testimonio}
      />
    );
  }
  return arrayTestimonios;
};
export default Testimonios;
