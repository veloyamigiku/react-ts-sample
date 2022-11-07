import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sample1 from './components/Sample1';
import Sample2 from './components/Sample2';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sample1" element={<Sample1 />} />
      <Route path="/sample2" element={<Sample2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
