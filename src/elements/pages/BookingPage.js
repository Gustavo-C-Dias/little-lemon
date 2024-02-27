import React, { useEffect, useReducer, navigate } from 'react';
import Header from '../global/Header';
import Nav from '../organismo/Nav';
import Footer from '../global/Footer';
import BookingForm from '../organismo/BookingForm';

function BookingPage() {

  const initializeTimes = async () => {
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];
    return await fetchAPI(currentDate);
  };

  const updateTimes = async (state, action) => {
    const selectedDate = action.payload;
    return await fetchAPI(selectedDate);
  };

  const handleSubmit = async (formData, e) => {
    e.preventDefault();
    try {
      const submissionResult = await submitAPI(formData);
      if (submissionResult) {
        navigate('/booking/confirmed');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  }

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
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmitForm={handleSubmit} />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
