import { Routes, Route } from 'react-router-dom';
import HomePage from './elements/pages/HomePage';
import BookingPage from './elements/pages/BookingPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
