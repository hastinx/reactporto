
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Portofolio from './pages/portofolio';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/portofolio' element={<Portofolio />} />
      </Routes>
    </Router>


  );
}

export default App;
