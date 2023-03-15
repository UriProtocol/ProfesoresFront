import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Profesores from './pages/Profesores'
import ProfesoresAgregar from './components/ProfesoresAgregar';
import BarraSuperior from './components/BarraSuperior';
import ProfesoresModificar from './components/ProfesoresModificar';
import Escolaridades from './components/Escolaridades';
import General from './components/General';
import Experiencia from './components/Experiencia';
import Otros from './components/Otros';
import CrearCurriculum from './pages/CrearCurriculum';
import VerCurriculum from './pages/VerCurriculum';
import ModificarCurriculum from './pages/ModificarCurriculum';
import Login from './pages/Login';
import ActividadesAgregar from './pages/ActividadesAgregar';
import ActividadesVer from './pages/ActividadesVer';
import ActividadesModificar from './pages/ActividadesModificar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = { <BarraSuperior /> } >
          <Route index element={<Home></Home>} />
          <Route path='profesores'>
            <Route index element = { <Profesores /> }/>
            <Route path='ingresar' element = { <Login /> }/>
            <Route path='agregar' element = { <ProfesoresAgregar /> }/>
            <Route path='modificar/:c' element= { <ProfesoresModificar />}/>
            <Route path='curriculum/:id'>
                <Route path='general' element={<General />}></Route>
                <Route path='escolaridades' element={<Escolaridades />}></Route>
                <Route path='experiencia' element={<Experiencia />}></Route>
                <Route path='otros' element={<Otros />}></Route>
                <Route path='crear' element={<CrearCurriculum />}></Route>
                <Route path='ver' element={<VerCurriculum />}></Route>
                <Route path='modificar' element={<ModificarCurriculum />}></Route>
            </Route>
            <Route path='actividades'>
              <Route path='agregar/:clave' element={<ActividadesAgregar />}/>
              <Route path='ver/:clave' element={<ActividadesVer/>}/>
              <Route path='modificar/:id' element={<ActividadesModificar/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
