import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    font-family: 'roboto';
    font-size: 40px;
    font-weight: 400;
    color:#464646;
    text-align: center;
    margin-top: 3rem;
    @media (max-width: 800px) {
        font-size: 2rem;
    }
`

export default function Title (props) {
    return (
            <Titulo>{props.text}</Titulo>
    ) 
}
