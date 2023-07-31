import React from "react";
import styled from "styled-components";
import Navbar from "./elementos.jsx";

const BarraNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 800px) {
        margin-top: .5rem;
        margin-bottom: .5rem;
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