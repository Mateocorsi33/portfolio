import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const Nav = styled.nav`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1.5rem 5rem 0 5rem;

  @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      height: auto;
      margin: 0;
    }
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 3rem;

    @media (max-width: 800px) {
      justify-content: center;
      text-align: center;
      flex-direction: column;
      padding: 0;
      gap:1rem;
    }
`;

const List = styled.li`
  list-style-type: none;
`;

const InicioLink = styled(Link)`
    text-decoration: none;
    color: #478484;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.375rem;
    cursor: pointer;
    @media (max-width: 800px) {
      font-size: 1rem;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: #478484;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        transition: .3s;
        padding: 0 .2rem;
        opacity: 70%;
    }
    @media (max-width: 800px) {
      font-size: .8rem;
      text-decoration: none;
    }
`;

const LinkRedes = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
        transition: .3s;
        padding: 0 .2rem;
        opacity: 70%;
    }
`

const Iconos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  &:hover {
        transition: .3s;
        padding: 0;
        opacity: 70%;
    }
`

const Img = styled.img`
    width: 1.4rem;
    height: 1.4rem;
    @media (max-width: 800px) {
      width: 1.2rem;
      height: 1.2rem;
    }
`;

const Navbar = () => {
  return (
    <Nav>
      <InicioLink to="/" style={{}}>Mateo Corsi</InicioLink>
      <Ul>
          <List><NavLink to="/sobre-mi" style={{}}>Sobre mi</NavLink></List>
          <List><NavLink to='/proyectos' style={{}}>Proyectos</NavLink></List>
          <List><NavLink to='/contacto' style={{}}>Contacto</NavLink></List>
          <Iconos>
            <LinkRedes href="mailto: Mateofrontend@gmail.com"><Img src={email}/></LinkRedes>
            <LinkRedes href="http://www.linkedin.com/in/mateocorsi"><Img src={linkedin}/></LinkRedes>
            <LinkRedes href="http://github.com/Mateofront"><Img src={github}/></LinkRedes>
          </Iconos>
      </Ul>
    </Nav>
  );
};

export default Navbar;