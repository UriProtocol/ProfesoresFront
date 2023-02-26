import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Profesores from './pages/Profesores'
import ProfesoresAgregar from './components/ProfesoresAgregar';
import BarraSuperior from './components/BarraSuperior';
import ProfesoresModificar from './components/ProfesoresModificar';
import Escolaridades from './components/Escolaridades';
import Seccion1 from './components/Seccion1';
import Seccion3 from './components/Seccion3';
import Seccion4 from './components/Seccion4';
import CrearCurriculum from './components/CrearCurriculum';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = { <BarraSuperior /> } >
          <Route index element={<Home></Home>} />
          <Route path='profesores'>
            <Route index element = { <Profesores /> }/>
            <Route path='agregar' element = { <ProfesoresAgregar /> }/>
            <Route path='modificar/:c' element= { <ProfesoresModificar />}/>
            <Route path='curriculum/:id'>
                <Route path='seccion1' element={<Seccion1 />}></Route>
                <Route path='escolaridades' element={<Escolaridades />}></Route>
                <Route path='seccion3' element={<Seccion3 />}></Route>
                <Route path='seccion4' element={<Seccion4 />}></Route>
                <Route path='crear' element={<CrearCurriculum />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
