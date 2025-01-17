import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DetailedRubbish from './components/DetailedRubbish';
import axios from 'axios';





function App() {
  axios.defaults.baseURL = 'http://localhost:3003/api/';
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:type" element={<DetailedRubbish />} />
        
      </Routes>
    </div>
  );
}

export default App;