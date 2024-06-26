import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import foto from "../../assets/perfil2.png";
import cv from "../../assets/cv.pdf";
import html5 from "../../assets/html5.png";
import css3 from "../../assets/css3.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import github from "../../assets/github2.png";
import adobexd from "../../assets/adobexd.png";
import figma from "../../assets/figma.png";
import node from "../../assets/node.png";
import git from "../../assets/git.png";
import trello from "../../assets/trello.png";
import slack from "../../assets/slack.png";
import discord from "../../assets/discord.png";

const Fondo = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    padding: 2rem 0 4rem 0;

    @media (max-width: 800px) {
       
    }
`

const ContentSobreMi = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    padding: 5%;
    margin-bottom: 4rem;
    gap: 10%;
    @media (max-width: 800px) {
            flex-direction: column;
            align-items: center;
            width: 95%;
            padding: 2.5%;
            margin-top: 2rem;
            gap:1rem;
    }
`

const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    gap: 3.5rem;
    @media (max-width: 800px) {
            width: 90%;
    }
`

const Img = styled.img`
    width: 75%;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 800px) {
        width: 65%;
    }
`

const Boton = styled.button`
    width: fit-content;
    padding: 9px 45px;
    border-radius: 5px;
    border: none;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #28555E;
    font-family: Roboto Condensed;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: .5s;
    }
    @media (max-width: 800px) {
            
    }
`

const Iconos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    gap: 2.5rem;
    @media (max-width: 800px) {
            
    }
`

const Icon = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 800px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`

const DivTextPhone = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 2rem;
    }
`

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 3rem;
    @media (max-width: 800px) {
      display:none;
    }
`

const Parrafo = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    color: #444440;
    text-align: start;
    line-height: 2rem;

    @media (max-width: 800px) {
        font-size: 1rem;
        text-align: center;
        width: 100%;
    }
`






const PageSobreMi = () => {
    return(
        <Fondo>
            <Title text="SOBRE MI" />
            <ContentSobreMi>
                <DivImg>
                    <Img src={foto}/>
                    <a download= 'CV - Mateo Corsi' href={cv}><Boton> Descargar CV </Boton></a>
                    <DivTextPhone>
                    <Parrafo>
                    ¡Hola! Soy un Desarrollador Front End en busca de nuevas oportunidades laborales. Me considero una persona proactiva, responsable y comprometida con mi trabajo. Tengo habilidades en lenguajes de programación como HTML5, CSS3 y JavaScript, así como en librerías como React y Styled-Components. Además, cuento con conocimientos en el área de diseño UX/UI y manejo de herramientas como Figma y Adobe XD.
                    </Parrafo>
                    <Parrafo>
                    He realizado proyectos como freelance en el desarrollo de páginas web responsives, lo que me ha permitido adquirir experiencia en el trabajo con clientes reales y en la gestión de proyectos. Gracias a esto, he desarrollado habilidades en relación a la resolución de problemas, la comunicación efectiva y la gestión del tiempo. Me considero una persona responsable y que se encuentra siempre en la búsqueda de nuevos aprendizajes. Me gusta encarar proyectos nuevos y poder llevarlos a la mejor versión posible con mucha dedicación, compromiso y una comunicación fluida como base de todo éxito.
                    </Parrafo>
                    <Parrafo>
                        Me apasiona el desarrollo web y móvil, así como el diseño UX/UI, y siempre estoy buscando nuevas oportunidades para seguir creciendo profesionalmente. Si tienes alguna pregunta o quieres saber más sobre mi experiencia, ¡no dudes en contactarme!
                    </Parrafo>
                </DivTextPhone>
                    <Iconos>
                        <Icon src={html5}/>
                        <Icon src={css3}/>
                        <Icon src={js}/>
                        <Icon src={react}/>
                        <Icon src={github}/>
                        <Icon src={figma}/>
                        <Icon src={adobexd}/>
                        <Icon src={node}/>
                        <Icon src={git}/>
                        <Icon src={trello}/>
                        <Icon src={slack}/>
                        <Icon src={discord}/>
                    </Iconos>
                </DivImg>
                <DivText>
                    <Parrafo>
                    ¡Hola! Soy un Desarrollador Front End en busca de nuevas oportunidades laborales. Me considero una persona proactiva, responsable y comprometida con mi trabajo. Tengo habilidades en lenguajes de programación como HTML5, CSS3 y JavaScript, así como en librerías como React y Styled-Components. Además, cuento con conocimientos en el área de diseño UX/UI y manejo de herramientas como Figma y Adobe XD.
                    </Parrafo>
                    <Parrafo data-aos="zoom-in-left">
                    He realizado proyectos como freelance en el desarrollo de páginas web responsives, lo que me ha permitido adquirir experiencia en el trabajo con clientes y en la gestión de proyectos. Gracias a esto, he desarrollado habilidades en relación a la resolución de problemas, la comunicación efectiva y la gestión del tiempo. Me considero una persona responsable y que se encuentra siempre en la búsqueda de nuevos aprendizajes. Me gusta encarar proyectos nuevos y poder llevarlos a la mejor versión posible con mucha dedicación, compromiso y una comunicación fluida como base de todo éxito.
                    </Parrafo>
                    <Parrafo data-aos="zoom-in-left">
                        Me apasiona el desarrollo web y móvil, así como el diseño UX/UI, y siempre estoy buscando nuevas oportunidades para seguir creciendo profesionalmente. Si tienes alguna pregunta o quieres saber más sobre mi experiencia, ¡no dudes en contactarme!
                    </Parrafo>
                </DivText>
            </ContentSobreMi>
        </Fondo>
    )
}

export default PageSobreMi