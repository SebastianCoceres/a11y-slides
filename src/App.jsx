import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slides from './components/Slides';
import ColorContrast from './pages/examples/ColorContrast';
import ColorBlindness from './pages/examples/ColorBlindness';
import Typography from './pages/examples/Typography';
import KeyboardNav from './pages/examples/KeyboardNav';
import AltText from './pages/examples/AltText';
import FocusTrap from './pages/examples/FocusTrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-screen h-screen">
              <Slides />
            </div>
          } />
        <Route path="/ejemplos/contraste-color" element={<ColorContrast />} />
        <Route path="/ejemplos/daltonismo" element={<ColorBlindness />} />
        <Route path="/ejemplos/tipografia" element={<Typography />} />
        <Route path="/ejemplos/navegacion-teclado" element={<KeyboardNav />} />
        <Route path="/ejemplos/texto-alternativo" element={<AltText />} />
        <Route path="/ejemplos/focus-trap" element={<FocusTrap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
