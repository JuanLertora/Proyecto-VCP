import logo from './logo.svg';
import './App.css';
import Inicio from './componentes/Inicio';
import {Route, Link,NavLink,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Inicio/>}/>
      </Routes>
    </div>
  );
}

export default App;
