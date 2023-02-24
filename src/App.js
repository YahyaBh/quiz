import './App.css';
import Quizz from './Quizz';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {




  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path='/quizz' element={<Quizz />} exact />
      </Routes>
    </div>
  );
}

export default App;
