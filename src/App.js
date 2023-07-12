import './App.css';
import Header from './Components/Header';
import Principal from "./Components/Paginas/Principal";
import PageSobreMi from './Components/Paginas/SobreMi';
import PageProyectos from './Components/Paginas/Proyectos';
import PageContacto from './Components/Paginas/Contacto';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
