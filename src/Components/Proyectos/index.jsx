import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import imgProyect1 from "../../assets/proyectogranja.png";
import imgProyect2 from "../../assets/proyectoencriptador.png";
import vector from "../../assets/vector-links.png";


const DivPro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    margin: 6rem 0;
    @media (max-width: 800px) {
        margin: 2rem 0;
    }
`

const Proyecto1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    gap: 3rem;
    margin: 3rem 0;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        margin: 1rem 0;
        width: 90%;
        padding: 2rem 0 0 0;
        border-top: 1px solid #C2B27F;
    }
`

const Proyecto2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    text-align: end;
    gap: 3rem;
    margin: 3rem 0;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        margin: 1rem 0;
        padding: 2rem 0;
        border-top: 1px solid #C2B27F;
        border-bottom: 1px solid #C2B27F;
        width: 90%;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-wrap: break-word;
    width: 100%;
    gap: 1.5rem;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 1rem 0;
    }
`

const Text2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    word-wrap: break-word;
    width: 100%;
    gap: 1.5rem;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 1rem 0;
        order: 2;
    }
`

const Img = styled.img`
    width: 20rem;
    height: fit-content;
    cursor: pointer;
    &:hover {
        width: 20.5rem;
        transition: .3s;
        opacity: 70%;
    }
    @media (max-width: 800px) {
        width:70%;
    }
`

const Encabezado = styled.h1`
    width: 40rem;
    color: #478484;
    font-family: Roboto Condensed;
    font-size: 2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 0;
    @media (max-width: 800px) {
        font-size: 1.5rem;
        width: 90%;
    }
`

const Descripcion = styled.p`
    width: 40rem;
    color: #478484;
    font-family: Roboto;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 0 0 1rem 0;
    @media (max-width: 800px) {
        font-size: 1.2rem;
        width: 90%;
    }
`

const Boton = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #464646;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    @media (max-width: 800px) {
        font-size: 1.2rem;
    }
`

const Vector = styled.img`
    margin-left: 1rem;
    padding-top: .3rem;
    width: .8rem;
    @media (max-width: 800px) {
        margin-left: .6rem;
        width: .6rem;
    }
`

const Proyectos = () => {
    return(
        <DivPro>
            <Title text="PROYECTOS"/>
            <Proyecto1>
                <Img src={imgProyect1}/>
                <Text>
                    <Encabezado>GRANJA LOS PIBES</Encabezado>
                    <Descripcion>Desarrollo y diseño de pagina web para ong llamada Granja Los Pibes, desarrollo responsivo utilizando React y Styled Components</Descripcion>
                    <Boton>Ver completo<Vector src={vector}/></Boton>
                </Text>
            </Proyecto1>
            <Proyecto2>
                <Text2>
                    <Encabezado>ENCRIPTADOR DE TEXTO</Encabezado>
                    <Descripcion>Desarrollo de un encriptador de texto, utilizando HTML5, CSS3 y JAVASCRIPT</Descripcion>
                    <Boton>Ver completo<Vector src={vector}/></Boton>
                </Text2>
                <Img src={imgProyect2}/>
            </Proyecto2>
        </DivPro>
    )   
}

export default Proyectos