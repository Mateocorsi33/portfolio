import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const FooterContent = styled.div`
    width: 80%;
    height: auto;
    margin-top: 8rem;
    padding: 3rem 10% 1rem 10%;
    background-color: #478484;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    gap:2rem;
`

const Nombre = styled.a`
  color: #ffffff;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

const Titulo = styled.h1`
    color: #FFF;
    font-family: Roboto Condensed;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin:0;
    padding: .2rem 0;
    border-bottom: 2px solid #C2B27F;
    width: 110%;
`

const DivLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap:5rem;
    @media (max-width: 800px) {
        flex-direction: column;
        gap:2rem;
    }
`;

const Navegacion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:.8rem;
`;

const Links = styled(Link)`
    text-decoration: none;
    color: #FFF;
    font-family: Roboto Condensed;
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    &:hover {
        transition: .3s;
        opacity: 70%;
    }
`;

const Contacto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:.8rem;
`;

const Datos = styled.p`
    margin:0;
    color: #FFF;
    font-family: Roboto Condensed;
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;


const DivCopy = styled.div`
    display: flex;
    justify-content:center;
    border-top: 2px solid #C2B27F;
    padding: 1rem 0;
    color: #FFF;
    font-family: Roboto Condensed;
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Footer = () => {
    return(
        <FooterContent>
                <Links to="/" style={{}}><Nombre>MATEO CORSI</Nombre></Links>
            <DivLinks>
                <Navegacion>
                    <Titulo>Navegación</Titulo>
                    <Links to="/sobre-mi" style={{}}>Sobre mi</Links>
                    <Links to='/proyectos' style={{}}>Proyectos</Links>
                    <Links to='/contacto' style={{}}>Contacto</Links>
                </Navegacion>
                <Contacto>
                    <Titulo>Contacto</Titulo>
                    <Datos>Mateo Corsi</Datos>
                    <Datos>Buenos Aires, Argentina</Datos>
                    <Datos>Email: Mateofrontend@gmail.com</Datos>
                    <Datos>Telefono: +54 249 424-7241</Datos>
                </Contacto>
            </DivLinks>
                <DivCopy>
                    © Copyright - Todos los derechos reservados | Desarrollado por Mateo Corsi - 2023.
                </DivCopy>
        </FooterContent>
    )
}

export default Footer