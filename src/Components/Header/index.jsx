import React from "react";
import styled from "styled-components";
import Navbar from "./elementos.jsx";

const BarraNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem;

    @media (max-width: 800px) {
        padding: 0;
        flex-direction: column;
        justify-content: center;
    }
`

const Header = () => {
    return(
        <BarraNav>
            <Navbar />
        </BarraNav>
    )
}

export default Header;