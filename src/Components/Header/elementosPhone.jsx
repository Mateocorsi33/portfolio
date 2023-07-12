import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";


const Nav = styled.nav`
  background-color: #ffffff;
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1.5rem 5rem 0 5rem;

  @media (max-width: 800px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        height: auto;
        padding: 0 5%;
        margin:0;
    }
`;


const InicioLink = styled(Link)`
    display: none;
    text-decoration: none;
    color: #478484;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.375rem;
    cursor: pointer;
    @media (max-width: 800px) {
        display: flex;
        font-size: 1.5rem;
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
      font-size: 1rem;
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
    @media (max-width: 800px) {
      display: none;
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
    @media (max-width: 800px) {
      justify-content: center;
      &:hover {
        transition: .3s;
        padding: 0;
        opacity: 70%;
    }
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



const BotonMenu = styled.button`
    display: none;
     
    @media (max-width: 800px) {
        display: flex;
        justify-content:center;
        align-items: center;
        background-color: #ffffff;
        border-radius: 10px;
        width: fit-content;
        height: auto;
        border: none;
        font-family: Manrope;
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: 0.05em;
        color: #464646;
        cursor: pointer;
        &:hover {
            transition: .3s;
            opacity: 80%;
        }
    }
`


const ImgMenu = styled.img`
    display: flex;
    align-items: center;
    width: 3rem;
    height: 3rem;

    &:hover {
            transition: .3s;
            opacity: 80%;
        }
`

const ImgClose = styled.img`
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;

    &:hover {
            transition: .3s;
            opacity: 80%;
        }
`

const Ul = styled.ul`
    display: none;
    flex-direction: row;
    gap: 3rem;

    @media (max-width: 800px) {
      display: ${props => props.showMenu ? 'flex' : 'none'};
      justify-content: center;
      text-align: center;
      flex-direction: column;
      padding: 0;
      gap:1rem;
      &.show {
            transition: opacity 0.2s ease-in-out;
        }
    }
`;

const List = styled.li`
  list-style-type: none;
  &:hover {
        transform: scale(1.1);
        } 
`;



const Menu = () => {

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
            <InicioLink to="/" style={{}} onClick={closeMenu}>Mateo Corsi</InicioLink>
            <BotonMenu onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <ImgClose src={close} alt="close"/> : <ImgMenu src={menu}/>}
            </BotonMenu>
        </Nav>
        <Ul showMenu={showMenu}>
            <List><NavLink to="/sobre-mi" style={{}} onClick={closeMenu}>Sobre mi</NavLink></List>
            <List><NavLink to='/proyectos' style={{}} onClick={closeMenu}>Proyectos</NavLink></List>
            <List><NavLink to='/contacto' style={{}} onClick={closeMenu}>Contacto</NavLink></List>
            <Iconos>
                <LinkRedes href="mailto: Mateofrontend@gmail.com" onClick={closeMenu}><Img src={email}/></LinkRedes>
                <LinkRedes href="http://www.linkedin.com/in/mateocorsi" onClick={closeMenu}><Img src={linkedin}/></LinkRedes>
                <LinkRedes href="http://github.com/Mateofront" onClick={closeMenu}><Img src={github}/></LinkRedes>
            </Iconos>
        </Ul>
    </>
  );
};

export default Menu;