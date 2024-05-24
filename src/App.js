import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import Principal from "./Components/Paginas/Principal";
import PageSobreMi from './Components/Paginas/SobreMi';
import PageProyectos from './Components/Paginas/Proyectos';
import PageContacto from './Components/Paginas/Contacto';
import Footer from './Components/Footer';
import fondo from "./assets/fondo1111.png";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Div = styled.div` 
  //background-image: url(${fondo});
  background-color: #444440;
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 800px) {
      background-attachment: fixed;
  }
`

function App() {
  return (
    <Div>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/sobre-mi' element={<PageSobreMi />}/>
            <Route path='/proyectos' element={<PageProyectos />}/>
            <Route path='/contacto' element={<PageContacto />}/>
          </Routes>
        <Footer/>
      </Router>
    </Div>
  );
}

export default App;
