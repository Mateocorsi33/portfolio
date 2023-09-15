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
        gap: 5rem;
        padding: 1rem 5%;
        flex-direction: column;
    }
`

const Proyect = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: #ffffff;
    box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 20%;
    padding: 1rem 3rem;
    gap: 1rem;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 800px) {
        width: 80%;
        padding: 3rem 1rem;
        margin: 1rem 0;
        border-bottom: 1px solid #6F81A9;
    }
`

const Img = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        transition: .3s;
        opacity: 70%;
    }
    @media (max-width: 800px) {
        width: 80%;
        height: auto;
    }
`

const Titulo = styled.h1`
    width: fit-content;
    text-align: center;
    margin: 1rem 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: #6F81A9;
    font-style: normal;
    line-height: normal;
    cursor: pointer;
    @media (max-width: 800px) {
        font-size: 1rem;
        margin: 1rem;
    }
`



const PageProyectos = () => {
    return(
        <Fondo>
            <Title text="PROYECTOS" />
            <ContentProyect data-aos="flip-up">
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
                    <Titulo>Diseño de aplicacion movil - Epoca Dorada</Titulo>
                </Proyect>
            </ContentProyect>
        </Fondo>
    )
}

export default PageProyectos