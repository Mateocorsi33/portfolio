import React from "react";
import styled from "styled-components";

const Parrafo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #6F81A9;
    text-align: center;
    line-height: 2rem;

    @media (max-width: 800px) {
        font-size: 1rem;
        width: 100%;
    }
`

export default function Paragraph (props) {
    return(
        <Parrafo>{props.text}</Parrafo>
    ) 
}
