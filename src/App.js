import { Routes, Route } from 'react-router-dom';
import HomePage from './elements/pages/HomePage';
import BookingPage from './elements/pages/BookingPage';
import ConfirmReservation from './elements/pages/ConfirmReservation';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking/confirmed" element={<ConfirmReservation />} />
    </Routes>
  );
}

export default App;
