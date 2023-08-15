import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import fotoProOne from "../../assets/proyectogranj.png";
import fotoProTwo from "../../assets/proyectoencriptado.png";
import fotoProThree from "../../assets/diseño.png";

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

const ContentProyect = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;
    width: 90%;
    padding: 5%;
    margin-bottom: 6rem;
    @media (max-width: 800px) {
        gap: 2rem;
    }
`

const Proyect = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 1rem;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 800px) {
        padding: 4rem 0 6rem 0;
        border-bottom: 1px solid #6F81A9;
    }
`

const Img = styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        transition: .3s;
        opacity: 70%;
    }
    @media (max-width: 800px) {
        width: 70%;
        height: auto;
    }
`

const Titulo = styled.h1`
    width: 20rem;
    text-align: center;
    margin: 2rem 0 0 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: #6F81A9;
    font-style: normal;
    line-height: normal;
    cursor: pointer;
    @media (max-width: 800px) {
        font-size: 1.3rem;
    }
`



const PageProyectos = () => {
    return(
        <Fondo>
            <Title text="PROYECTOS" />
            <ContentProyect>
                <Proyect href="https://www.granjalospibes.com.ar/">
                    <Img src={fotoProOne}/>
                    <Titulo>Diseño y Desarrollo Web - Granja Los Pibes</Titulo>
                </Proyect>
                <Proyect href="https://encriptador-mateofront.vercel.app/">
                    <Img src={fotoProTwo}/>
                    <Titulo>Desarrollo Web - Encriptador de texto</Titulo>
                </Proyect>
                <Proyect href="https://www.figma.com/proto/OC7FuSrgj7XxwHWUiddgzl/Epoca-Dorada?node-id=211-225&starting-point-node-id=211%3A225&mode=design&t=BM7xFUQmvez6qEsf-1">
                    <Img src={fotoProThree}/>
                    <Titulo>Diseño de aplicacion movil</Titulo>
                </Proyect>
            </ContentProyect>
        </Fondo>
    )
}

export default PageProyectos