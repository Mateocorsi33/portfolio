import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import fotoProOne from "../../assets/proyectogranj.png";
import fotoProTwo from "../../assets/proyectoencriptado.png";
import fotoProThree from "../../assets/diseño.png";



const ContentProyect = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;
    width: 90%;
    padding: 5%;
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
        padding: 2rem 0 3.5rem 0;
        border-bottom: 1px solid #C2B27F;
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
    margin: 0;
    color: #464646;
    font-family: Roboto Condensed;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    @media (max-width: 800px) {
        font-size: 1.3rem;
    }
`



const PageProyectos = () => {
    return(
        <>
            <Title text="PROYECTOS" />
            <ContentProyect>
                <Proyect href="https://webgranjalospibes.vercel.app/">
                    <Img src={fotoProOne}/>
                    <Titulo>Diseño y Desarrollo Web - GRANJA LOS PIBES</Titulo>
                </Proyect>
                <Proyect href="https://encriptador-mateofront.vercel.app/">
                    <Img src={fotoProTwo}/>
                    <Titulo>Desarrollo Web - ENCRIPTADOR DE TEXTO</Titulo>
                </Proyect>
                <Proyect href="https://www.figma.com/proto/OC7FuSrgj7XxwHWUiddgzl/Epoca-Dorada?node-id=211-225&starting-point-node-id=211%3A225&mode=design&t=BM7xFUQmvez6qEsf-1">
                    <Img src={fotoProThree}/>
                    <Titulo>Diseño de aplicacion movil</Titulo>
                </Proyect>
            </ContentProyect>
        </>
    )
}

export default PageProyectos