
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Portofolio from './pages/portofolio';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/reactporto/' element={<Home />} />
        <Route path='/reactporto/portofolio' element={<Portofolio />} />
      </Routes>
    </Router>


  );
}

export default App;
