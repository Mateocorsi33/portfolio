import './App.css';
import Header from './Components/Header';
import Portada from './Components/Portada';
import SobreMi from './Components/Sobre-mi';
import Proyectos from './Components/Proyectos';
import Skills from "./Components/Skills";
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Portada />
      <SobreMi/>
      <Skills/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
