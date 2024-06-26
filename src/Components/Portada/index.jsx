import React from "react";
import styled from "styled-components";
import foto from "../../assets/perfil2.png";
import vector from "../../assets/vector.png";
import cv from "../../assets/cv.pdf";


const Fondo = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 4rem 5rem 9rem 5rem;
    overflow: hidden;

    @media (max-width: 800px) {
        background-attachment: fixed;
        display: flex;
        height: auto;
        flex-direction: column;
        gap: 1rem;
        margin: 0;
    }
`

const Texto = styled.div`
    width: 38rem;
    margin-top: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    @media (max-width: 800px) {
        width: 90%;
        text-align: center;
        margin-top: .5rem;
        margin-bottom: 3rem;
        order: 2;
    }
`

const Titulo = styled.h1`
    font-size: 3.8rem;
    font-weight: 800;
    color: #D18C5C;
    margin: 0;
    animation: bounceInLeft;
    animation-duration: 1s;

    @media (max-width: 800px) {
        font-size: 2rem;
        padding: .4rem 0;
    }
`

const Subtitulo = styled.h3`
    font-size: 1.8rem;
    font-weight: 500;
    margin: .5rem 0;
    animation: bounceInLeft;
    animation-duration: 1.2s;

    @media (max-width: 800px) {
        font-size: 1.5rem;
        padding-bottom: .4rem;
    }
`

const Parrafo = styled.p`
    font-weight: 300;
    font-size: 1.2rem;
    margin: .5rem 0;
    animation: bounceInLeft;
    animation-duration: 1.3s;

    @media (max-width: 800px) {
        font-size: 1rem;
        padding-bottom: .4rem;
    }
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 6rem;
    gap: 2rem;
    animation: bounceInLeft;
    animation-duration: 1.3s;

    @media (max-width: 800px) {
        justify-content: center;
        font-size: .8rem;
        margin-top: 3rem;
        gap: 2rem;
        width: 100%;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        transition: .3s;
        padding: 0 .5rem;
        color: #D18C5C;
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
    width: .8rem;
    height: .8rem;
    margin-left: 0.4rem;
`

const Imagen = styled.img`
    width: 25rem;
    height: 25rem;
    border-radius: 10rem;
    margin-top: 3rem;
    animation: fadeInRight;
    animation-duration: 1s;
    
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
        margin-top: 1rem;
        border-radius: 0;
        order: 1; 
    }    
`



const Portada = () => {
    return(
            <Fondo>
                <Texto>
                    <div>
                        <Titulo>Hola, soy Mateo!</Titulo>
                        <Subtitulo>Desarrollador Front End</Subtitulo>
                        <Parrafo>Desarrollo de páginas web responsive. Podés ver los proyectos que he realizado y ponerte en contacto conmigo.</Parrafo>
                    </div>
                    <Links>
                        <Link download= 'CV - Mateo Corsi' href={cv}>Descargar CV<Vector src={vector}/></Link>
                        <Link href="http://www.linkedin.com/in/mateocorsi">Linkedin<Vector src={vector}/></Link>
                        <Link href="http://github.com/Mateocorsi33">Github<Vector src={vector}/></Link>
                        <Link href="https://www.behance.net/mateocorsi">Behance<Vector src={vector}/></Link>
                    </Links>
                </Texto>
                <div>
                    <Imagen src={foto}/>
                </div>
            </Fondo>
    )
}

export default Portada