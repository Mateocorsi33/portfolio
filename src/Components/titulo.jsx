import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    color: #D18C5C;
    text-align: center;
    margin-top: 4rem;
    overflow: hidden;
    
    @media (max-width: 800px) {
        font-size: 2rem;
        margin-top:2rem;
    }
`

export default function Title (props) {
    return (
            <Titulo data-aos="fade-up">{props.text}</Titulo>
    ) 
}
