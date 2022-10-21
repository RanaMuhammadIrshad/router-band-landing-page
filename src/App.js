import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Vocals from './routes/Vocals';
import Guitar from './routes/Guitar';
import Bass from './routes/Bass';
import Drums from './routes/Drums';
import Band from './routes/Band';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="vocals" element={<Vocals />} />
          <Route path="guitar" element={<Guitar />} />
          <Route path="bass" element={<Bass />} />
          <Route path="drums" element={<Drums />} />
          <Route index element={<Band/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
