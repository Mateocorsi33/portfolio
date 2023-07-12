import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import fotoProOne from "../../assets/proyectogranja.png";
import fotoProTwo from "../../assets/proyectoencriptador.png";
import fotoProThree from "../../assets/proyectoorg.png";



const ContentProyect = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;
    width: 90%;
    padding: 5%;

    &:hover {
        
    }
    @media (max-width: 800px) {
        
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
        
    }
`

const Titulo = styled.h1`
    margin: 0;
    color: #464646;
    font-family: Roboto Condensed;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    &:hover {
        
    }
    @media (max-width: 800px) {
        
    }
`



const PageProyectos = () => {
    return(
        <>
            <Title text="PROYECTOS" />
            <ContentProyect>
                <Proyect href="https://webgranjalospibes.vercel.app/">
                    <Img src={fotoProOne}/>
                    <Titulo>GRANJA LOS PIBES</Titulo>
                </Proyect>
                <Proyect href="https://encriptador-mateofront.vercel.app/">
                    <Img src={fotoProTwo}/>
                    <Titulo>ENCRIPTADOR DE TEXTO</Titulo>
                </Proyect>
                <Proyect href="https://org-mateofront.vercel.app/">
                    <Img src={fotoProThree}/>
                    <Titulo>ORG</Titulo>
                </Proyect>
            </ContentProyect>
        </>
    )
}

export default PageProyectos