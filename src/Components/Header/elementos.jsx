import React from 'react';
import styled from 'styled-components';
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

const Nombre = styled.a`
  color: #478484;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.375rem;
  text-decoration: none;

  @media (max-width: 800px) {
      font-size: 1rem;
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

const NavLink = styled.a`
    color: #478484;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    @media (max-width: 800px) {
      font-size: .8rem;
    }
`;

const Iconos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
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
      <Nombre>Mateo Corsi</Nombre>
      <Ul>
          <List><NavLink to='/sobre-mi'>Sobre mi</NavLink></List>
          <List><NavLink to='/skills'>Skills</NavLink></List>
          <List><NavLink to='/proyectos'>Proyectos</NavLink></List>
          <List><NavLink to='/contacto'>Contacto</NavLink></List>
          <Iconos>
            <NavLink to=''><Img src={email}/></NavLink>
            <NavLink to=''><Img src={linkedin}/></NavLink>
            <NavLink to=''><Img src={github}/></NavLink>
          </Iconos>
      </Ul>
    </Nav>
  );
};

export default Navbar;