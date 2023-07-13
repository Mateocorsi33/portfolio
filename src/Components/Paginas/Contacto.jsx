import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import email from "../../assets/email.png";
import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const ContentContacto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 5%;
    gap: 10%;
    @media (max-width: 800px) {
            
    }
`

const Parrafo = styled.div`
    width: 40%;
    padding-bottom: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    color: #478484;
    text-align: center;
    @media (max-width: 800px) {
            
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
    color: #478484;
    text-align: center;
    font-family: Roboto;
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
        <>
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
                        <Link href="http://github.com/Mateofront">github.com/Mateofront</Link>
                    </Div>
                </DivIconos>
            </ContentContacto>
        </>
    )
}

export default PageContacto