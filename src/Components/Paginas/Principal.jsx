import React from "react";
import Portada from "../Portada";
import SobreMi from "../Sobre-mi";
import Skills from "../Skills";
import Proyectos from "../Proyectos";
import Contacto from "../Contacto";

const Principal = () => {
    return(
        <>
            <Portada />
            <SobreMi/>
            <Skills/>
            <Proyectos/>
            <Contacto/>
        </>
    )
}

export default Principal