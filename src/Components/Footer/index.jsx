import React from "react";
import styled from "styled-components";
import fondo from "../../assets/fondo11.png";
import { Link } from "react-router-dom";

const Fondo = styled.div` 
  background-image: url(${fondo});
  background-attachment: fixed;
  background-size: cover;
  padding: 4rem 5rem 3rem 5rem;

  @media (max-width: 800px) {
      background-attachment: fixed;
      padding: 4rem 5% 2% 5%;
  }
`

const FooterContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    gap:3rem;
`

const Nombre = styled.a`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 1.5rem; 
  }
`;

const Titulo = styled.h1`
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: normal;
    margin:0;
    padding: .5rem 0;
    border-bottom: 2px solid #fff;
    width: 110%;
    @media (max-width: 800px) {
    font-size: 1.1rem;
    font-weight: 500; 
  }
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
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    @media (max-width: 800px) {
    font-weight: 400; 
    }
    &:hover {
        transition: .3s;
        opacity: 70%;
        font-weight: 400;
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
    margin: 0;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 800px) {
    font-weight: 400; 
  }
`;


const DivCopy = styled.div`
    display: flex;
    justify-content:center;
    border-top: 2px solid #fff;
    padding: 1rem 0;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 3rem;
    @media (max-width: 800px) {
    font-weight: 400; 
    }
`;

const Footer = () => {
    return(
        <Fondo>
            <FooterContent>
                    <Links to="/" style={{}}><Nombre>Mateo Corsi</Nombre></Links>
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
        </Fondo>
    )
}

export default Footer