import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Slides from './components/Slides';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/presentacion/1" replace />} />
        <Route
          path="/presentacion/:slide"
          element={
            <div className="w-screen h-screen">
              <Slides />
            </div>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
