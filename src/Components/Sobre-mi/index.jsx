import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import Paragraph from "../parrafos";

const DivSobre = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    @media (max-width: 800px) {
        margin: 0 5%;
        width: 90%;
    }
`


const SobreMi = () => {
    return(
        <DivSobre>
            <Title text="SOBRE MI"/>
            <Paragraph text="¡Hola! Soy Mateo, desarrollador Front-End. Con conocimientos en HTML, CSS, JavaScript y React, cuento con habilidades en diseño de interfaces atractivas, busco oportunidades para crecer y aprender de profesionales experimentados. Comprometido, comunicativo y dispuesto a enfrentar desafíos, estoy emocionado por unirme a un equipo y contribuir con mi pasión y creatividad. Contacto: Mateofrontend@gmail.com"/>
        </DivSobre>
    )
}

export default SobreMi