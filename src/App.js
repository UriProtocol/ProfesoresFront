import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Profesores from './pages/Profesores'
import ProfesoresAgregar from './components/ProfesoresAgregar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = { <Home /> } ></Route>
        <Route path='/profesores'>
          <Route index element = { <Profesores /> }></Route>
          <Route path='agregar' element = { <ProfesoresAgregar /> }></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
