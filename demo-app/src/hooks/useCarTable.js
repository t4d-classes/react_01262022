import { useCarToolStoreContext } from '../contexts/carToolStoreContext';

export const useCarTable = () => {

  const {
    cars, editCarId, editCar,
    deleteCar, saveCar, cancelCar } = useCarToolStoreContext();

  return {
    cars, editCarId, editCar,
    deleteCar, saveCar, cancelCar
  };  

};