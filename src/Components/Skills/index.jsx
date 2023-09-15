import React from "react";
import styled from "styled-components";
import Title from "../titulo";
import html5 from "../../assets/html5.png";
import css3 from "../../assets/css3.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import github from "../../assets/github2.png";
import adobexd from "../../assets/adobexd.png";
import figma from "../../assets/figma.png";



const Fondo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    
    @media (max-width: 800px) {
    }
`

const SkillsContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2.8rem 0 5rem 0;
    padding: 2rem;
    gap: 4rem;
    @media (max-width: 800px) {
        flex-wrap: wrap;
        margin: 2rem 0 3rem 0;
        padding-inline: 5%;
    }
`

const Img = styled.img`
    width: 5rem;
    height: 5rem;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 800px) {
        width: 2.7rem;
        height: 2.7rem;
    }
`

const Skills = () => {
    return(
        <Fondo>
            <Title text="Skills" data-aos="fade-up"/>
            <SkillsContent data-aos="fade-up">
                <Img src={html5}/>
                <Img src={css3}/>
                <Img src={js}/>
                <Img src={react}/>
                <Img src={github}/>
                <Img src={figma}/>
                <Img src={adobexd}/>
            </SkillsContent>
        </Fondo>
    )
}

export default Skills