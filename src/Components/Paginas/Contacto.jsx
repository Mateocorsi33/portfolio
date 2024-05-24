import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import email from "../../assets/emailcolor.png";
import whatsapp from "../../assets/whacolor.png";
import linkedin from "../../assets/linkcolor.png";
import github from "../../assets/github2.png";


const Fondo = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    padding: 2rem 0 5rem 0;

    @media (max-width: 800px) {
        padding: 2.3rem 0 6rem 0;
    }
`

const ContentContacto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 3% 5%;
    gap: 10%;
    @media (max-width: 800px) {
        gap:1rem;
        padding-top: 2.5rem;
        padding-bottom: 3rem;
    }
`

const Parrafo = styled.div`
    width: 40%;
    padding-bottom: 1.8rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    color: #444440;
    text-align: center;
    @media (max-width: 800px) {
        width: 90%;
        font-size: 1rem;
    }
`

const DivIconos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    @media (max-width: 800px) {
        flex-direction: column;
        gap: 1rem;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
    gap:1rem;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 800px) {
        padding: .5rem;
    }    
`

const Img = styled.img`
    width: 3rem;
    height: 3rem;
    @media (max-width: 800px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`

const Link = styled.a`
    color: #28555E;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transition: .3s;
        opacity: 70%;
    }
    @media (max-width: 800px) {
        font-size: 1rem;
    }
`


const PageContacto = () => {
    return(
        <Fondo>
            <Title text="CONTACTO" />
            <ContentContacto>
                <Parrafo>
                    Si estás buscando un desarrollador Front End para tu proyecto o simplemente quieres saber más sobre mi experiencia, no dudes en ponerte en contacto conmigo. ¡Estaré encantado de hablar contigo y conocer más sobre tus necesidades y objetivos!
                </Parrafo>
                <Parrafo>
                    Puedes contacterme a través de los siguientes medios:
                </Parrafo>
                <DivIconos>
                    <Div>
                        <Img src={email}/>
                        <Link href="mailto: Mateofrontend@gmail.com">Mateofrontend@gmail.com</Link>
                    </Div>
                    <Div>
                        <Img src={whatsapp}/>
                        <Link href="tel:+542494247241">+54 2494 24-7241</Link>
                    </Div>  
                </DivIconos>
                <DivIconos>
                    <Div>
                        <Img src={linkedin}/>
                        <Link href="http://www.linkedin.com/in/mateocorsi">www.linkedin.com/in/mateocorsi</Link>
                    </Div>
                    <Div>
                        <Img src={github}/>
                        <Link href="http://github.com/Mateocorsi33">github.com/Mateocorsi33</Link>
                    </Div>
                </DivIconos>
            </ContentContacto>
        </Fondo>
    )
}

export default PageContacto