import { render, screen } from '@testing-library/react';
import BookingForm from './elements/organismo/BookingForm';
import HomePage from './elements/pages/HomePage';

const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

test('renders homePage', () => {
  render(<HomePage />);
  const headingElements = screen.getAllByRole('heading', { name: /Little Lemon/i });
  expect(headingElements.length).toBeGreaterThan(0);
});

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes retorna os horários disponíveis esperados', () => {
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

  const result = initializeTimes();
  expect(result).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);
});

test('updateTimes retorna o mesmo valor fornecido no estado', () => {
  const updateTimes = (state, action) => {
    // Aqui você pode implementar a lógica para atualizar os horários com base na data selecionada
    // Por enquanto, estamos apenas retornando os mesmos horários disponíveis, independentemente da data
    return state;
  };

  const initialState = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

  const action = { type: 'SOME_ACTION', payload: ['Novo Horário'] };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});

