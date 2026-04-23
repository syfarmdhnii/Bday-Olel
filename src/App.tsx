import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage, PhotoboothCapture, MemoryBookView, FinalInteraction } from '@/pages';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/capture" element={<PhotoboothCapture />} />
        <Route path="/memory-book" element={<MemoryBookView />} />
        <Route path="/archive" element={<FinalInteraction />} />
        <Route path="/final" element={<Navigate to="/archive" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
