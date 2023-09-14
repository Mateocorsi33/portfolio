import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import Paragraph from "../parrafos";

const Fondo = styled.div`
    display: flex;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    padding: 2rem 0 0 0;
    
    @media (max-width: 800px) {
     
    }
`

const DivSobre = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    padding: 2rem 0;
    @media (max-width: 800px) {
        margin: 0 5%;
        width: 90%;
    }
`


const SobreMi = () => {
    return(
        <Fondo>
            <DivSobre data-aos="fade-up">
                <Title text="Sobre mi"/>
                <Paragraph text="¡Hola! Soy Mateo, desarrollador Front-End. Con conocimientos en HTML, CSS, JavaScript y React, cuento con habilidades en diseño de interfaces atractivas, busco oportunidades para crecer y aprender de profesionales experimentados. Comprometido, comunicativo y dispuesto a enfrentar desafíos, estoy emocionado por unirme a un equipo y contribuir con mi pasión y creatividad. Contacto: Mateofrontend@gmail.com"/>
            </DivSobre>
        </Fondo>
    )
}

export default SobreMi