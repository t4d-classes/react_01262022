import { useState, useEffect, useCallback } from 'react';

import { useListAsync } from './useListAsync';


export const useCarToolStoreAsync = () => {

  const [
    cars, refreshCars, appendCar,
    replaceCar, removeCar
  ] = useListAsync('cars');

  const [ editCarId, setEditCarId ] = useState(-1);

  useEffect(() => {
    // run some code after the re-render
    // causing a side effect after the render

    refreshCars();

  }, [refreshCars]);

  const addCar =  useCallback(async (car) => {
    await appendCar(car);
    setEditCarId(-1);
  }, [appendCar]);

  const deleteCar = (carId) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const saveCar = (car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return {
    cars,
    editCarId,
    editCar: setEditCarId,
    cancelCar,
    addCar,
    saveCar,
    deleteCar,
  };


};