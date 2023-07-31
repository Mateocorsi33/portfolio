import React from "react";
import styled from "styled-components";
import fondo from "../../assets/fondo.png";
import foto from "../../assets/perfil2.png";
import vector from "../../assets/vector-links.png";
import cv from "../../assets/cv.pdf";


const Fondo = styled.div`  
    width: auto;
    height: auto;
    background-image: url(${fondo});
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 6rem;
    margin-top: 2.5rem;

    @media (max-width: 800px) {
        background-attachment: fixed;
        display: flex;
        height: auto;
        flex-direction: column;
        margin-bottom: 0;
        gap: 1rem;
        margin-top: 0;
    }
`

const Texto = styled.div`
    width: 48rem;
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: #478484;
    @media (max-width: 800px) {
        width: 90%;
        text-align: center;
        margin-top: .5rem;
        margin-bottom: 3rem;
        order: 2;
    }
`

const Titulo = styled.h1`
    font-size: 3.6rem;
    font-weight: 500;
    color: #464646;
    margin: 0;
    @media (max-width: 800px) {
        font-size: 2rem;
        padding: .4rem 0;
    }
`

const Subtitulo = styled.h3`
    font-size: 35px;
    font-weight: 300;
    margin: 0.7rem 0;
    @media (max-width: 800px) {
        font-size: 1.5rem;
        padding-bottom: .4rem;
    }
`

const Parrafo = styled.p`
    font-weight: 200;
    font-size: 26px;
    margin: 0.7rem 0;
    @media (max-width: 800px) {
        font-size: 1rem;
        padding-bottom: .4rem;
    }
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
    gap: 2rem;
    @media (max-width: 800px) {
        justify-content: center;
        margin-top: 1rem;
        gap: 2rem;
        width: 100%;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #464646;
    cursor: pointer;
    &:hover {
        transition: .3s;
        padding: 0 .5rem;
        opacity: 70%;
    }
    @media (max-width: 800px) {
        &:hover {
            transition: .3s;
            padding:0;
            opacity: 70%;
        }
    }
`

const Vector = styled.img`
    margin-left: 0.4rem;
`

const Imagen = styled.img`
    width: 22rem;
    height: 22rem;
    border-radius: 10rem;
    margin-top: 3rem;

    /* &:hover {
        animation-duration: 2s;
        animation-name: slidein;
    }

    @keyframes slidein {
        from {
            margin-left: 4rem;
            width: 100%
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    } */

    @media (max-width: 800px) {
        width:16rem;
        height:16rem;
        border-radius: 0;
        order: 1; 
    }    
`



const Portada = () => {
    return(
            <Fondo>
                <Texto>
                    <div>
                        <Titulo>Hola, mi nombre es Mateo!</Titulo>
                        <Subtitulo>Desarrollador Front End</Subtitulo>
                        <Parrafo>Desarrollo de paginas web responsive. Puedes ver los proyectos que he realizado y ponerte en contacto conmigo.</Parrafo>
                    </div>
                    <Links>
                        <Link download= 'CV - Mateo Corsi' href={cv}>Descargar CV<Vector src={vector}/></Link>
                        <Link href="http://github.com/Mateofront">Github<Vector src={vector}/></Link>
                        <Link href="http://www.linkedin.com/in/mateocorsi">Linkedin<Vector src={vector}/></Link>
                    </Links>
                </Texto>
                <div>
                    <Imagen src={foto}/>
                </div>
            </Fondo>
    )
}

export default Portada