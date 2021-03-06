import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { CarForm } from '../components/CarForm';

import { addCarSpy } from '../hooks/useCarForm';

jest.mock('../hooks/useCarForm');

describe('CarForm testing library', () => {
  let car;
  let textInputKeys = ['make', 'model', 'color'];
  let numberInputKeys = ['year', 'price'];

  beforeEach(() => {
    car = {
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2020,
      color: 'red',
      price: 45000,
    };
  });

  const renderComponent = () => {
    render(
      <CarForm buttonText="Add Car" />,
    );
  };

  test('render CarViewRow component', () => {

    renderComponent();

    const textboxInputs = screen.getAllByRole('textbox');
    expect(textboxInputs.length).toBe(3);
    textboxInputs.forEach((input, index) => {
      const evt = {
        target: {
          type: input.type,
          value: car[textInputKeys[index]],
          name: input.name,
        },
      };
      fireEvent.change(input, evt);
    });

    const spinbuttonInputs = screen.getAllByRole('spinbutton');
    expect(spinbuttonInputs.length).toBe(2);
    spinbuttonInputs.forEach((input, index) => {
      const evt = {
        target: {
          type: input.type,
          value: car[numberInputKeys[index]],
          name: input.name,
        },
      };
      fireEvent.change(input, evt);
    });

    const submitButton = screen.getByRole('button');

    fireEvent.click(submitButton);
    expect(addCarSpy).toHaveBeenCalledWith(car);
  });
});
