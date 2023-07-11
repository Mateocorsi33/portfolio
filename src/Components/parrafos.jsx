import React from "react";
import styled from "styled-components";

const Parrafo = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    color: #478484;
    text-align: center;
    @media (max-width: 800px) {
        font-size: 1.2rem;
        width: 100%;
    }
`

export default function Paragraph (props) {
    return(
        <Parrafo>{props.text}</Parrafo>
    ) 
}
