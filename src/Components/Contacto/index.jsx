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
    justify-content: center;
    align-items: center;
    background-color: #444440;
    width: 100%;
    height: auto;
    margin: 0;
    padding-top: 1rem;
    @media (max-width: 800px) {
            
    }
`

const ContactoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2.5rem 0;
    overflow: hidden;
    
    @media (max-width: 800px) {
        margin: 1rem 0 3rem 0;
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
    gap:1rem;
    &:hover {
        transform: scale(1.01);
        opacity: 90%;
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
    color: #fff;
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



const Contacto = () => {
    return(
        <Fondo>
        <Title text="Contacto"/>
            <ContactoContent data-aos="fade-up">
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
            </ContactoContent>
        </Fondo>
    )
}

export default Contacto