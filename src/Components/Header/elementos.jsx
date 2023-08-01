import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png';
import github from "../../assets/github.png";
import Menu from './elementosPhone';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1.5rem 5rem 0 5rem;

  @media (max-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
      height: auto;
      padding: 0 5%;
      margin:0;
    }
`;

const InicioLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    @media (max-width: 800px) {
      display: none;
      font-size: 1.5rem;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        transition: .3s;
        padding: 0 .2rem;
        opacity: 70%;
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
`

const Img = styled.img`
    width: 1.4rem;
    height: 1.4rem;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 800px) {
      display: none;
    }
`;

const List = styled.li`
  list-style-type: none;
`;



const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
      }
    
      function closeMenu() {
        setShowMenu(false);
      }

  return (
    <>
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
      <Menu/>
    </>
  );
};

export default Navbar;