import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import imgProyect1 from "../../assets/proyectogranj.png";
import imgProyect2 from "../../assets/proyectoairbnb.png";
import imgProyect3 from "../../assets/eventwave.png";


const DivPro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    gap: 1.5rem;
    width: 100%;
    padding-bottom: 2.5rem;
    overflow: hidden;
    
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
    padding: 3rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    max-width: 960px;
    width: 100%;
    height: auto;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        margin: 1rem 0;
        width: 75%;
        padding: 2rem .5rem 1rem .5rem;
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
    padding: 3rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    max-width: 960px;
    width: 100%;
    height: auto;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        margin: 1rem 0;
        padding: 2rem .5rem 1rem .5rem;
        border-bottom: 1px solid #6F81A9;
        width: 75%;
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
        margin: .5rem 0 1rem 0;
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
        margin: .5rem 0 1rem 0;
        order: 2;
    }
`

const Img = styled.img`
    width: 16rem;
    height: fit-content;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: 800px) {
        width:60%;
    }
`

const Encabezado = styled.h1`
    width: 40rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    color: #2B4987;
    line-height: normal;
    margin: 0;
    @media (max-width: 800px) {
        font-size: 1.3rem;
        width: 90%;
    }
`

const Descripcion = styled.p`
    width: 36rem;
    color: #6F81A9;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    @media (max-width: 800px) {
        font-size: .9rem;
        width: 90%;
    }
`

const Boton = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2B4987;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    padding: .8rem 1.5rem;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;
    margin-top: 3rem;
    &:hover {
        background-color: #6F81A9;
        transform: scale(1.1);
    }
    @media (max-width: 800px) {
        margin: .5rem;
        font-size: 1rem;
    }
`

const Box = styled.div`
    
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 800px) {
            gap: 0;
        }
`


const Proyectos = () => {
    return(
        <DivPro>
            <Title text="Proyectos"/>
            <Proyecto1 data-aos="fade-right">     
                <Link href="https://www.granjalospibes.com.ar/"><Img src={imgProyect1}/></Link>
                <Text>
                    <Encabezado>Granja Los Pibes</Encabezado>
                    <Descripcion>Realice el diseño, desarrollo y deploy para la pagina web de la ONG, Granja Los Pibes, desarrollo responsive utilizando React.js y Sass</Descripcion>
                    <Box>
                        <Boton href="https://www.granjalospibes.com.ar/">Deploy</Boton>
                        <Boton href="https://github.com/Mateocorsi33/webgranjalospibes">Github</Boton>
                    </Box>
                </Text>
            </Proyecto1>
            <Proyecto2 data-aos="fade-left">
                <Text2>
                    <Encabezado>Airbnb Clon</Encabezado>
                    <Descripcion>Participe siendo colaborador de este proyecto, como Front End Developer, donde se realizó un clon de la página de alojamientos de Airbnb.</Descripcion>
                    <Box>
                        <Boton href="https://c14-02-m-node-react.vercel.app/">Deploy</Boton>
                        <Boton href="https://github.com/Mateocorsi33/Clon-de-AirBnb">Github</Boton>
                    </Box>
                </Text2>
                <Link href="https://encriptador-mateofront.vercel.app/"><Img src={imgProyect2}/></Link>
            </Proyecto2>
            <Proyecto1 data-aos="fade-right">     
                <Link href="https://s12-02-m-node-react-gestor-de-eventos.vercel.app/"><Img src={imgProyect3}/></Link>
                <Text>
                    <Encabezado>Event Wave</Encabezado>
                    <Descripcion>Participe como Front End Developer de la pagina de eventos de Event Wave.</Descripcion>
                    <Box>
                        <Boton href="https://s12-02-m-node-react-gestor-de-eventos.vercel.app/">Deploy</Boton>
                        <Boton href="https://github.com/No-Country/s12-02-m-node-react">Github</Boton>
                    </Box>
                </Text>
            </Proyecto1>
        </DivPro>
    )   
}

export default Proyectos