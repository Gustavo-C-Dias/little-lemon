// BookingPage.jsx
import React, { useEffect, useReducer } from 'react';
import Header from '../global/Header';
import Nav from '../organismo/Nav';
import Footer from '../global/Footer';
import BookingForm from '../organismo/BookingForm';

function BookingPage() {
  const initializeTimes = () => {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
  };

  const updateTimes = (state, action) => {
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  useEffect(() => {
    console.log("Available Times Updated:", availableTimes);
  }, [availableTimes]);

  return (
    <>
      <Header urlImage='./assets/logo.svg'>
        <Nav />
      </Header>
      <main>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
