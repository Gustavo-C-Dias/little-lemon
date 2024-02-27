import React from 'react';
import Header from '../global/Header'
import Footer from '../global/Footer'

function ConfirmReservation() {
  return (
    <>
        <Header />
        <main>
            <h2>Reserva Confirmada!</h2>
            <p>Sua reserva foi confirmada com sucesso.</p>
        </main>
        <Footer/>
    </>
  );
}

export default ConfirmReservation
