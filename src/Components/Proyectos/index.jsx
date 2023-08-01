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
    background-color: #ffffff;
    gap: 1.5rem;
    width: 100%;
    padding-bottom: 2.5rem;
    @media (max-width: 800px) {
        margin: 0;
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
        padding: 2rem 0 3.5rem 0;
        border-bottom: 1px solid #6F81A9;
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
        padding: 2rem 0 3.5rem 0;
        border-bottom: 1px solid #6F81A9;
        width: 90%;
    }
`

const Link = styled.a`

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
    border-radius: 10px;
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
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    color: #6F81A9;
    line-height: normal;
    margin: 0;
    @media (max-width: 800px) {
        font-size: 1.5rem;
        width: 90%;
    }
`

const Descripcion = styled.p`
    width: 36rem;
    color: #6F81A9;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    @media (max-width: 800px) {
        font-size: 1.2rem;
        width: 90%;
    }
`

const Boton = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #2B4987;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;
    margin-top: 3rem;
    &:hover {
        color: #6F81A9;
    }
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
            <Title text="Proyectos"/>
            <Proyecto1>     
                <Link href="https://webgranjalospibes.vercel.app/"><Img src={imgProyect1}/></Link>
                <Text>
                    <Encabezado>Granja Los Pibes</Encabezado>
                    <Descripcion>Desarrollo y diseño de pagina web para la ONG, Granja Los Pibes, desarrollo responsive utilizando React y Styled Components</Descripcion>
                    <Boton href="https://webgranjalospibes.vercel.app/">Ver completo<Vector src={vector}/></Boton>
                </Text>
            </Proyecto1>
            <Proyecto2>
                <Text2>
                    <Encabezado>Encriptador de texto</Encabezado>
                    <Descripcion>Para este proyecto desarrollé un encriptador de texto utilizando HTML5, CSS3 y JavaScript.</Descripcion>
                    <Boton href="https://encriptador-mateofront.vercel.app/">Ver completo<Vector src={vector}/></Boton>
                </Text2>
                <Link href="https://encriptador-mateofront.vercel.app/"><Img src={imgProyect2}/></Link>
            </Proyecto2>
        </DivPro>
    )   
}

export default Proyectos